import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SignatureInteractionProps {
  children: React.ReactNode;
  type?: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress' | 'hover';
  className?: string;
}

export const SignatureInteraction = ({ children, type, className = '' }: SignatureInteractionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  if (type === 'text-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 20 }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'clip-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full h-full ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'parallax') {
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    return (
      <div ref={ref} className={`overflow-hidden relative ${className}`}>
        <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'marquee') {
    return (
      <div className={`overflow-hidden flex ${className}`}>
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'hover') {
    return (
      <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
