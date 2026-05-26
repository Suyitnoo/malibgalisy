import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useLocation } from "wouter";
import { Card, CardContent } from "../components/ui/card";

export default function QiblaPage() {
    const [, navigate] = useLocation();
    const [heading, setHeading] = useState<number>(0);
    const [qiblaResult, setQiblaResult] = useState<number | null>(null);
    const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
    const [status, setStatus] = useState<string>("Initializing...");
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [isManualMode, setIsManualMode] = useState(false);

    const [isDragging, setIsDragging] = useState(false);
    const [startAngle, setStartAngle] = useState(0);
    const [currentRotation, setCurrentRotation] = useState(0);

    const KAABA_LAT = 21.422487;
    const KAABA_LONG = 39.826206;

    useEffect(() => {
        if ("geolocation" in navigator) {
            const timeoutId = setTimeout(() => {
                if (!coords) {
                    const jakarta = { latitude: -6.2088, longitude: 106.8456 };
                    setCoords(jakarta);
                    setQiblaResult(calculateQibla(jakarta.latitude, jakarta.longitude));
                    setStatus("Location timed out. Using Jakarta as default.");
                }
            }, 5000);

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    clearTimeout(timeoutId);
                    const { latitude, longitude } = position.coords;
                    setCoords({ latitude, longitude });
                    const qibla = calculateQibla(latitude, longitude);
                    setQiblaResult(qibla);
                    setStatus("Waiting for compass...");
                },
                (error) => {
                    clearTimeout(timeoutId);
                    const jakarta = { latitude: -6.2088, longitude: 106.8456 };
                    setCoords(jakarta);
                    setQiblaResult(calculateQibla(jakarta.latitude, jakarta.longitude));
                    setStatus("Location access denied. Using Jakarta as default.");
                }
            );
        } else {
            setStatus("Geolocation is not supported. Using Jakarta as default.");
            const jakarta = { latitude: -6.2088, longitude: 106.8456 };
            setCoords(jakarta);
            setQiblaResult(calculateQibla(jakarta.latitude, jakarta.longitude));
        }
    }, []);

    useEffect(() => {
        const handleOrientation = (event: any) => {
            if (isManualMode) return;

            let compass = event.alpha;
            if (event.webkitCompassHeading) {
                compass = event.webkitCompassHeading;
            }
            if (event.absolute && event.alpha !== null) {
                compass = 360 - event.alpha;
            }

            if (compass !== null && compass !== undefined) {
                const headingVal = (compass + 360) % 360;
                setHeading(headingVal);
            }
        };

        const initCompass = async () => {
            if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
                setStatus("Tap to enable compass.");
            } else {
                if ('ondeviceorientationabsolute' in (window as any)) {
                    (window as any).addEventListener("deviceorientationabsolute", handleOrientation, true);
                } else {
                    window.addEventListener("deviceorientation", handleOrientation, true);
                }
                setPermissionGranted(true);

                setTimeout(() => {
                    setHeading(prev => {
                        if (prev === 0) {
                            if ('ondeviceorientationabsolute' in (window as any)) {
                                (window as any).removeEventListener("deviceorientationabsolute", handleOrientation, true);
                                window.addEventListener("deviceorientation", handleOrientation, true);
                            } else {
                                setStatus("Compass not detected. Rotate manually.");
                                setIsManualMode(true);
                            }
                        } else {
                            setStatus("Compass active.");
                        }
                        return prev;
                    });
                }, 1000);
            }
        };

        initCompass();

        return () => {
            if ('ondeviceorientationabsolute' in (window as any)) {
                (window as any).removeEventListener("deviceorientationabsolute", handleOrientation, true);
            }
            window.removeEventListener("deviceorientation", handleOrientation, true);
        };
    }, [isManualMode]);

    const requestAccess = async () => {
        if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
            try {
                const permission = await (DeviceOrientationEvent as any).requestPermission();
                if (permission === "granted") {
                    setPermissionGranted(true);
                    setIsManualMode(false);
                    window.addEventListener("deviceorientation", (event: any) => {
                        let compass = event.webkitCompassHeading || event.alpha;
                        if (compass) setHeading(compass);
                    }, true);
                    setStatus("Compass active.");
                } else {
                    setStatus("Permission denied. Rotate manually.");
                    setIsManualMode(true);
                }
            } catch (e) {
                setStatus("Error requesting permission.");
                setIsManualMode(true);
            }
        }
    };

    function calculateQibla(latitude: number, longitude: number) {
        const latRad = degToRad(latitude);
        const longRad = degToRad(longitude);
        const kaabaLatRad = degToRad(KAABA_LAT);
        const kaabaLongRad = degToRad(KAABA_LONG);

        const y = Math.sin(kaabaLongRad - longRad);
        const x = Math.cos(latRad) * Math.tan(kaabaLatRad) - Math.sin(latRad) * Math.cos(kaabaLongRad - longRad);

        let qibla = radToDeg(Math.atan2(y, x));
        return (qibla + 360) % 360;
    }

    function degToRad(deg: number) { return deg * (Math.PI / 180); }
    function radToDeg(rad: number) { return rad * (180 / Math.PI); }

    const handleStart = (clientX: number, clientY: number, rect: DOMRect) => {
        setIsDragging(true);
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
        setStartAngle(angle - currentRotation);
        setIsManualMode(true);
        setStatus("Manual mode");
    };

    const handleMove = (clientX: number, clientY: number, rect: DOMRect) => {
        if (!isDragging) return;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
        const newRotation = angle - startAngle;
        setCurrentRotation(newRotation);
        setHeading(-newRotation);
    };

    const compassStyle = {
        transform: `rotate(${-1 * (heading || 0)}deg)`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        cursor: 'grab'
    };

    const qiblaMarkerStyle = {
        transform: `rotate(${qiblaResult || 0}deg)`,
    };

    return (
        <main
            className="min-h-screen bg-slate-50 text-slate-800 pb-24 relative overflow-hidden flex flex-col items-center"
            onMouseUp={() => setIsDragging(false)}
            onTouchEnd={() => setIsDragging(false)}
        >
            <div className="w-full max-w-md p-6 flex items-center justify-between z-10">
                <Button variant="ghost" size="icon" onClick={() => navigate("~/")} className="rounded-full hover:bg-slate-100">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <h1 className="text-lg font-bold">Qibla Compass</h1>
                <div className="w-10" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-6 relative z-10">
                {(status.includes("Permission") || status.includes("Tap")) && !permissionGranted && (
                    <div className="text-center mb-10 w-full">
                        <p className="text-sm text-muted-foreground mb-4">{status}</p>
                        <Button onClick={requestAccess} className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8">
                            Enable Compass
                        </Button>
                    </div>
                )}
                {isManualMode && (
                    <p className="text-xs text-amber-600 font-medium mb-6 animate-pulse">
                        Rotate the compass manually to align N to North
                    </p>
                )}

                <div
                    className="relative w-72 h-72 mb-12 select-none"
                    onMouseDown={(e) => { const rect = e.currentTarget.getBoundingClientRect(); handleStart(e.clientX, e.clientY, rect); }}
                    onMouseMove={(e) => { if (isDragging) { const rect = e.currentTarget.getBoundingClientRect(); handleMove(e.clientX, e.clientY, rect); } }}
                    onTouchStart={(e) => { const rect = e.currentTarget.getBoundingClientRect(); handleStart(e.touches[0].clientX, e.touches[0].clientY, rect); }}
                    onTouchMove={(e) => { if (isDragging) { const rect = e.currentTarget.getBoundingClientRect(); handleMove(e.touches[0].clientX, e.touches[0].clientY, rect); } }}
                >
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200 bg-white shadow-2xl flex items-center justify-center will-change-transform" style={compassStyle}>
                        <div className="absolute top-4 text-xs font-bold text-red-500">N</div>
                        <div className="absolute bottom-4 text-xs font-bold text-slate-400">S</div>
                        <div className="absolute right-4 text-xs font-bold text-slate-400">E</div>
                        <div className="absolute left-4 text-xs font-bold text-slate-400">W</div>
                        <div className="absolute inset-4 border rounded-full border-slate-100 opacity-50"></div>

                        {qiblaResult !== null && (
                            <div className="absolute inset-0" style={qiblaMarkerStyle}>
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="relative">
                                        <div className="w-8 h-8 bg-black border-2 border-amber-400 rounded-md flex items-center justify-center shadow-lg transform -translate-y-1">
                                            <div className="w-full h-[2px] bg-amber-400 absolute top-2"></div>
                                        </div>
                                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-amber-500 absolute top-[-10px] left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="w-2 h-2 rounded-full bg-slate-300 z-10"></div>
                    </div>

                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                        <div className="w-1 h-4 bg-red-500 rounded-full mb-1"></div>
                    </div>
                </div>

                <Card className="w-full bg-white/50 backdrop-blur-md border-none shadow-sm pointer-events-none">
                    <CardContent className="p-6 text-center space-y-2">
                        <div className="flex justify-center items-end gap-2 text-violet-600">
                            <span className="text-4xl font-bold tracking-tighter">
                                {qiblaResult ? Math.round(qiblaResult) : "--"}°
                            </span>
                            <span className="mb-1.5 font-medium">Qibla Direction</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                            {status}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
