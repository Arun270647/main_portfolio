import { ReactNode } from 'react';
import { CRTScreen } from '@/components/CRTScreen';
import { RetroHeader } from '@/components/RetroHeader';
import { Footer } from '@/components/Footer';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <CRTScreen className="min-h-screen">
            <RetroHeader />
            <main className="pt-24">
                {children}
            </main>
            <Footer />
        </CRTScreen>
    );
};
