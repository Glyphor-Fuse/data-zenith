import React from 'react';
import { motion } from 'framer-motion';

interface SignatureEffectProps {
  children: React.ReactNode;
  effect?: 'pulse' | 'glow' | 'none';
  className?: string;
}

export const SignatureEffect = ({ children, effect = 'none', className = '' }: SignatureEffectProps) => {
  if (effect === 'pulse') {
    return (
      <div className={`relative ${className}`}>
        <motion.div
          className="absolute inset-0 rounded-full bg-indigo-500/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};
