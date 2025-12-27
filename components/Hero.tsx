import { motion } from "framer-motion";
import Button from "./Button";
import DashboardMockup from "./DashboardMockup";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const styles = {
  section:
    "relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F1F9FE] dark:bg-slate-950 transition-colors duration-500",
  glowBackground:
    "absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-br from-white via-[#F1F9FE] to-[#E5F2F6] dark:from-slate-900 dark:via-slate-950 dark:to-slate-950",
  container:
    "max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center",
  badge:
    "inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#B9E6FE] dark:border-sky-500/20 bg-[#E0F2FE]/40 dark:bg-sky-500/10 mb-8 shadow-sm",
  badgeText:
    "text-[15px] font-semibold text-[#0394D9] dark:text-sky-400 tracking-tight",
  headline:
    "text-[2.8rem] md:text-[4rem] lg:text-[4.2rem] leading-[1.05] font-extrabold text-[#0D3B4F] dark:text-white mb-8 tracking-tight",
  subheadline:
    "text-lg md:text-[1.35rem] text-[#5D8DA5] dark:text-slate-400 leading-relaxed mb-12 max-w-2xl font-normal",
  buttonContainer: "flex flex-wrap gap-4 mb-16",
  button:
    "px-10 py-4 text-lg border-none shadow-sm flex items-center gap-2 group",
  outlineButton:
    "border-[#0D3B4F] dark:border-slate-700 text-[#0D3B4F] dark:text-slate-300 px-10 py-4 text-lg hover:bg-[#0D3B4F]/5 dark:hover:bg-white/5",
  featureList: "flex flex-wrap gap-x-8 gap-y-4",
  featureItem:
    "flex items-center gap-2 text-[#5D8DA5] dark:text-slate-400 font-medium",
  featureIcon: "w-6 h-6 text-[#0394D9]",
  dashboardMockup: "relative lg:block hidden",
};

const Hero = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.glowBackground} />

      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <Sparkles className="w-4 h-4" stroke="#0394D9" />
            <span className={styles.badgeText}>
              Empowering Business Growth with AI
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            We build intelligent{" "}
            <span className="text-[#0394D9]">software, AI, and automation</span>{" "}
            solutions that drive measurable business growth.
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subheadline}>
            Unlock new opportunities with reliable software solutions and
            responsible, high-performance AI automation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className={styles.buttonContainer}
          >
            <Button
              className={`${styles.button} bg-[#FEF7A5] hover:bg-[#FDF181] text-[#0D3B4F]`}
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className={styles.outlineButton}>
              View Our Work
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.featureList}>
            <div className={styles.featureItem}>
              <ShieldCheck className={styles.featureIcon} />
              <span>Enterprise-ready</span>
            </div>
            <div className={styles.featureItem}>
              <Zap className={styles.featureIcon} />
              <span>High Performance</span>
            </div>
            <div className={styles.featureItem}>
              <Sparkles className={styles.featureIcon} />
              <span>Responsible AI</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className={`${styles.dashboardMockup}`}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
