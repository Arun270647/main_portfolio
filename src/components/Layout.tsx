import { ReactNode } from 'react';
import { CRTScreen } from '@/components/CRTScreen';
import { RetroHeader } from '@/components/RetroHeader';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedPages } from '@/components/RelatedPages';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface LayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    showRelatedPages?: boolean;
    currentPage?: string;
}

export const Layout = ({ children, breadcrumbs, showRelatedPages = true, currentPage }: LayoutProps) => {
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
                {showRelatedPages && currentPage && (
                    <RelatedPages currentPage={currentPage} />
                )}
            </main>
            <Footer />
        </CRTScreen>
    );
};
