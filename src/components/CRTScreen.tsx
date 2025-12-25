import { ReactNode } from 'react';

interface CRTScreenProps {
  children: ReactNode;
  className?: string;
}

export const CRTScreen = ({ children, className = '' }: CRTScreenProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content - overlay effects removed for cleaner appearance */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
