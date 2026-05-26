import { ArrowLeft, Image, Camera } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import BottomNav from "../components/BottomNav";

const kategori = ["Semua", "Lomba", "Wisuda", "Olahraga", "Seni", "OSIS"];

const galeri = [
    { id: 1, judul: "Wisuda Kelas XII 2025", kategori: "Wisuda", warna: "from-teal-400 to-cyan-600", emoji: "🎓", deskripsi: "Momen bersejarah kelulusan angkatan 2025" },
    { id: 2, judul: "Juara OSK Matematika", kategori: "Lomba", warna: "from-amber-400 to-orange-500", emoji: "🏆", deskripsi: "Prestasi gemilang di tingkat provinsi" },
    { id: 3, judul: "Pentas Seni Tahunan", kategori: "Seni", warna: "from-emerald-400 to-teal-500", emoji: "🎭", deskripsi: "Kreativitas siswa dalam seni pertunjukan" },
    { id: 4, judul: "Turnamen Basket Antar Kelas", kategori: "Olahraga", warna: "from-cyan-400 to-blue-500", emoji: "🏀", deskripsi: "Kompetisi seru antar kelas 2026" },
    { id: 5, judul: "Pelantikan OSIS 2026", kategori: "OSIS", warna: "from-blue-400 to-cyan-500", emoji: "📣", deskripsi: "Pelantikan pengurus OSIS periode baru" },
    { id: 6, judul: "Lomba Cerdas Cermat", kategori: "Lomba", warna: "from-teal-500 to-cyan-700", emoji: "🧠", deskripsi: "LCC tingkat kabupaten" },
    { id: 7, judul: "Pameran Karya Seni", kategori: "Seni", warna: "from-emerald-500 to-teal-600", emoji: "🎨", deskripsi: "Pameran hasil karya siswa kelas X–XII" },
    { id: 8, judul: "Pertandingan Voli Guru vs Siswa", kategori: "Olahraga", warna: "from-cyan-500 to-blue-600", emoji: "🏐", deskripsi: "Fun match dalam rangka Hardiknas" },
    { id: 9, judul: "Wisuda Angkatan 2024", kategori: "Wisuda", warna: "from-teal-400 to-cyan-500", emoji: "🎓", deskripsi: "Kenangan manis perpisahan angkatan 2024" },
];

export default function GaleriPage() {
    const [aktif, setAktif] = useState("Semua");
    const [selected, setSelected] = useState<null | typeof galeri[0]>(null);

    const filtered = aktif === "Semua" ? galeri : galeri.filter(g => g.kategori === aktif);

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <div className="relative bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#0369a1] text-white rounded-b-[32px] shadow-xl overflow-hidden pt-12 pb-8 px-6 mb-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
                <div className="relative z-10 flex items-center gap-3">
                    <Link href="/">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-white" />
                        </div>
                    </Link>
                    <div>
                        <h1 className="text-lg font-bold text-white">Galeri Kegiatan</h1>
                        <p className="text-[11px] text-teal-200">{galeri.length} foto & dokumentasi</p>
                    </div>
                    <div className="ml-auto h-8 w-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                        <Camera className="w-4 h-4 text-amber-300" />
                    </div>
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
                    onClick={() => setSelected(null)}
                >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-sm w-full" onClick={e => e.stopPropagation()}>
                        <div className={`bg-gradient-to-br ${selected.warna} h-48 flex items-center justify-center`}>
                            <span className="text-8xl">{selected.emoji}</span>
                        </div>
                        <div className="p-5">
                            <span className="text-[10px] font-bold text-teal-500 uppercase tracking-wide">{selected.kategori}</span>
                            <h3 className="text-base font-black text-slate-800 mt-1">{selected.judul}</h3>
                            <p className="text-sm text-slate-500 mt-2">{selected.deskripsi}</p>
                            <button
                                className="mt-4 w-full bg-teal-600 text-white rounded-xl py-2.5 text-sm font-bold hover:bg-teal-700 transition-colors"
                                onClick={() => setSelected(null)}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="px-5 max-w-md mx-auto">
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mb-5">
                    {kategori.map(k => (
                        <button
                            key={k}
                            onClick={() => setAktif(k)}
                            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${aktif === k ? "bg-teal-600 text-white" : "bg-white text-slate-500 border border-slate-200"}`}
                        >
                            {k}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {filtered.map(g => (
                        <div
                            key={g.id}
                            className="rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all active:scale-95"
                            onClick={() => setSelected(g)}
                        >
                            <div className={`bg-gradient-to-br ${g.warna} h-32 flex items-center justify-center`}>
                                <span className="text-5xl">{g.emoji}</span>
                            </div>
                            <div className="bg-white p-3">
                                <span className="text-[9px] font-bold text-teal-500 uppercase tracking-wide">{g.kategori}</span>
                                <p className="text-xs font-bold text-slate-800 mt-0.5 leading-snug line-clamp-2">{g.judul}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                        <Image className="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">Tidak ada foto ditemukan</p>
                    </div>
                )}
            </div>
            <BottomNav />
        </main>
    );
}
