import { ArrowLeft, Award, BookOpen, Building, Users, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";
import BottomNav from "../components/BottomNav";

const fasilitas = [
    "Laboratorium IPA (Fisika, Kimia, Biologi)",
    "Laboratorium Komputer (3 Ruang)",
    "Perpustakaan Digital",
    "Lapangan Olahraga (Basket, Voli, Futsal)",
    "Aula Serbaguna",
    "Kantin Sehat",
    "Ruang Seni & Musik",
    "Masjid / Musholla",
    "UKS (Unit Kesehatan Siswa)",
    "Parkir Siswa & Guru",
];

const struktur = [
    { jabatan: "Kepala Sekolah", nama: "Nama Kepala Sekolah" },
    { jabatan: "Wakasek Kurikulum", nama: "Nama Guru" },
    { jabatan: "Wakasek Kesiswaan", nama: "Nama Guru" },
    { jabatan: "Wakasek Sarana", nama: "Nama Guru" },
    { jabatan: "Kepala TU", nama: "Nama Guru" },
];

export default function ProfilPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <div className="relative bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#0369a1] text-white rounded-b-[32px] shadow-xl overflow-hidden pt-12 pb-10 px-6 mb-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/20 rounded-full blur-3xl -ml-8 -mb-8"></div>

                <div className="relative z-10 flex items-center gap-3 mb-6">
                    <Link href="/">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-white" />
                        </div>
                    </Link>
                    <h1 className="text-lg font-bold text-white">Profil Sekolah</h1>
                </div>

                <div className="relative z-10 text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center border-2 border-white/30 mb-3">
                        <Building className="w-10 h-10 text-amber-300" />
                    </div>
                    <h2 className="text-xl font-black text-white">MA AL-IBROHIMY</h2>
                    <p className="text-teal-200 text-xs mt-1">Galis, Bangkalan, Madura</p>

                    <div className="mt-4 inline-flex items-center gap-2 bg-amber-400/20 px-4 py-2 rounded-full border border-amber-300/30">
                        <Award className="w-4 h-4 text-amber-300" />
                        <span className="text-xs font-bold text-amber-200">Akreditasi A — BAN-SM 2023</span>
                    </div>
                </div>
            </div>

            <div className="px-5 space-y-5 max-w-md mx-auto">
                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Visi</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                        "Menjadi sekolah unggul yang menghasilkan lulusan berkarakter, berprestasi, dan berwawasan global berlandaskan nilai-nilai Pancasila."
                    </p>
                </div>

                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Misi</h3>
                    </div>
                    <ul className="space-y-2">
                        {[
                            "Menyelenggarakan pendidikan berkualitas yang berpusat pada peserta didik.",
                            "Mengembangkan kompetensi akademik dan non-akademik secara seimbang.",
                            "Membangun lingkungan belajar yang inklusif, inovatif, dan menyenangkan.",
                            "Menjalin kemitraan dengan orang tua, masyarakat, dan dunia industri.",
                        ].map((m, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                                {m}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-[20px] p-5">
                    <h3 className="font-bold text-slate-800 mb-2">Sejarah Singkat</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        MA AL-IBROHIMY adalah Madrasah Aliyah yang berlokasi di Galis, Bangkalan, Madura. Sekolah ini berkomitmen mencetak generasi berakhlak mulia, berprestasi akademik, dan siap menghadapi tantangan masa depan.
                    </p>
                </div>

                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
                            <Users className="w-4 h-4 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Jurusan</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {["IPA (Ilmu Pengetahuan Alam)", "IPS (Ilmu Pengetahuan Sosial)"].map((j, i) => (
                            <div key={i} className="bg-teal-50 rounded-xl p-3 border border-teal-100 text-center">
                                <p className="text-xs font-bold text-teal-700">{j}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
                            <Users className="w-4 h-4 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Struktur Pimpinan</h3>
                    </div>
                    <div className="space-y-3">
                        {struktur.map((s, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                                <div>
                                    <p className="text-[10px] font-bold text-teal-500 uppercase tracking-wide">{s.jabatan}</p>
                                    <p className="text-xs font-semibold text-slate-800 mt-0.5">{s.nama}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                            <Building className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Fasilitas</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        {fasilitas.map((f, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                <span className="text-xs text-slate-700">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Lokasi</h3>
                    </div>
                    <p className="text-sm text-slate-600">Jl. Raya Galis, Galis, Bangkalan, Madura 69173</p>
                    <div className="mt-3 bg-slate-100 rounded-xl h-32 flex items-center justify-center">
                        <p className="text-xs text-slate-400">Peta Lokasi</p>
                    </div>
                </div>
            </div>
            <BottomNav />
        </main>
    );
}
