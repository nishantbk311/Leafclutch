import React from "react";
import { Linkedin, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const team = [
  {
    name: "Pawan Chaudhary",
    role: "Technical & DevOps Head",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Shristi Karki",
    role: "Social Media and Technical",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Bijay Koirala",
    role: "Consultant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Siddhartha Pathak",
    role: "Data Science & AI",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Saurya Chaudhary",
    role: "Cyber Security Specialist",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Roshan Kumar Singh",
    role: "Backend & AI",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ayush Kumar Thakur",
    role: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Aniket Shah",
    role: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
];

const styles = {
  section:
    "py-20 lg:py-32 bg-[#F9FAFB] dark:bg-slate-950 transition-colors duration-300",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  header: "text-center mb-16 transition-all duration-700",
  heading: "text-3xl lg:text-4xl font-bold text-[#0f172a] dark:text-white",
  gridContainer:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12",
  ctaWrapper:
    "mt-20 flex justify-center transition-all duration-1000 delay-500",
  ctaButton:
    "bg-[#fef9c3] hover:bg-[#fef08a] text-slate-900 px-8 py-3.5 rounded-2xl font-bold shadow-sm flex items-center space-x-3 transition-all hover:scale-105 active:scale-95 group",
};

const SocialIcon: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <a
    href={href}
    className="flex items-center space-x-1.5 text-[#0ea5e9] text-sm font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <Linkedin className="w-4 h-4" />
    <span>{label}</span>
  </a>
);

const TeamMemberCard: React.FC<{
  member: any;
  index: number;
  isVisible: boolean;
}> = ({ member, index, isVisible }) => (
  <div
    className={`flex flex-col items-center group transition-all duration-700`}
    style={{
      transitionDelay: `${index * 100}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
    }}
  >
    <div className="w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold text-[#0f172a] dark:text-white mb-1 text-center">
      {member.name}
    </h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 text-center">
      {member.role}
    </p>
    <SocialIcon href={member.linkedin} label="LinkedIn" />
  </div>
);

const TeamMembers: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Team Members</h2>
        </div>

        <div className={styles.gridContainer}>
          {team.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton}>
            <span>Our Intern Team</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
