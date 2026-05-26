import { ArrowLeft, MapPin, Phone, Mail, Globe, Clock, Send } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import BottomNav from "../components/BottomNav";

export default function KontakPage() {
    const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
    const [terkirim, setTerkirim] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setTerkirim(true);
        setTimeout(() => setTerkirim(false), 3000);
        setForm({ nama: "", email: "", pesan: "" });
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <div className="relative bg-gradient-to-br from-[#134e4a] via-[#0f766e] to-[#0369a1] text-white rounded-b-[32px] shadow-xl overflow-hidden pt-12 pb-8 px-6 mb-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/20 rounded-full blur-3xl -ml-8 -mb-8"></div>

                <div className="relative z-10 flex items-center gap-3 mb-6">
                    <Link href="/">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-white" />
                        </div>
                    </Link>
                    <h1 className="text-lg font-bold text-white">Kontak & Lokasi</h1>
                </div>

                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-3">
                    {[
                        { icon: MapPin, label: "Alamat", value: "Jl. Raya Galis, Galis, Bangkalan, Madura 69173" },
                        { icon: Mail, label: "Email", value: "malibgalisy@yahoo.com" },
                    ].map((c, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                <c.icon className="w-3.5 h-3.5 text-amber-300" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold text-teal-200 uppercase tracking-wide">{c.label}</p>
                                <p className="text-xs text-white font-medium">{c.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-5 max-w-md mx-auto space-y-5">
                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                            <Clock className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Jam Operasional</h3>
                    </div>
                    <div className="space-y-2.5">
                        {[
                            { hari: "Senin – Jumat", jam: "07.00 – 15.30 WIB" },
                            { hari: "Sabtu", jam: "07.00 – 12.00 WIB" },
                            { hari: "Minggu & Libur Nasional", jam: "Tutup" },
                        ].map((j, i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                                <p className="text-xs text-slate-600">{j.hari}</p>
                                <p className={`text-xs font-bold ${j.jam === "Tutup" ? "text-red-400" : "text-teal-600"}`}>{j.jam}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Lokasi Sekolah</h3>
                    </div>
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl h-44 flex flex-col items-center justify-center gap-2">
                        <MapPin className="w-8 h-8 text-teal-400" />
                        <p className="text-xs text-slate-500 font-medium">MA AL-IBROHIMY</p>
                        <p className="text-[10px] text-slate-400">Galis, Bangkalan, Madura</p>
                        <a
                            href="https://maps.google.com/?q=MA+AL-IBROHIMY+Galis+Bangkalan+Madura"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 bg-teal-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full hover:bg-teal-700 transition-colors"
                        >
                            Buka di Google Maps
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-[20px] p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                            <Send className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-slate-800">Kirim Pesan</h3>
                    </div>

                    {terkirim ? (
                        <div className="text-center py-6">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                                <Send className="w-5 h-5 text-green-600" />
                            </div>
                            <p className="text-sm font-bold text-green-700">Pesan berhasil dikirim!</p>
                            <p className="text-xs text-slate-400 mt-1">Kami akan segera menghubungi Anda.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Nama Lengkap</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Masukkan nama Anda"
                                    value={form.nama}
                                    onChange={e => setForm({ ...form, nama: e.target.value })}
                                    className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="email@contoh.com"
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Pesan</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tulis pesan Anda di sini..."
                                    value={form.pesan}
                                    onChange={e => setForm({ ...form, pesan: e.target.value })}
                                    className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-teal-600 text-white rounded-xl py-3 text-sm font-bold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" /> Kirim Pesan
                            </button>
                        </form>
                    )}
                </div>
                {/* Credit */}
                <div className="text-center py-4 pb-2">
                    <p className="text-[10px] text-slate-400">Website dibuat oleh</p>
                    <p className="text-xs font-bold text-teal-600">Muhammad Sulthon Maulana</p>
                    <p className="text-[10px] text-slate-300 mt-0.5">© 2026 MA AL-IBROHIMY</p>
                </div>
            </div>
            <BottomNav />
        </main>
    );
}
