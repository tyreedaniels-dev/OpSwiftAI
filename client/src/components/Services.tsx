import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Brain,
  Codepen,
  LineChart,
  MessageSquare,
  Landmark,
  Cloudy,
  Lightbulb,
} from "lucide-react";
import type { Service } from "@shared/schema";

export function Services() {
  const services: Service[] = [
    {
      id: "1",
      title: "AI Integration & Automation",
      description:
        "Smart solutions that embed artificial intelligence into your workflows, products, and customer experiences to improve efficiency and business intelligence.",
      icon: "Brain",
    },
    {
      id: "2",
      title: "Software Development",
      description:
        "End-to-end design and development of web, mobile, and enterprise applications that drive digital transformation and deliver measurable value.",
      icon: "Codepen",
    },
    {
      id: "3",
      title: "IT & Cloud Consulting",
      description:
        "Strategic guidance on infrastructure modernization, cloud migration, and technology alignment to ensure performance, security, and scalability.",
      icon: "Cloudy",
    },
    {
      id: "4",
      title: "Data Engineering & Analytics",
      description:
        "Data pipelines, dashboards, and advanced analytics solutions that turn raw information into actionable insights for better decision-making.",
      icon: "LineChart",
    },
    {
      id: "5",
      title: "Industry Solutions",
      description:
        "Tailored technology frameworks for eCommerce, healthcare, fintech, and other industries, designed to address unique operational challenges and compliance needs.",
      icon: "Landmark",
    },
    {
      id: "6",
      title: "Product Strategy & Innovation",
      description:
        "Collaborative consulting that bridges business goals and technical execution, helping teams design forward-thinking solutions and bring new ideas to market faster.",
      icon: "Lightbulb",
    },
  ];

  const iconMap: Record<string, typeof Brain> = {
    Brain,
    Cloudy,
    LineChart,
    MessageSquare,
    Codepen,
    Landmark,
    Lightbulb,
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology and consulting services that empower
            businesses to innovate, automate, and scale across every domain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="hover-elevate active-elevate-2 transition-all group overflow-visible"
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader className="gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-heading font-semibold text-foreground"
                    data-testid={`text-service-title-${service.id}`}
                  >
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-muted-foreground"
                    data-testid={`text-service-description-${service.id}`}
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
