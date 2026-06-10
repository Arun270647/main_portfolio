import { ReactNode } from 'react';
import { CRTScreen } from '@/components/CRTScreen';
import { RetroHeader } from '@/components/RetroHeader';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface LayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export const Layout = ({ children, breadcrumbs }: LayoutProps) => {
    return (
        <CRTScreen className="min-h-screen">
            <RetroHeader />
            <main className="pt-20">
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <div className="container mx-auto px-4">
                        <Breadcrumb items={breadcrumbs} />
                    </div>
                )}
                {children}
            </main>
            <Footer />
        </CRTScreen>
    );
};
