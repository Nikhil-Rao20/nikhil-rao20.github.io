"use client";

/**
 * @author: @dorianbaffier
 * @description: Particle Button
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type RefObject, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParticleButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onSuccess?: () => void;
  successDuration?: number;
}

function SuccessParticles({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLAnchorElement>;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {[...Array(12)].map((_, i) => (
        <motion.div
          animate={{
            scale: [0, 1, 0],
            x: [0, (i % 2 ? 1 : -1) * (Math.random() * 35 + 15)],
            y: [0, -Math.random() * 35 - 15],
          }}
          className="fixed h-1.5 w-1.5 rounded-full bg-[#20364c] dark:bg-[#f3f4f6]"
          initial={{
            scale: 0,
            x: 0,
            y: 0,
          }}
          key={i}
          style={{ left: centerX, top: centerY }}
          transition={{
            duration: 0.35,
            delay: i * 0.02,
            ease: "easeOut",
          }}
        />
      ))}
    </AnimatePresence>
  );
}

export default function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 1000,
  className,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    setShowParticles(true);
    onClick?.(e);

    setTimeout(() => {
      setShowParticles(false);
    }, successDuration);
  };

  return (
    <>
      {showParticles && (
        <SuccessParticles
          buttonRef={buttonRef as RefObject<HTMLAnchorElement>}
        />
      )}
      <a
        className={cn(
          "relative inline-block cursor-pointer",
          showParticles && "scale-95",
          "border-solid border-[1.5px] border-[#20364c] dark:border-[#374151] rounded-[4px] bg-white dark:bg-[#111827] text-[#20364c] dark:text-[#f3f4f6]",
          "px-[13px] py-[3px] text-[1.1rem] font-semibold font-['Montserrat',sans-serif] tracking-[0.04em] uppercase no-underline",
          "transition-all duration-[180ms]",
          "hover:bg-[#20364c] dark:hover:bg-[#1f2937] hover:text-white dark:hover:text-[#f3f4f6] hover:no-underline",
          "mr-2 mb-2",
          className
        )}
        onClick={handleClick}
        ref={buttonRef}
        {...props}
      >
        {children}
      </a>
    </>
  );
}
