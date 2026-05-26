import { ArrowLeft, CheckCircle2, XCircle, Clock, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import BottomNav from "../components/BottomNav";

const jadwal = [
    { hari: "Senin", mapel: [
        { jam: "07.00–08.30", mapel: "Matematika", guru: "Nama Guru", ruang: "R.12" },
        { jam: "08.30–10.00", mapel: "Bahasa Indonesia", guru: "Nama Guru", ruang: "R.12" },
        { jam: "10.15–11.45", mapel: "Fisika", guru: "Nama Guru", ruang: "Lab. Fisika" },
        { jam: "12.45–14.15", mapel: "Bahasa Inggris", guru: "Nama Guru", ruang: "R.12" },
    ]},
    { hari: "Selasa", mapel: [
        { jam: "07.00–08.30", mapel: "Kimia", guru: "Nama Guru", ruang: "Lab. Kimia" },
        { jam: "08.30–10.00", mapel: "Sejarah", guru: "Nama Guru", ruang: "R.12" },
        { jam: "10.15–11.45", mapel: "Biologi", guru: "Nama Guru", ruang: "Lab. Bio" },
        { jam: "12.45–14.15", mapel: "PPKN", guru: "Nama Guru", ruang: "R.12" },
    ]},
    { hari: "Rabu", mapel: [
        { jam: "07.00–08.30", mapel: "Matematika", guru: "Nama Guru", ruang: "R.12" },
        { jam: "08.30–10.00", mapel: "Ekonomi", guru: "Nama Guru", ruang: "R.12" },
        { jam: "10.15–11.45", mapel: "Olahraga", guru: "Nama Guru", ruang: "Lapangan" },
    ]},
];

const nilai = [
    { mapel: "Matematika", uts: 82, uas: 88, tugas: 85, akhir: 85 },
    { mapel: "Bahasa Indonesia", uts: 90, uas: 92, tugas: 88, akhir: 90 },
    { mapel: "Fisika", uts: 78, uas: 80, tugas: 82, akhir: 80 },
    { mapel: "Kimia", uts: 75, uas: 78, tugas: 80, akhir: 78 },
    { mapel: "Biologi", uts: 88, uas: 90, tugas: 87, akhir: 88 },
    { mapel: "Bahasa Inggris", uts: 85, uas: 88, tugas: 90, akhir: 88 },
    { mapel: "Sejarah", uts: 80, uas: 83, tugas: 85, akhir: 83 },
    { mapel: "Ekonomi", uts: 77, uas: 80, tugas: 78, akhir: 78 },
];

const absensi = [
    { bulan: "Januari", hadir: 22, sakit: 1, izin: 0, alpha: 0 },
    { bulan: "Februari", hadir: 19, sakit: 0, izin: 1, alpha: 0 },
    { bulan: "Maret", hadir: 21, sakit: 2, izin: 0, alpha: 0 },
    { bulan: "April", hadir: 20, sakit: 0, izin: 0, alpha: 1 },
    { bulan: "Mei", hadir: 18, sakit: 1, izin: 0, alpha: 0 },
];

const tabs = ["Jadwal", "Nilai", "Absensi"];

function getNilaiColor(n: number) {
    if (n >= 90) return "text-green-600 bg-green-50";
    if (n >= 80) return "text-teal-600 bg-teal-50";
    if (n >= 70) return "text-amber-600 bg-amber-50";
    return "text-red-500 bg-red-50";
}

export default function SiswaPage() {
    const [tab, setTab] = useState("Jadwal");
    const [hariAktif, setHariAktif] = useState("Senin");
    const jadwalHari = jadwal.find(j => j.hari === hariAktif);

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <div className="relative bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#0369a1] text-white rounded-b-[32px] shadow-xl overflow-hidden pt-12 pb-8 px-6 mb-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
                <div className="relative z-10 flex items-center gap-3 mb-4">
                    <Link href="/">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-white" />
                        </div>
                    </Link>
                    <h1 className="text-lg font-bold text-white">Portal Siswa</h1>
                </div>

                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <p className="text-[10px] font-bold text-teal-200 uppercase tracking-widest">Siswa</p>
                    <p className="text-base font-black text-white">Nama Siswa</p>
                    <p className="text-xs text-teal-200">Kelas XII IPA · NIS 2024001234</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="text-center">
                            <p className="text-lg font-black text-amber-300">85,1</p>
                            <p className="text-[9px] text-teal-200">Rata-rata</p>
                        </div>
                        <div className="text-center border-x border-white/20">
                            <p className="text-lg font-black text-white">12</p>
                            <p className="text-[9px] text-teal-200">Peringkat</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-black text-white">96%</p>
                            <p className="text-[9px] text-teal-200">Kehadiran</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 max-w-md mx-auto">
                <div className="flex bg-white rounded-2xl p-1 shadow-sm border border-slate-100 mb-5">
                    {tabs.map(t => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${tab === t ? "bg-teal-600 text-white shadow-sm" : "text-slate-500 hover:text-teal-600"}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {tab === "Jadwal" && (
                    <div className="space-y-4">
                        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                            {jadwal.map(j => (
                                <button
                                    key={j.hari}
                                    onClick={() => setHariAktif(j.hari)}
                                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${hariAktif === j.hari ? "bg-teal-600 text-white" : "bg-white text-slate-500 border border-slate-200"}`}
                                >
                                    {j.hari}
                                </button>
                            ))}
                        </div>
                        <div className="space-y-3">
                            {jadwalHari?.mapel.map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-3">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-1 h-full bg-teal-200 rounded-full min-h-[40px] relative">
                                            <div className="w-2.5 h-2.5 rounded-full bg-teal-500 absolute -left-[3px] top-1"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] text-slate-400 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {item.jam}
                                        </p>
                                        <p className="text-sm font-bold text-slate-800 mt-0.5">{item.mapel}</p>
                                        <p className="text-[10px] text-slate-500">{item.guru} · {item.ruang}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {tab === "Nilai" && (
                    <div className="space-y-3">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-4 flex items-center gap-3 mb-4">
                            <TrendingUp className="w-8 h-8 text-teal-500" />
                            <div>
                                <p className="text-xs text-slate-500">Semester Genap 2024/2025</p>
                                <p className="text-sm font-bold text-slate-800">Rata-rata Nilai: <span className="text-teal-700">85,1</span></p>
                            </div>
                        </div>
                        {nilai.map((n, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-sm font-bold text-slate-800">{n.mapel}</p>
                                    <span className={`text-xs font-black px-2 py-0.5 rounded-full ${getNilaiColor(n.akhir)}`}>
                                        {n.akhir}
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {[["UTS", n.uts], ["UAS", n.uas], ["Tugas", n.tugas]].map(([label, val]) => (
                                        <div key={label} className="text-center">
                                            <p className="text-[9px] text-slate-400">{label}</p>
                                            <p className="text-xs font-semibold text-slate-700">{val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {tab === "Absensi" && (
                    <div className="space-y-3">
                        {absensi.map((a, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                                <p className="text-sm font-bold text-slate-800 mb-3">{a.bulan} 2026</p>
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="text-center bg-green-50 rounded-xl p-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto mb-1" />
                                        <p className="text-sm font-black text-green-600">{a.hadir}</p>
                                        <p className="text-[9px] text-slate-400">Hadir</p>
                                    </div>
                                    <div className="text-center bg-blue-50 rounded-xl p-2">
                                        <p className="text-sm font-black text-blue-600 mt-1">{a.sakit}</p>
                                        <p className="text-[9px] text-slate-400">Sakit</p>
                                    </div>
                                    <div className="text-center bg-amber-50 rounded-xl p-2">
                                        <p className="text-sm font-black text-amber-600 mt-1">{a.izin}</p>
                                        <p className="text-[9px] text-slate-400">Izin</p>
                                    </div>
                                    <div className="text-center bg-red-50 rounded-xl p-2">
                                        <XCircle className="w-4 h-4 text-red-400 mx-auto mb-1" />
                                        <p className="text-sm font-black text-red-500">{a.alpha}</p>
                                        <p className="text-[9px] text-slate-400">Alpha</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <BottomNav />
        </main>
    );
}
