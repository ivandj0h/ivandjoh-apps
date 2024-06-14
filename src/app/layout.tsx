import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderSection from '@/components/sections/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'ivandjoh App',
    description: 'Selamat datang di homepage pribadi Ivan Djoh, seorang Senior Software Engineer berpengalaman. Temukan portofolio, proyek terbaru, dan blog tentang teknologi terkini di sini.',
};

const isTest = process.env.NODE_ENV === 'test';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (isTest) {
        return (
            <div className={inter.className}>
                <HeaderSection />
                {children}
            </div>
        );
    }

    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="md:px-20">
            <HeaderSection />
            {children}
        </div>
        </body>
        </html>
    );
};

export default RootLayout;
