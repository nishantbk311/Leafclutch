import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";

type SocialLink = {
  name: string;
  href: string;
  Icon: React.ElementType;
};

const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", href: "#", Icon: FaLinkedin },
  { name: "Instagram", href: "#", Icon: FaInstagram },
  { name: "Facebook", href: "#", Icon: FaFacebook },
  { name: "Discord", href: "#", Icon: FaDiscord },
];

const COMPANY_LINKS = ["About Us", "Services", "Careers"];
const SERVICE_LINKS = [
  "Software Services",
  "AI & Automation",
  "Web Development",
  "DevOps Solutions",
];

const styles = {
  footer: "bg-[#004B63] text-white pt-12 pb-6 overflow-hidden",
  container: "max-w-7xl mx-auto px-6",

  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10",

  brandBlock: "space-y-4 ",
  brandHeader: "flex items-center gap-3",
  logoWrap: "w-13 h-13 rounded-full overflow-hidden",
  logoImg: "w-full h-full object-cover",
  brandName: "text-2xl font-extrabold tracking-tight",
  brandAccent: "text-[#0394D9]",
  bio: "text-white/70 leading-relaxed font-medium",

  socialsRow: "flex gap-4",
  socialBtn:
    "w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-all duration-300",
  socialIcon: "w-5 h-5",

  col: "space-y-6",
  colCompanyPad: "space-y-6 lg:pl-10",
  colServicesPad: "space-y-6 lg:pl-5",
  colTitle: "text-[#FEF7A5] font-bold text-sm uppercase tracking-widest",
  list: "space-y-4 font-medium",
  link: "text-white/70 hover:text-white transition-colors duration-200",

  contactList: "space-y-6 font-medium",
  contactLink:
    "flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200",
  contactRow: "flex items-start gap-3 text-white/70",
  icon: "w-5 h-5 flex-shrink-0",
  iconTop: "w-5 h-5 mt-1 flex-shrink-0",

  bottomBar:
    "pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6",
  copyright: "text-white/50 text-sm font-medium",
  bottomLinks: "flex gap-8 text-sm font-medium",
  bottomLink: "text-white/50 hover:text-white transition-colors",
};

function FooterColumn({
  title,
  links,
  className = styles.col,
}: {
  title: string;
  links: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className={styles.colTitle}>{title}</h3>
      <ul className={styles.list}>
        {links.map((label) => (
          <li key={label}>
            <a href="#" className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
type SocialIconLinkProps = SocialLink & React.Attributes;

function SocialIconLink({ name, href, Icon }: SocialIconLinkProps) {
  return (
    <motion.a
      aria-label={name}
      title={name}
      href={href}
      whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.2)" }}
      className={styles.socialBtn}
    >
      <Icon className={styles.socialIcon} />
    </motion.a>
  );
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand & Bio */}
          <FadeIn direction="up" className="lg:col-span-2">
            <div className={styles.brandBlock}>
              <div className={styles.brandHeader}>
                <div className={styles.logoWrap}>
                  <img
                    src="/logo.png"
                    alt="Leafclutch Technologies logo"
                    className={styles.logoImg}
                  />
                </div>

                <span className={styles.brandName}>
                  Leafclutch{" "}
                  <span className={styles.brandAccent}>Technologies.</span>
                </span>
              </div>

              <p className={styles.bio}>
                We build intelligent software, AI, and automation solutions that
                drive measurable business growth for startups and enterprises
                worldwide.
              </p>

              <div className={styles.socialsRow}>
                {SOCIAL_LINKS.map((item) => (
                  <SocialIconLink
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    Icon={item.Icon}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Company Links */}
          <FadeIn direction="up" delay={0.1}>
            <FooterColumn
              title="Company"
              links={COMPANY_LINKS}
              className={styles.colCompanyPad}
            />
          </FadeIn>

          {/* Services Links */}
          <FadeIn direction="up" delay={0.2}>
            <FooterColumn
              title="Services"
              links={SERVICE_LINKS}
              className={styles.colServicesPad}
            />
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="up" delay={0.3}>
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Contact</h3>

              <ul className={styles.contactList}>
                <li>
                  <a
                    href="mailto:info@leafclutch.dev"
                    className={styles.contactLink}
                  >
                    <Mail className={styles.icon} />
                    <span>info@leafclutch.dev</span>
                  </a>
                </li>

                <li>
                  <div className={styles.contactRow}>
                    <MapPin className={styles.iconTop} />
                    <span>Bhairahawa, Rupandehi, Nepal.</span>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Leafclutch Technologies. All rights reserved.
          </p>

          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.bottomLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
