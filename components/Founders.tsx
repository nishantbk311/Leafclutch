import React from "react";
import { Mail, Linkedin, Globe } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const founders = [
  {
    name: "Siddhartha Pathak",
    role: "Co-Founder & CTO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    socials: {
      email: "mailto:siddhartha@leafclutch.com",
      linkedin: "https://linkedin.com",
      website: "https://leafclutch.com",
    },
  },
  {
    name: "Shubham Kumar Deo",
    role: "Co-Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    socials: {
      email: "mailto:shubham@leafclutch.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const styles = {
  section:
    "py-20 lg:py-32 bg-[#F9FAFB] dark:bg-slate-900 transition-colors duration-300",
  container:
    "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000",
  contentWrapper:
    "bg-[#dcf0ff] dark:bg-slate-800/80 rounded-[3rem] p-10 lg:p-20 shadow-sm",
  header: "text-center max-w-2xl mx-auto mb-16",
  heading: "text-3xl lg:text-4xl font-bold text-[#0f172a] dark:text-white mb-6",
  subheading: "text-slate-500 dark:text-slate-300 text-lg leading-relaxed",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16",
};

const SocialIcon: React.FC<{
  href: string;
  label: string;
  icon: React.ReactNode;
}> = ({ href, label, icon }) => (
  <a
    href={href}
    className="text-[#0ea5e9] hover:text-sky-600 dark:hover:text-sky-400 transition-all hover:scale-110"
    aria-label={label}
  >
    {icon}
  </a>
);

const FounderCard: React.FC<{ founder: any; index: number }> = ({
  founder,
  index,
}) => (
  <div
    className={`space-y-6 group transition-all duration-700 delay-[${
      index * 200
    }ms]`}
  >
    <div className="overflow-hidden rounded-[2rem] aspect-square lg:aspect-[4/3] shadow-xl bg-slate-200 dark:bg-slate-700">
      <img
        src={founder.image}
        alt={founder.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    <div className="space-y-4 px-2">
      <div>
        <h3 className="text-2xl font-bold text-[#0f172a] dark:text-white mb-1">
          {founder.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          {founder.role}
        </p>
      </div>

      <div className="flex items-center space-x-5">
        {founder.socials.email && (
          <SocialIcon
            href={founder.socials.email}
            label={`Email ${founder.name}`}
            icon={<Mail className="w-5 h-5" />}
          />
        )}
        {founder.socials.linkedin && (
          <SocialIcon
            href={founder.socials.linkedin}
            label={`LinkedIn ${founder.name}`}
            icon={<Linkedin className="w-5 h-5" />}
          />
        )}
        {founder.socials.website && (
          <SocialIcon
            href={founder.socials.website}
            label={`Website ${founder.name}`}
            icon={<Globe className="w-5 h-5" />}
          />
        )}
      </div>
    </div>
  </div>
);

const Founders: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.heading}>Founders</h2>
            <p className={styles.subheading}>
              A dedicated group of AI engineers, developers, and automation
              specialists committed to transforming how businesses operate.
            </p>
          </div>

          {/* Founders  */}
          <div className={styles.gridContainer}>
            {founders.map((founder, index) => (
              <FounderCard key={index} founder={founder} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
