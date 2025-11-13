import { Card } from "@/components/ui/card";
import { Brain, Zap, Target, Shield } from "lucide-react";

export function About() {
  const stats = [
    { value: "10+", label: "Years of Industry Experience", icon: Target },
    { value: "50+", label: "AI, Engineering, and Consulting Specialists", icon: Brain },
    { value: "200+", label: "Projects Successfully Delivered", icon: Zap },
    { value: "99.9%", label: "Client Retention and System Reliability", icon: Shield },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Empowering Businesses Through Intelligent Innovation
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                We are a global team of engineers, AI specialists, and
                technology consultants dedicated to helping businesses innovate
                through intelligent software and digital transformation.
              </p>
              <p>
                Our focus is to make advanced technology accessible and
                impactful across every industry. We combine strategic consulting
                with hands-on engineering to deliver scalable, high-performance
                systems that create measurable business outcomes.
              </p>
              <p>
                From enterprise software and cloud infrastructure to AI-powered
                automation and data-driven insights, we help organizations
                modernize operations, improve decision-making, and accelerate
                growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-stat-${index}`}
                >
                  <div className="flex flex-col items-start gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div
                        className="text-3xl font-heading font-bold text-foreground mb-1"
                        data-testid={`text-stat-value-${index}`}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-testid={`text-stat-label-${index}`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
