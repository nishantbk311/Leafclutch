import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";

const styles = {
  container:
    "relative w-full max-w-[600px] aspect-[4/3.5] perspective-[1000px] translate-y-[-6rem]",

  window:
    "absolute inset-0 bg-white dark:bg-slate-900 rounded-[32px] border border-[#E5F2F6] dark:border-slate-800 shadow-[0_40px_100px_-20px_rgba(13,59,79,0.12)] transition-colors duration-500",

  floatingElementBase:
    "absolute bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-2xl border border-white/50 dark:border-slate-700 flex items-center gap-4 z-20",
  floatingElementText: "pr-4",
  floatingElementLabel:
    "text-[10px] text-[#5D8DA5] dark:text-slate-400 font-bold uppercase tracking-wider mb-1",
  floatingElementValue: "text-lg font-extrabold text-[#0D3B4F] dark:text-white",
};

const DashboardMockup: React.FC = () => {
  return (
    <div className={`${styles.container} ${styles.window}`}>
      <img src="/hero-image.png" alt="Hero Image" className="rounded-[32px] " />
      {/* Floating Elements */}
      <FloatingElement
        position="top"
        color="bg-[#FEF7A5]"
        textColor="text-[#0D3B4F]"
        label="Performance"
        value="+98%"
      />
      <FloatingElement
        position="bottom"
        color="bg-[#0394D9]/10"
        textColor="text-[#0394D9]"
        label="Uptime"
        value="99.9%"
      />
    </div>
  );
};

// Floating Element component
const FloatingElement: React.FC<{
  position: "top" | "bottom";
  color: string;
  textColor: string;
  label: string;
  value: string;
}> = ({ position, color, textColor, label, value }) => (
  <motion.div
    animate={{ y: position === "top" ? [0, -15, 0] : [0, 15, 0] }}
    transition={{
      duration: position === "top" ? 6 : 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: position === "top" ? 0 : 1,
    }}
    className={`${styles.floatingElementBase} ${
      position === "top" ? "-top-6 -left-8" : "-bottom-4 -right-6"
    } ${color}`}
  >
    <div
      className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center ${textColor}`}
    >
      {position === "top" ? <Zap /> : <ShieldCheck />}
    </div>
    <div className={styles.floatingElementText}>
      <div className={styles.floatingElementLabel}>{label}</div>
      <div className={styles.floatingElementValue}>{value}</div>
    </div>
  </motion.div>
);

export default DashboardMockup;
