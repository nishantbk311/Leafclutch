import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";

const styles = {
  headerBase: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
  headerScrolled:
    "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_1px_20px_0_rgba(0,0,0,0.03)] py-4",
  headerTransparent: "bg-transparent py-8",
  logoContainer: "flex items-center gap-2 group cursor-pointer",
  logoImage: "w-13 h-13 rounded-full overflow-hidden",
  logoText:
    "text-xl font-extrabold tracking-tight text-[#0D3B4F] dark:text-white",
  navBase: "hidden lg:flex items-center gap-8",
  navLinkBase:
    "relative font-semibold transition-all duration-300 flex items-center gap-1 group py-2",
  navLinkActive: "text-[#0394D9] dark:text-[#0394D9]",
  navLinkInactive:
    "text-[#5D8DA5] dark:text-slate-400 hover:text-[#0D3B4F] dark:hover:text-white",
  navLinkIndicator:
    "absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0394D9] rounded-full",
  themeToggleButton:
    "p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 active:scale-95 cursor-pointer transition-all duration-300",
  mobileToggleButton: "lg:hidden p-2 text-[#0D3B4F] dark:text-white",
  mobileMenuBase:
    "lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border-t border-slate-50 dark:border-slate-800",
  mobileMenuContent: "p-8 flex flex-col gap-6",
  mobileMenuLink: "text-xl font-bold transition-colors",
  mobileMenuButton:
    "w-full bg-[#FEF7A5] text-[#0D3B4F]  text-md cursor-pointer",
};

const navLinks = [
  { name: "Home", href: "/", id: "home" },
  { name: "About Us", href: "/about", id: "about" },
  { name: "Our Projects", href: "#", id: "projects" },
  { name: "Our Services", href: "#", id: "services" },
  { name: "Pricing", href: "#", id: "pricing" },
  { name: "Careers", href: "#", id: "careers", hasDropdown: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveSection("about");
    } else {
      setActiveSection("home");
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.headerBase} ${
        isScrolled ? styles.headerScrolled : styles.headerTransparent
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Go to homepage"
          className={styles.logoContainer}
          onClick={() => setActiveSection("home")}
        >
          <div className={styles.logoImage}>
            <img
              src="/logo.png"
              alt="Leafclutch Technologies logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className={styles.logoText}>
            Leafclutch <span className="text-[#0394D9]">Technologies.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navBase}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                onClick={() => setActiveSection(link.id)}
                to={link.href}
                className={`${styles.navLinkBase} ${
                  isActive ? styles.navLinkActive : styles.navLinkInactive
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-50 group-hover:rotate-180"
                    }`}
                  />
                )}
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className={styles.navLinkIndicator}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={styles.themeToggleButton}
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <Moon className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Get Started Button */}
          <div className="hidden lg:block">
            <Button variant="primary" className={styles.mobileMenuButton}>
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggleButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.mobileMenuBase}
          >
            <div className={styles.mobileMenuContent}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${styles.mobileMenuLink} ${
                    activeSection === link.id
                      ? "text-[#0394D9]"
                      : "text-[#0D3B4F] dark:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button className={styles.mobileMenuButton}>Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
