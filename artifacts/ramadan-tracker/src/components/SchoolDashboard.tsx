"use client";

import { Link } from "wouter";
import {
    BookOpen, Users, Bell, Image, Phone, Info,
    ChevronRight, Megaphone, Calendar, Award, GraduationCap,
    ClipboardList, School
} from "lucide-react";

const pengumuman = [
    {
        id: 1,
        judul: "Ujian Akhir Semester Genap 2024/2025",
        kategori: "Akademik",
        tanggal: "25 Mei 2026",
        isi: "UAS akan dilaksanakan pada tanggal 2–13 Juni 2026. Seluruh siswa wajib hadir tepat waktu.",
        warna: "from-teal-500 to-cyan-600",
    },
    {
        id: 2,
        judul: "Pendaftaran Ekstrakurikuler Baru",
        kategori: "Kegiatan",
        tanggal: "20 Mei 2026",
        isi: "Pendaftaran ekskul tahun ajaran baru dibuka mulai 1 Juni 2026. Tersedia 12 pilihan ekskul.",
        warna: "from-amber-400 to-orange-500",
    },
    {
        id: 3,
        judul: "Peringatan Hari Pendidikan Nasional",
        kategori: "Kegiatan",
        tanggal: "2 Mei 2026",
        isi: "Upacara Hardiknas dilaksanakan pada 2 Mei 2026 pukul 07.00 WIB di lapangan utama.",
        warna: "from-emerald-500 to-teal-600",
    },
];

const menu = [
    { label: "Portal Siswa", icon: GraduationCap, href: "/siswa" },
    { label: "Dashboard Guru", icon: ClipboardList, href: "/guru" },
    { label: "Pengumuman", icon: Bell, href: "/pengumuman" },
    { label: "Galeri", icon: Image, href: "/galeri" },
    { label: "Profil", icon: Info, href: "/profil" },
    { label: "Kontak", icon: Phone, href: "/kontak" },
];

const stats = [
    { label: "Siswa", value: "1.240", icon: Users },
    { label: "Guru", value: "87", icon: BookOpen },
    { label: "Kelas", value: "36", icon: School },
    { label: "Ekskul", value: "12", icon: Award },
];

const events = [
    { tanggal: "2 Jun", nama: "Ujian Akhir Semester", kelas: "Semua Kelas" },
    { tanggal: "14 Jun", nama: "Penerimaan Rapor", kelas: "Semua Kelas" },
    { tanggal: "20 Jun", nama: "Libur Akhir Tahun", kelas: "Semua Kelas" },
];

export default function SchoolDashboard() {
    const today = new Date();
    const dateStr = today.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const semester = "Semester Genap 2024/2025";

    return (
        <div className="w-full min-h-screen bg-slate-50 text-slate-800 pb-24">

            {/* Hero */}
            <div className="relative bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#0369a1] text-white rounded-b-[40px] shadow-xl overflow-hidden pt-12 pb-8 px-6 mb-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl -ml-12 -mb-12 mix-blend-screen"></div>
                <div className="absolute top-16 right-4 opacity-10">
                    <School className="w-44 h-44 text-white" />
                </div>

                <div className="relative z-10 mb-6">
                    <p className="text-[10px] font-bold text-teal-200 uppercase tracking-widest mb-1">Selamat Datang</p>
                    <h1 className="text-2xl font-black text-white leading-tight">MA AL-IBROHIMY</h1>
                    <p className="text-xs text-teal-200 mt-1">Galis, Bangkalan, Madura · {semester}</p>
                </div>

                <div className="relative z-10 text-center mb-8">
                    <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                        <p className="text-xs font-semibold text-white flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-amber-300" />
                            {dateStr}
                        </p>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-4 gap-2 bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/5">
                    {stats.map((s) => (
                        <div key={s.label} className="flex flex-col items-center gap-1">
                            <s.icon className="w-4 h-4 text-amber-300" />
                            <span className="text-sm font-black text-white">{s.value}</span>
                            <span className="text-[9px] font-medium text-teal-200">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Menu */}
            <div className="px-6 -mt-8 relative z-20 mb-6">
                <div className="bg-white rounded-[24px] p-4 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <div className="grid grid-cols-3 gap-3">
                        {menu.map((item, i) => (
                            <Link key={i} href={item.href} className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="h-12 w-12 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                    <item.icon className="w-5 h-5 text-teal-600" />
                                </div>
                                <span className="text-[10px] font-medium text-slate-600 group-hover:text-teal-600 transition-colors text-center">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-5 space-y-6">

                {/* Pengumuman Terbaru */}
                <div>
                    <div className="flex justify-between items-center mb-3 px-1">
                        <h3 className="font-bold text-slate-800 text-sm">Pengumuman Terbaru</h3>
                        <Link href="/pengumuman" className="text-[11px] font-semibold text-teal-600 hover:underline flex items-center gap-0.5">
                            Lihat Semua <ChevronRight className="w-3 h-3" />
                        </Link>
                    </div>
                    <div className="space-y-3">
                        {pengumuman.map((p) => (
                            <div key={p.id} className={`bg-gradient-to-br ${p.warna} rounded-3xl p-5 text-white shadow-lg relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-6 -mt-6"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Megaphone className="w-3.5 h-3.5 text-white/80" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">{p.kategori}</span>
                                        <span className="ml-auto text-[9px] text-white/60">{p.tanggal}</span>
                                    </div>
                                    <h4 className="font-bold text-sm mb-1">{p.judul}</h4>
                                    <p className="text-xs text-white/80 leading-relaxed">{p.isi}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Agenda Sekolah */}
                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-bold text-slate-800">Agenda Mendatang</h3>
                        <span className="text-[10px] text-slate-400">2026</span>
                    </div>
                    <div className="space-y-3">
                        {events.map((e, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                                    <span className="text-[10px] font-black text-teal-700 text-center leading-tight">{e.tanggal}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-slate-800">{e.nama}</p>
                                    <p className="text-[10px] text-slate-400">{e.kelas}</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Akses Cepat Siswa/Guru */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/siswa">
                        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-3xl p-4 flex items-center gap-3 group cursor-pointer hover:shadow-md transition-all">
                            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-teal-100">
                                <GraduationCap className="w-5 h-5 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-800">Portal Siswa</p>
                                <p className="text-[10px] text-slate-500">Nilai & Jadwal</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/guru">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-3xl p-4 flex items-center gap-3 group cursor-pointer hover:shadow-md transition-all">
                            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-amber-100">
                                <ClipboardList className="w-5 h-5 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-800">Dashboard Guru</p>
                                <p className="text-[10px] text-slate-500">Kelas & Tugas</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
