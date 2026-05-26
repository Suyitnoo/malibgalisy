import { ArrowLeft, ChevronRight, BookOpen, Plus } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import BottomNav from "../components/BottomNav";

const kelas = [
    { nama: "XII IPA", mapel: "Matematika", siswa: 34, jadwal: "Senin 07.00" },
    { nama: "XII IPS", mapel: "Matematika", siswa: 33, jadwal: "Selasa 08.30" },
    { nama: "XI IPA", mapel: "Matematika", siswa: 34, jadwal: "Rabu 07.00" },
    { nama: "XI IPS", mapel: "Matematika", siswa: 35, jadwal: "Kamis 10.15" },
];

const tugas = [
    { mapel: "Matematika", judul: "Latihan Soal Integral", kelas: "XII IPA", deadline: "30 Mei 2026", dikumpul: 28, total: 34 },
    { mapel: "Matematika", judul: "PR Limit Fungsi", kelas: "XII IPS", deadline: "1 Jun 2026", dikumpul: 20, total: 33 },
    { mapel: "Matematika", judul: "Kuis Bab Trigonometri", kelas: "XI IPA", deadline: "2 Jun 2026", dikumpul: 34, total: 34 },
    { mapel: "Matematika", judul: "Latihan UAS", kelas: "XI IPS", deadline: "5 Jun 2026", dikumpul: 10, total: 35 },
];

const absensiSiswa = Array.from({ length: 8 }, (_, i) => ({
    nama: `Nama Siswa ${i + 1}`,
    status: i === 2 ? "sakit" : i === 4 ? "alpha" : i === 6 ? "izin" : "hadir",
}));

const tabs = ["Kelas", "Tugas", "Absensi"];

function statusBadge(s: string) {
    if (s === "hadir") return "bg-green-100 text-green-700";
    if (s === "sakit") return "bg-blue-100 text-blue-700";
    if (s === "izin") return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-600";
}

export default function GuruPage() {
    const [tab, setTab] = useState("Kelas");
    const [kelasAktif, setKelasAktif] = useState(kelas[0]);

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <div className="relative bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#0369a1] text-white rounded-b-[32px] shadow-xl overflow-hidden pt-12 pb-8 px-6 mb-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/20 rounded-full blur-3xl -ml-8 -mb-8"></div>
                <div className="relative z-10 flex items-center gap-3 mb-4">
                    <Link href="/">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-white" />
                        </div>
                    </Link>
                    <h1 className="text-lg font-bold text-white">Dashboard Guru</h1>
                </div>

                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <p className="text-[10px] font-bold text-teal-200 uppercase tracking-widest">Guru</p>
                    <p className="text-base font-black text-white">Nama Guru</p>
                    <p className="text-xs text-teal-200">Mapel: Matematika · NIP 000000000000000000</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="text-center">
                            <p className="text-lg font-black text-amber-300">4</p>
                            <p className="text-[9px] text-teal-200">Kelas</p>
                        </div>
                        <div className="text-center border-x border-white/20">
                            <p className="text-lg font-black text-white">136</p>
                            <p className="text-[9px] text-teal-200">Siswa</p>
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-black text-white">4</p>
                            <p className="text-[9px] text-teal-200">Tugas Aktif</p>
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

                {tab === "Kelas" && (
                    <div className="space-y-3">
                        {kelas.map((k, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center shrink-0">
                                    <BookOpen className="w-5 h-5 text-teal-600" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-slate-800">{k.nama}</p>
                                    <p className="text-[10px] text-slate-500">{k.mapel} · {k.jadwal}</p>
                                    <p className="text-[10px] text-teal-600 mt-0.5 font-semibold">{k.siswa} siswa</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300" />
                            </div>
                        ))}
                    </div>
                )}

                {tab === "Tugas" && (
                    <div className="space-y-3">
                        <button className="w-full bg-teal-600 text-white rounded-2xl py-3 flex items-center justify-center gap-2 font-bold text-sm hover:bg-teal-700 transition-colors">
                            <Plus className="w-4 h-4" /> Buat Tugas Baru
                        </button>
                        {tugas.map((t, i) => {
                            const pct = Math.round((t.dikumpul / t.total) * 100);
                            return (
                                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-xs font-bold text-teal-500 mb-0.5">{t.kelas}</p>
                                            <p className="text-sm font-bold text-slate-800">{t.judul}</p>
                                            <p className="text-[10px] text-slate-400">Deadline: {t.deadline}</p>
                                        </div>
                                        <span className={`text-xs font-black px-2 py-0.5 rounded-full ${pct === 100 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                                            {pct}%
                                        </span>
                                    </div>
                                    <div className="mt-3">
                                        <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                                            <span>Dikumpul: {t.dikumpul}/{t.total}</span>
                                            <span>{t.total - t.dikumpul} belum</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-teal-600 rounded-full transition-all"
                                                style={{ width: `${pct}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {tab === "Absensi" && (
                    <div className="space-y-3">
                        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar mb-2">
                            {kelas.map((k, i) => (
                                <button
                                    key={i}
                                    onClick={() => setKelasAktif(k)}
                                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${kelasAktif.nama === k.nama ? "bg-teal-600 text-white" : "bg-white text-slate-500 border border-slate-200"}`}
                                >
                                    {k.nama}
                                </button>
                            ))}
                        </div>

                        <p className="text-xs text-slate-500 px-1">Hari ini · {kelasAktif.nama} · {kelasAktif.mapel}</p>

                        <div className="space-y-2">
                            {absensiSiswa.map((s, i) => (
                                <div key={i} className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-600">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm font-semibold text-slate-800">{s.nama}</p>
                                    </div>
                                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full capitalize ${statusBadge(s.status)}`}>
                                        {s.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <BottomNav />
        </main>
    );
}
