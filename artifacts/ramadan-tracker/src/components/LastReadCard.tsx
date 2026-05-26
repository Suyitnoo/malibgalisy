"use client";

import { useLastRead } from "../hooks/useLastRead";
import { Link } from "wouter";
import { Card, CardContent } from "../components/ui/card";
import { BookOpen } from "lucide-react";

export default function LastReadCard() {
    const { bookmark, mounted } = useLastRead();

    if (!mounted) return null;

    if (!bookmark) {
        return (
            <Link href="/quran/1">
                <Card className="bg-white border-violet-100 hover:border-violet-300 transition-all cursor-pointer mb-6 group shadow-sm">
                    <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-violet-100 rounded-full text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-violet-600 font-bold uppercase tracking-wider">
                                    Start Reading
                                </p>
                                <h3 className="font-bold text-slate-800 text-lg">
                                    Al-Fatiha
                                </h3>
                                <p className="text-xs text-slate-500">
                                    The Opening
                                </p>
                            </div>
                        </div>
                        <div className="text-violet-300 group-hover:translate-x-1 transition-transform">
                            →
                        </div>
                    </CardContent>
                </Card>
            </Link>
        );
    }

    return (
        <Link href={`/quran/${bookmark.surahId}`}>
            <Card className="bg-white border-violet-100 hover:border-violet-300 transition-all cursor-pointer mb-6 group shadow-sm">
                <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-violet-100 rounded-full text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-violet-600 font-bold uppercase tracking-wider">
                                Continue Reading
                            </p>
                            <h3 className="font-bold text-slate-800 text-lg">
                                {bookmark.surahName}
                            </h3>
                            <p className="text-xs text-slate-500">
                                Ayah {bookmark.ayahNumber}
                            </p>
                        </div>
                    </div>
                    <div className="text-violet-300 group-hover:translate-x-1 transition-transform">
                        →
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
