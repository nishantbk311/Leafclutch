import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const BackgroundFlare: React.FC = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
  </div>
);

const TextSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <div
    className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
    <p className="text-[#fde047] text-xs font-bold tracking-[0.3em] uppercase mb-6">
      Our Commitment
    </p>

    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
      Responsible AI Development
    </h2>

    <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
      We believe in developing AI solutions that are transparent, fair, and
      beneficial to all stakeholders. Our approach prioritizes ethical
      considerations, data privacy, and accountability at every stage of
      development. We're committed to building AI that augments human
      capabilities rather than replacing human judgment.
    </p>
  </div>
);

const styles = {
  section:
    "py-24 lg:py-36 bg-[#25516F] relative overflow-hidden border-b border-white/10",
};

const ResponsibleAI: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={styles.section}>
      <BackgroundFlare />
      <TextSection isVisible={isVisible} />
    </section>
  );
};

export default ResponsibleAI;
