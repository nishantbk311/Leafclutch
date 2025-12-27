import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import FadeIn from "./FadeIn";
import Button from "./Button";

const styles = {
  section: "py-20 px-2 dark:bg-slate-950 transition-colors duration-500",
  container: "max-w-7xl mx-auto",
  gradientCard:
    "relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#006A9F] via-[#008BB9] to-[#0394D9] dark:from-[#0D3B4F] dark:to-[#0394D9] p-8 md:p-16 lg:p-20 shadow-2xl",
  abstractGlow:
    "absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none",
  contentGrid:
    "relative z-10 grid lg:grid-cols-[1.2fr_0.8fr_1fr] gap-12 items-center",
  leftContent: "space-y-1",
  heading:
    "text-3xl md:text-5xl lg:text-[3rem] font-extrabold text-white leading-tight",
  subheading: "text-white/80 text-lg md:text-xl max-w-md leading-relaxed",
  buttonGroup: "flex flex-wrap gap-4 pt-4",
  qrCard: "flex justify-center",
  qrWrapper:
    "bg-white p-4 pb-3 rounded-[24px] shadow-xl w-48 text-center flex flex-col items-center",
  emailCard: "flex justify-center lg:justify-start ",
  emailWrapper:
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] p-6 flex items-center gap-5 w-full max-w-xs",
  emailIconWrapper:
    "w-14 h-12 bg-[#FEF7A5] rounded-[14px] flex items-center justify-center text-[#0D3B4F] flex-shrink-0",
  emailText: "text-white/60 text-sm font-bold uppercase tracking-wider mb-0.5",
  emailAddress: "text-white font-extrabold text-lg truncate",
};

const TransformSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn direction="up">
          <div className={styles.gradientCard}>
            <div className={styles.abstractGlow} />

            <div className={styles.contentGrid}>
              <div className={styles.leftContent}>
                <h2 className={styles.heading}>
                  Ready to <br className="hidden md:block" /> Transform Your
                  Business?
                </h2>
                <p className={styles.subheading}>
                  Let's discuss how our solutions can help you achieve your
                  goals. Get a free consultation with our experts.
                </p>

                <div className={styles.buttonGroup}>
                  <Button className="bg-[#FEF7A5] text-[#0D3B4F] px-8 py-4 text-lg group w-full md:w-auto">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white/10 px-8 py-4 text-lg w-full md:w-auto"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>

              <div className={styles.qrCard}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={styles.qrWrapper}
                >
                  <div className="w-40 h-40 bg-white mb-2 flex items-center justify-center">
                    <img src="/qr.png" alt="qr-code-image" />
                  </div>
                </motion.div>
              </div>

              <div className={styles.emailCard}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={styles.emailWrapper}
                >
                  <div className={styles.emailIconWrapper}>
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className={styles.emailText}>Email us</div>
                    <div className={styles.emailAddress}>
                      info@leafclutch.dev
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TransformSection;
