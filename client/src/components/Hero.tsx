import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import LightRays from "./ui/light-rays";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-700"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
        /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              End-to-End Digital & AI Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="text-primary">Intelligent Technology</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            We help organizations design, build, and scale powerful digital
            systems that combine software innovation with artificial
            intelligence to accelerate growth across every industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="text-base font-semibold group"
              data-testid="button-hero-contact"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-base font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-hero-services"
            >
              Explore Our Services
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8">
            <div className="text-white/80 text-sm">
              <span className="font-semibold text-white text-2xl block">
                50+
              </span>
              <span className="text-white/70">Enterprise Clients</span>
            </div>
            <div className="text-white/80 text-sm">
              <span className="font-semibold text-white text-2xl block">
                200+
              </span>
              <span className="text-white/70">Projects Delivered</span>
            </div>
            <div className="text-white/80 text-sm">
              <span className="font-semibold text-white text-2xl block">
                98%
              </span>
              <span className="text-white/70">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-white/60 hover:text-white transition-colors"
          data-testid="button-scroll-indicator"
          aria-label="Scroll to about section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
