import { motion } from 'framer-motion';

export const SkeletonCard = () => {
  return (
    <div className="terminal-window animate-pulse">
      <div className="px-4 py-2 bg-border border-b border-border">
        <div className="h-3 w-16 bg-muted rounded" />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex justify-between mb-6">
          <div className="w-10 h-10 bg-muted rounded" />
          <div className="flex gap-3">
            <div className="w-5 h-5 bg-muted rounded" />
            <div className="w-5 h-5 bg-muted rounded" />
          </div>
        </div>
        <div className="h-4 bg-muted rounded w-3/4 mb-4" />
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-muted rounded" />
          <div className="h-3 bg-muted rounded w-5/6" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-muted rounded" />
          <div className="h-6 w-20 bg-muted rounded" />
          <div className="h-6 w-14 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonLine = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`h-4 bg-muted rounded animate-pulse ${className}`} />
  );
};

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => {
  return (
    <div className="space-y-2">
      {[...Array(lines)].map((_, i) => (
        <SkeletonLine
          key={i}
          className={i === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  );
};

export const SkeletonImage = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`bg-muted animate-pulse ${className}`}>
      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
        <svg
          className="w-12 h-12 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export const SkeletonProjectGrid = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[...Array(count)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export const SkeletonTable = ({ rows = 5 }: { rows?: number }) => {
  return (
    <div className="terminal-window">
      <div className="p-6 md:p-8">
        <div className="space-y-4">
          {[...Array(rows)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <SkeletonLine className="w-1/4" />
              <SkeletonLine className="w-1/2" />
              <SkeletonLine className="w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export const TerminalLoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="terminal-window max-w-md">
        <div className="p-8 md:p-12 font-terminal text-sm space-y-4">
          <div className="flex items-center gap-3">
            <LoadingSpinner size="sm" />
            <span className="text-primary">LOADING...</span>
          </div>
          <div className="text-muted-foreground space-y-1">
            <p>{'>'} Initializing components...</p>
            <p>{'>'} Fetching data...</p>
            <p>{'>'} Rendering interface...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
