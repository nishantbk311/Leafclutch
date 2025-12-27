import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const styles = {
  section:
    "relative overflow-hidden pt-30 pb-32 lg:pt-40 lg:pb-20 transition-colors duration-300",
  container:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000",
  visible: "opacity-100 translate-y-0",
  hidden: "opacity-0 translate-y-10",
  textContainer: "text-center max-w-4xl mx-auto",
  subheading:
    "text-[#0ea5e9] text-xs sm:text-sm font-bold tracking-[0.2em] mb-4 uppercase",
  title:
    "text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0f172a] dark:text-white tracking-tight leading-[1.15] mb-8",
  description:
    "text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10",
  background:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 pointer-events-none opacity-20 dark:opacity-10",
  backgroundShape1:
    "absolute top-[10%] left-[5%] w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl animate-pulse",
  backgroundShape2:
    "absolute bottom-[10%] right-[5%] w-96 h-96 bg-cyan-100 dark:bg-cyan-900 rounded-full blur-3xl",
};

const HeroAbout: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div
        className={`${styles.container} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.textContainer}>
          <p className={styles.subheading}>About Us</p>

          <h1 className={styles.title}>
            Building the Future of <br />
            <span className="text-[#0ea5e9]">Technology</span>
          </h1>

          <p className={styles.description}>
            Leafclutch Technologies is a forward-thinking software company
            dedicated to empowering businesses with intelligent solutions that
            drive growth and innovation.
          </p>
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.backgroundShape1}></div>
        <div className={styles.backgroundShape2}></div>
      </div>
    </section>
  );
};

export default HeroAbout;
