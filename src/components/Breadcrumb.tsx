import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 font-terminal text-xs text-muted-foreground flex-wrap">
        <li className="flex items-center gap-2">
          <Link
            to="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Home"
          >
            <Home className="w-3 h-3" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <ChevronRight className="w-3 h-3" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <>
                  <Link
                    to={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="w-3 h-3" />
                </>
              ) : (
                <span className="text-primary" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
