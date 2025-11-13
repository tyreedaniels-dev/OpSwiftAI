import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "James Wilson",
      company: "TechCorp Industries",
      role: "CTO",
      quote:
        "The digital solutions delivered by this team have transformed our operations. We’ve seen a 40% boost in efficiency and measurable cost savings.",
      rating: 5,
    },
    {
      id: "2",
      name: "Lisa Martinez",
      company: "Global Finance Group",
      role: "VP of Innovation",
      quote:
        "Their expertise in data strategy and automation helped us modernize critical workflows and improve decision accuracy. Outstanding results.",
      rating: 5,
    },
    {
      id: "3",
      name: "Robert Chang",
      company: "HealthTech Solutions",
      role: "CEO",
      quote:
        "Working with this team was a turning point. They delivered a complete digital system that surpassed expectations and launched ahead of schedule.",
      rating: 5,
    },
    {
      id: "4",
      name: "Amanda Foster",
      company: "RetailMax",
      role: "Director of Operations",
      quote:
        "The automation platform they built streamlined our processes and freed our team to focus on strategy. The impact was clear in the first quarter.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from partners who have accelerated their business through our
            technology and consulting solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover-elevate active-elevate-2 transition-all overflow-visible"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote
                  className="text-foreground/90 mb-6 text-lg leading-relaxed"
                  data-testid={`text-testimonial-quote-${testimonial.id}`}
                >
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      className="font-semibold text-foreground"
                      data-testid={`text-testimonial-name-${testimonial.id}`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="text-sm text-muted-foreground"
                      data-testid={`text-testimonial-role-${testimonial.id}`}
                    >
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
