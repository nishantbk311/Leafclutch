import React from "react";
import { Heart, Lightbulb, Award, Users } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const values = [
  {
    title: "Client-First Engineering",
    description:
      "We prioritize understanding your unique challenges and crafting solutions that truly address your needs.",
    icon: Heart,
  },
  {
    title: "Innovation with Purpose",
    description:
      "We embrace cutting-edge technologies while ensuring they serve practical business objectives.",
    icon: Lightbulb,
  },
  {
    title: "Quality Excellence",
    description:
      "Every line of code, every solution we deliver meets the highest standards of quality and reliability.",
    icon: Award,
  },
  {
    title: "Collaborative Partnership",
    description:
      "We work alongside your team, fostering transparency and open communication throughout every project.",
    icon: Users,
  },
];

const styles = {
  section:
    "py-20 lg:py-32 bg-[#F9FAFB] dark:bg-slate-900/50 transition-colors duration-300",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-16 space-y-4 relative transition-all duration-700",
  headerText: "text-[#0ea5e9] text-xs font-bold tracking-[0.2em] uppercase",
  heading:
    "text-4xl lg:text-5xl font-bold text-[#0f172a] dark:text-white tracking-tight",
  gridContainer:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
};

const ValueCard: React.FC<{
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}> = ({ icon: Icon, title, description, index, isVisible }) => (
  <div
    className={`group bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[2rem] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-100/60 dark:hover:shadow-sky-900/20 hover:-translate-y-2 flex flex-col items-center text-center cursor-default`}
    style={{
      transitionDelay: `${index * 150}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
    }}
  >
    <div className="bg-sky-50 dark:bg-sky-950 p-5 rounded-2xl w-fit mb-8 transition-all duration-300 group-hover:bg-[#0ea5e9] group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-sky-200 dark:group-hover:shadow-sky-900/40">
      <Icon className="w-8 h-8 text-[#0ea5e9] transition-colors duration-300 group-hover:text-white" />
    </div>

    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-4 group-hover:text-[#0ea5e9] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const ValuesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        {/* Header  */}
        <div className={styles.header}>
          <p className={styles.headerText}>Our Values</p>
          <h2 className={styles.heading}>What Drives Us Forward</h2>
        </div>

        {/* Values  */}
        <div className={styles.gridContainer}>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
