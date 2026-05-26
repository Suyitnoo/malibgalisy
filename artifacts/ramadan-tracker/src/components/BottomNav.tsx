"use client";

import { Home, Bell, GraduationCap, ClipboardList, Info } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function BottomNav() {
    const [pathname] = useLocation();

    const navItems = [
        { label: "Beranda", icon: Home, href: "/" },
        { label: "Pengumuman", icon: Bell, href: "/pengumuman" },
        { label: "Siswa", icon: GraduationCap, href: "/siswa" },
        { label: "Guru", icon: ClipboardList, href: "/guru" },
        { label: "Profil", icon: Info, href: "/profil" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center md:hidden pointer-events-none">
            <nav className="w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] px-4 py-3 pb-5 pointer-events-auto flex items-center justify-around">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex flex-col items-center justify-center gap-1 min-w-[48px] transition-colors duration-300 group ${isActive ? "text-teal-600" : "text-slate-400 hover:text-teal-500"}`}
                        >
                            <item.icon
                                className={`w-5 h-5 transition-all duration-300 ${isActive ? "scale-110 fill-teal-600/20" : "group-hover:scale-105"}`}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            <span className={`text-[9px] font-semibold transition-all duration-300 ${isActive ? "scale-100" : "scale-95 opacity-80"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
