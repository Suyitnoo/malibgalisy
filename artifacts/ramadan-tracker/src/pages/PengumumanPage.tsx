import { ArrowLeft, Megaphone, Search, Bell, BookOpen, Calendar, Trophy } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import BottomNav from "../components/BottomNav";

const daftarPengumuman = [
    {
        id: 1,
        judul: "Ujian Akhir Semester Genap 2024/2025",
        kategori: "Akademik",
        tanggal: "25 Mei 2026",
        isi: "UAS akan dilaksanakan pada tanggal 2–13 Juni 2026. Seluruh siswa wajib hadir tepat waktu dan membawa kartu ujian. Jadwal lengkap dapat diunduh di papan pengumuman.",
        penting: true,
    },
    {
        id: 2,
        judul: "Pendaftaran Ekstrakurikuler Tahun Ajaran Baru",
        kategori: "Kegiatan",
        tanggal: "20 Mei 2026",
        isi: "Pendaftaran ekskul dibuka mulai 1 Juni 2026 s.d. 10 Juni 2026. Tersedia 12 pilihan ekskul. Formulir pendaftaran tersedia di ruang BK.",
        penting: false,
    },
    {
        id: 3,
        judul: "Juara 1 OSK Matematika Tingkat Provinsi",
        kategori: "Prestasi",
        tanggal: "18 Mei 2026",
        isi: "Selamat kepada Nama Siswa (XII IPA) yang berhasil meraih Juara 1 Olimpiade Sains Kabupaten Matematika tingkat provinsi Jawa Timur.",
        penting: false,
    },
    {
        id: 4,
        judul: "Penerimaan Peserta Didik Baru (PPDB) 2026/2027",
        kategori: "Akademik",
        tanggal: "15 Mei 2026",
        isi: "PPDB gelombang 1 dibuka tanggal 1 Juli 2026. Informasi lengkap mengenai syarat, jadwal, dan kuota dapat dilihat di website sekolah.",
        penting: true,
    },
    {
        id: 5,
        judul: "Pelatihan Kepemimpinan OSIS 2026",
        kategori: "Kegiatan",
        tanggal: "10 Mei 2026",
        isi: "OSIS mengadakan Latihan Dasar Kepemimpinan (LDK) pada tanggal 7–8 Juni 2026. Seluruh pengurus OSIS wajib hadir.",
        penting: false,
    },
    {
        id: 6,
        judul: "Peringatan Hari Pendidikan Nasional",
        kategori: "Kegiatan",
        tanggal: "2 Mei 2026",
        isi: "Upacara Hardiknas dilaksanakan pada 2 Mei 2026 pukul 07.00 WIB di lapangan utama. Seluruh siswa dan guru wajib hadir dalam pakaian seragam lengkap.",
        penting: false,
    },
];

const kategoris = ["Semua", "Akademik", "Kegiatan", "Prestasi"];

function kategoriIcon(k: string) {
    if (k === "Akademik") return <BookOpen className="w-3.5 h-3.5" />;
    if (k === "Kegiatan") return <Calendar className="w-3.5 h-3.5" />;
    if (k === "Prestasi") return <Trophy className="w-3.5 h-3.5" />;
    return <Megaphone className="w-3.5 h-3.5" />;
}

function kategoriColor(k: string) {
    if (k === "Akademik") return "bg-teal-100 text-teal-700";
    if (k === "Kegiatan") return "bg-cyan-100 text-cyan-700";
    if (k === "Prestasi") return "bg-amber-100 text-amber-700";
    return "bg-slate-100 text-slate-600";
}

export default function PengumumanPage() {
    const [search, setSearch] = useState("");
    const [kategoriAktif, setKategoriAktif] = useState("Semua");
    const [expandId, setExpandId] = useState<number | null>(null);

    const filtered = daftarPengumuman.filter(p => {
        const matchKat = kategoriAktif === "Semua" || p.kategori === kategoriAktif;
        const matchSearch = p.judul.toLowerCase().includes(search.toLowerCase()) || p.isi.toLowerCase().includes(search.toLowerCase());
        return matchKat && matchSearch;
    });

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <div className="relative bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#0369a1] text-white rounded-b-[32px] shadow-xl overflow-hidden pt-12 pb-8 px-6 mb-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
                <div className="relative z-10 flex items-center gap-3 mb-6">
                    <Link href="/">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-white" />
                        </div>
                    </Link>
                    <div>
                        <h1 className="text-lg font-bold text-white">Pengumuman</h1>
                        <p className="text-[11px] text-teal-200">{daftarPengumuman.length} pengumuman terbaru</p>
                    </div>
                    <div className="ml-auto h-8 w-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                        <Bell className="w-4 h-4 text-amber-300" />
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10">
                        <Search className="w-4 h-4 text-teal-200 shrink-0" />
                        <input
                            type="text"
                            placeholder="Cari pengumuman..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="bg-transparent text-white placeholder:text-teal-300 text-sm flex-1 outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="px-5 max-w-md mx-auto">
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mb-5">
                    {kategoris.map(k => (
                        <button
                            key={k}
                            onClick={() => setKategoriAktif(k)}
                            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${kategoriAktif === k ? "bg-teal-600 text-white" : "bg-white text-slate-500 border border-slate-200"}`}
                        >
                            {k}
                        </button>
                    ))}
                </div>

                <div className="space-y-3">
                    {filtered.map(p => (
                        <div
                            key={p.id}
                            className={`bg-white rounded-2xl p-4 shadow-sm border cursor-pointer transition-all ${p.penting ? "border-teal-200" : "border-slate-100"}`}
                            onClick={() => setExpandId(expandId === p.id ? null : p.id)}
                        >
                            {p.penting && (
                                <div className="flex items-center gap-1 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-[9px] font-bold text-red-500 uppercase tracking-wide">Penting</span>
                                </div>
                            )}
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="text-sm font-bold text-slate-800 flex-1 leading-snug">{p.judul}</h3>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full ${kategoriColor(p.kategori)}`}>
                                    {kategoriIcon(p.kategori)} {p.kategori}
                                </span>
                                <span className="text-[10px] text-slate-400">{p.tanggal}</span>
                            </div>
                            {expandId === p.id ? (
                                <p className="text-xs text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">{p.isi}</p>
                            ) : (
                                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{p.isi}</p>
                            )}
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <div className="text-center py-12 text-slate-400">
                            <Megaphone className="w-10 h-10 mx-auto mb-3 opacity-30" />
                            <p className="text-sm">Tidak ada pengumuman ditemukan</p>
                        </div>
                    )}
                </div>
            </div>
            <BottomNav />
        </main>
    );
}
