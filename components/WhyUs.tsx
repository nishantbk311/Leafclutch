import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  ShieldCheck,
  Expand,
  Award,
  CircleCheckBig,
} from "lucide-react";

import FadeIn from "./FadeIn";

const styles = {
  section:
    "py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500",
  container: "max-w-7xl mx-auto px-6",
  contentGrid: "grid lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-24 items-center",
  leftColumn: "flex flex-col",
  heading:
    "text-[2.5rem] lg:text-[3rem] leading-[1.1] font-extrabold text-[#0D3B4F] dark:text-white mb-8 tracking-tight",
  subheading:
    "text-[#5D8DA5] dark:text-slate-400 text-lg leading-relaxed mb-16 max-w-xl font-normal",
  statsGrid:
    "grid grid-cols-2 md:flex md:flex-wrap items-center gap-7 md:gap-10",
  statItem: "text-left",
  statValue:
    "text-4xl lg:text-5xl font-extrabold text-[#0D3B4F] dark:text-white",
  statLabel:
    "text-[#5D8DA5] dark:text-slate-400 text-xs font-bold uppercase tracking-wider mt-1",
  qrCard: "flex justify-center",
  qrWrapper:
    "bg-white p-4 pb-3 rounded-[24px] shadow-xl w-48 text-center flex flex-col items-center",
  emailCard: "flex justify-end lg:justify-start",
  emailWrapper:
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-6 flex items-center gap-5 w-full max-w-xs",
  emailIconWrapper:
    "w-14 h-12 bg-[#FEF7A5] rounded-[14px] flex items-center justify-center text-[#0D3B4F] flex-shrink-0",
  emailText: "text-white/60 text-sm font-bold uppercase tracking-wider mb-0.5",
  emailAddress: "text-white font-extrabold text-lg truncate",
  featureCard:
    "group bg-white dark:bg-slate-800/50 border border-[#E5F2F6] dark:border-slate-700/50 rounded-[24px] p-8 transition-all duration-300 h-full flex flex-col",
  featureIconWrapper:
    "w-11 h-11 bg-[#F1F9FE] dark:bg-slate-700 rounded-xl flex items-center justify-center text-[#0394D9] mb-6 group-hover:bg-[#0394D9] group-hover:text-white transition-all duration-300 ease-out",
  featureTitle:
    "text-[1.35rem] font-extrabold text-[#0D3B4F] dark:text-white mb-3 group-hover:text-[#0394D9] transition-colors duration-300 leading-tight",
  featureDescription:
    "text-[#5D8DA5] dark:text-slate-400 text-[15px] leading-relaxed font-normal",
};

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <motion.div
    whileHover={{
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
      borderColor: "#0394D966",
    }}
    className={styles.featureCard}
  >
    <div className={styles.featureIconWrapper}>{icon}</div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
  </motion.div>
);

const features = [
  {
    title: "Responsible AI",
    description:
      "We prioritize ethical AI practices, ensuring transparency, fairness, and accountability in every solution we build.",
    icon: <ShieldCheck />,
  },
  {
    title: "High Performance",
    description:
      "Our solutions are optimized for speed and efficiency, delivering measurable improvements to your business operations.",
    icon: <Zap />,
  },
  {
    title: "Client-First Approach",
    description:
      "We listen, understand, and tailor our solutions to your specific needs, ensuring complete satisfaction.",
    icon: <Users />,
  },
  {
    title: "Scalable Solutions",
    description:
      "Built for growth, our systems scale seamlessly from startup to enterprise-level demands.",
    icon: <Expand />,
  },
  {
    title: "Expert Team",
    description:
      "Our experienced engineers bring deep expertise across software, AI, data, and cloud technologies.",
    icon: <Award />,
  },
  {
    title: "Proven Results",
    description:
      "We've helped businesses across industries achieve measurable growth and operational excellence.",
    icon: <CircleCheckBig />,
  },
];
const WhyUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <FadeIn direction="up">
              <span className="text-[#0394D9] font-bold text-sm tracking-widest uppercase mb-5 block">
                Why Leafclutch
              </span>
              <h2 className={styles.heading}>
                Technology Partner You Can Trust
              </h2>
              <p className={styles.subheading}>
                We combine technical excellence with a deep understanding of
                business needs to deliver solutions that truly make a
                difference. Our commitment to quality, transparency, and client
                success sets us apart.
              </p>

              {/* Stats */}
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>5+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>100%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>24/7</div>
                  <div className={styles.statLabel}>Support Available</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, idx) => (
              <FadeIn key={feature.title} delay={idx * 0.05} direction="up">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
