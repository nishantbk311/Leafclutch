import React from "react";
import { motion } from "framer-motion";

interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    | "onAnimationStart"
    | "onDrag"
    | "onDragStart"
    | "onDragEnd"
    | "onAnimationEnd"
    | "onAnimationIteration"
  > {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

const baseStyles =
  "px-6 py-3 cursor-pointer rounded-[14px] font-bold transition-all duration-50 flex items-center justify-center gap-2 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500/20";

const variantStyles = {
  primary:
    "bg-[#FEF7A5] text-[#0D3B4F] shadow-sm hover:brightness-95 active:scale-[0.97]",
  secondary:
    "bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-[0.97]",
  outline:
    "bg-transparent border-2 border-[#0D3B4F] text-[#0D3B4F] hover:bg-[#0D3B4F]/5 active:scale-[0.97]",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
