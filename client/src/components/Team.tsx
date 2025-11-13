import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@shared/schema";
import ceoImage from "@assets/generated_images/Male_executive_team_photo_698e3a1c.png";
import ctoImage from "@assets/generated_images/Female_executive_team_photo_38c6217c.png";
import mlLeadImage from "@assets/generated_images/Male_engineer_team_photo_aa8dc723.png";
import dataLeadImage from "@assets/generated_images/Female_data_scientist_photo_587a4c9e.png";

export function Team() {
  const team: TeamMember[] = [
    {
      id: "1",
      name: "Michael Chen",
      role: "CEO & Founder",
      bio: "Over 15 years leading enterprise technology and digital transformation projects that drive innovation, scalability, and business growth.",
      image: ceoImage,
      linkedIn: "#",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "Technology strategist focused on designing secure, scalable systems and driving innovation across web, cloud, and AI platforms.",
      image: ctoImage,
      linkedIn: "#",
    },
    {
      id: "3",
      name: "David Park",
      role: "Head of Engineering",
      bio: "Specializes in software architecture and intelligent automation, ensuring our clients achieve operational efficiency and lasting performance.",
      image: mlLeadImage,
      linkedIn: "#",
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      role: "Director of Data & AI",
      bio: "Leads advanced analytics and AI integration initiatives that empower organizations to make data-driven decisions and innovate confidently.",
      image: dataLeadImage,
      linkedIn: "#",
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A team of technology leaders, engineers, and consultants dedicated
            to building intelligent, scalable solutions for businesses
            worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card
              key={member.id}
              className="hover-elevate active-elevate-2 transition-all overflow-visible"
              data-testid={`card-team-${member.id}`}
            >
              <CardContent className="pt-6 flex flex-col items-center text-center gap-4">
                <Avatar className="w-32 h-32 border-4 border-border">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3
                    className="text-xl font-heading font-semibold text-foreground mb-1"
                    data-testid={`text-team-name-${member.id}`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-medium text-primary mb-2"
                    data-testid={`text-team-role-${member.id}`}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid={`text-team-bio-${member.id}`}
                  >
                    {member.bio}
                  </p>
                </div>

                {member.linkedIn && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    asChild
                    data-testid={`button-linkedin-${member.id}`}
                  >
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
