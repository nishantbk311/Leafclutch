import React from "react";
import { Target, Eye } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Card: React.FC<{
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay?: number;
  isVisible: boolean;
}> = ({ icon: Icon, title, description, delay = 0, isVisible }) => (
  <div
    className={`group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 lg:p-12 shadow-sm hover:shadow-md dark:hover:shadow-sky-900/10 transition-all duration-700 delay-[${delay}ms] ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <div className="bg-sky-50 dark:bg-sky-950 p-4 rounded-xl w-fit mb-8 transition-all duration-300 group-hover:bg-[#0ea5e9] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-200 dark:group-hover:shadow-sky-900/40">
      <Icon className="w-8 h-8 text-[#0ea5e9] transition-colors duration-300 group-hover:text-white" />
    </div>

    <h3 className="text-2xl lg:text-3xl font-bold text-[#0f172a] dark:text-white mb-6 transition-colors duration-300 group-hover:text-[#0ea5e9]">
      {title}
    </h3>
    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
      {description}
    </p>
  </div>
);

const styles = {
  section:
    "py-20 lg:py-32 bg-[#F5F7F8] dark:bg-slate-950 transition-colors duration-300",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",
};

const MissionVision: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Card
            icon={Target}
            title="Our Mission"
            description="To empower businesses with intelligent, scalable, and responsible technology solutions that drive measurable growth and competitive advantage. We are committed to delivering excellence through innovation, collaboration, and unwavering dedication to our clients' success."
            isVisible={isVisible}
          />

          <Card
            icon={Eye}
            title="Our Vision"
            description="To be the global leader in ethical AI and software solutions, recognized for our commitment to innovation, quality, and positive societal impact. We envision a world where technology serves as a catalyst for sustainable business growth and human progress."
            delay={200}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
