import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import opswiftFav from "@assets/generated_images/opswift_ai_favicon.png";

export function Footer() {
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

  const footerLinks = {
    company: [
      { label: "About Us", id: "about" },
      { label: "Our Team", id: "team" },
      { label: "Testimonials", id: "testimonials" },
    ],
    services: [
      { label: "Machine Learning", id: "services" },
      { label: "AI Consulting", id: "services" },
      { label: "Automation", id: "services" },
    ],
    contact: [
      { label: "Get in Touch", id: "contact" },
      { label: "Request Demo", id: "contact" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@aisolutions.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="grid sm:grid-cols-1 lg:grid-cols-7 gap-24 mb-12">
          <div className="md:col-span-4">
            <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-2 mb-6">
              <div className="border-r-2 sm:col-span-1 md:col-span-2 flex flex-col justify-center items-center">
                <img
                  src={opswiftFav}
                  alt="OPSWIFT favicon"
                  className="w-1/4 h-auto p-auto m-auto"
                />
                <p className="text-muted-foreground text-center text-2xl lg:text-3xl font-bold">
                  OpSwift <span className="text-sky-500">AI</span>
                </p>
                <div className="flex gap-3 mt-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        size="icon"
                        variant="outline"
                        asChild
                        data-testid={`button-social-${social.label.toLowerCase()}`}
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
              <div className="sm:col-span-1 md:col-span-3 flex flex-col justify-center">
                <p className="text-muted-foreground mb-4">
                  Empowering organizations with intelligent software, AI
                  integration, and IT consulting that drive innovation,
                  scalability, and growth.
                </p>
                <p className="text-xl font-bold text-foreground">
                  Automate Smater. Scale Faster.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-1 lg:grid-cols-3">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <button
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} OpSwiftAI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
