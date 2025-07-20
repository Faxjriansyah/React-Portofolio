import { useState } from "react";
import { cn } from "../lib/utils";
import { CertificateCarousel } from "./CertificateCarousel";

const skills = [
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    certificates: [
      {
        imageUrl: "/certificates/html-css-1.png",
        name: "HTML/CSS Fundamentals",
        date: "June 2022",
        issuer: "Code Academy"
      },
      {
        imageUrl: "/certificates/html-css-2.png",
        name: "Advanced CSS Mastery",
        date: "August 2022",
        issuer: "Web Dev Institute"
      }
    ]
  },
  { 
    name: "JavaScript", 
    level: 90, 
    category: "frontend",
    certificates: [
      {
        imageUrl: "/certificates/js-cert.png",
        name: "JavaScript Expert",
        date: "March 2023",
        issuer: "JS Foundation"
      }
    ]
  },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" }
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCertificates, setSelectedCertificates] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50",
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => skill.certificates && setSelectedCertificates(skill.certificates)}
              className={cn(
                "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md",
                "transition-all duration-300 hover:shadow-lg",
                "border border-transparent hover:border-primary/20",
                skill.certificates ? "cursor-pointer hover:-translate-y-1" : "cursor-default"
              )}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{skill.name}</h3>
                {skill.certificates && (
                  <span className="text-xs bg-primary/10 text-primary dark:text-primary-300 px-2 py-1 rounded-full">
                    {skill.certificates.length} certs
                  </span>
                )}
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-1">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Proficiency: {skill.level}%
                </span>
                {skill.certificates && (
                  <button 
                    className="text-xs text-primary hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCertificates(skill.certificates);
                    }}
                  >
                    View certificates
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificates && (
        <CertificateCarousel
          certificates={selectedCertificates}
          onClose={() => setSelectedCertificates(null)}
        />
      )}
    </section>
  );
};