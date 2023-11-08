import { Toaster } from 'react-hot-toast';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import '../assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Main page',
    description: 'Main page',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}

                <Toaster />
            </body>
        </html>
    );
};

export default RootLayout;
