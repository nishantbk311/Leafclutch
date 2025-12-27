import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "10+", label: "Team Members" },
  { value: "2", label: "Countries Served" },
];

const styles = {
  section:
    "py-20 lg:py-32 bg-[#F9FAFB] dark:bg-slate-900/50 transition-colors duration-300",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  gridContainer:
    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
  textContainer: "space-y-6 transition-all duration-700 delay-100",
  visibleText: "opacity-100 translate-x-0",
  hiddenText: "opacity-0 -translate-x-10",
  heading: "text-[#0ea5e9] text-sm font-bold tracking-[0.15em] uppercase",
  title:
    "text-4xl lg:text-5xl font-extrabold text-[#0f172a] dark:text-white leading-tight",
  description:
    "space-y-6 text-slate-500 dark:text-slate-400 text-lg leading-relaxed",
  statContainer:
    "bg-sky-50/50 dark:bg-slate-800/50 rounded-[2rem] p-10 lg:p-16 border border-sky-100/50 dark:border-slate-700 shadow-sm transition-all duration-700 delay-300",
  visibleStats: "opacity-100 translate-x-0 scale-100",
  hiddenStats: "opacity-0 translate-x-10 scale-95",
  statGrid: "grid grid-cols-2 gap-y-12 gap-x-8",
};

const StatCard: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div className="text-center group">
    <div className="text-4xl lg:text-5xl font-bold text-[#0f172a] dark:text-white mb-2 transition-transform group-hover:scale-110 duration-300">
      {value}
    </div>
    <div className="text-slate-500 dark:text-slate-400 font-medium text-sm lg:text-base">
      {label}
    </div>
  </div>
);

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          {/* Left Column: Text Content */}
          <div
            className={`${styles.textContainer} ${
              isVisible ? styles.visibleText : styles.hiddenText
            }`}
          >
            <p className={styles.heading}>Who We Are</p>
            <h2 className={styles.title}>
              A Team of Passionate <br /> Technologists
            </h2>
            <div className={styles.description}>
              <p>
                Founded with a vision to bridge the gap between cutting-edge
                technology and practical business needs, Leafclutch Technologies
                has grown into a trusted partner for organizations worldwide.
              </p>
              <p>
                Our diverse team brings together expertise in software
                engineering, artificial intelligence, data science, and cloud
                infrastructure. We combine technical excellence with deep
                industry knowledge to deliver solutions that create real value.
              </p>
            </div>
          </div>

          {/* Right Column: Statistics Card */}
          <div
            className={`${styles.statContainer} ${
              isVisible ? styles.visibleStats : styles.hiddenStats
            }`}
          >
            <div className={styles.statGrid}>
              {stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
