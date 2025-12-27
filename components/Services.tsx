import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Cpu,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";
import FadeIn from "./FadeIn";
import Button from "./Button";

const styles = {
  title:
    "text-[#0394D9] font-bold text-sm tracking-widest uppercase mb-4 block",
  heading:
    "text-4xl md:text-5xl font-extrabold text-[#0D3B4F] dark:text-white mb-6",
  description:
    "text-[#5D8DA5] dark:text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
  serviceCard:
    "group bg-white dark:bg-slate-800/50 p-10 rounded-[32px] border border-[#E5F2F6] dark:border-slate-700/50 hover:shadow-[0_20px_60px_-15px_rgba(13,59,79,0.08)] transition-all duration-300 h-full flex flex-col",
  iconContainer:
    "w-14 h-14 bg-[#F1F9FE] dark:bg-slate-700 rounded-2xl flex items-center justify-center text-[#0394D9] mb-8 group-hover:bg-[#0394D9] group-hover:text-white transition-colors duration-300",
  titleText: "text-2xl font-bold text-[#0D3B4F] dark:text-white mb-4",
  descriptionText:
    "text-[#5D8DA5] dark:text-slate-400 text-lg leading-relaxed mb-8 flex-grow",
  link: "inline-flex items-center gap-2 text-[#0394D9] font-bold hover:gap-3 transition-all duration-300",
  banner:
    "bg-[#FEFCE8] dark:bg-slate-800 border border-[#FEF3C7] dark:border-slate-700 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8",
  bannerIcon:
    "w-16 h-16 bg-[#FEF7A5] dark:bg-[#0394D9] rounded-2xl flex items-center justify-center text-[#0D3B4F] dark:text-white shadow-sm",
  bannerTitle:
    "text-2xl md:text-3xl font-extrabold text-[#0D3B4F] dark:text-white",
  bannerText: "text-[#5D8DA5] dark:text-slate-400 text-lg",
  button: "bg-[#FEF7A5] text-[#0D3B4F] px-8 py-4 whitespace-nowrap group",
};

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Software Services",
    description:
      "Custom software development, backend systems, APIs, and scalable enterprise solutions.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Web Development",
    description:
      "Responsive websites, web applications, dashboards, and admin panels built for performance.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "App Development",
    description:
      "Android & iOS apps, cross-platform solutions with performance-focused development.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "AI & Automation",
    description:
      "AI-powered solutions, workflow automation, n8n pipelines, and intelligent chatbots.",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    title: "Data Analysis",
    description:
      "Data cleaning, preprocessing, visualization dashboards, and business intelligence.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "DevOps & Cloud",
    description:
      "Private cloud setup, Nextcloud deployment, CI/CD pipelines, and secure infrastructure.",
    icon: <Cloud className="w-6 h-6" />,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn direction="up">
            <span className={styles.title}>What we offer</span>
            <h2 className={styles.heading}>
              Comprehensive Technology Solutions
            </h2>
            <p className={styles.description}>
              From custom software to AI automation, we deliver end-to-end
              solutions that transform your business operations.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.1}
              direction="up"
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className={styles.serviceCard}
              >
                <div className={styles.iconContainer}>{service.icon}</div>
                <h3 className={styles.titleText}>{service.title}</h3>
                <p className={styles.descriptionText}>{service.description}</p>
                <a href="#" className={styles.link}>
                  Learn more
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className={styles.banner}>
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className={styles.bannerIcon}>
                <Code className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className={styles.bannerTitle}>
                  Training & Internship Programs
                </h3>
                <p className={styles.bannerText}>
                  Industry-focused learning in Data Science, AI, Software
                  Development & more.
                </p>
              </div>
            </div>
            <Button className={styles.button}>
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
