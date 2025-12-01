import { CareerCard } from "@/components/about/CareerCard";
import { Badge } from "@/components/ui/badge";
import { CAREER_DATA } from "@/data/career";
import { BLOG_URL, CONTACT_URL } from "@/data/contact";
import {
  BookOpen,
  Coffee,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const About = () => {
  return (
    <main className="container mx-auto px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-20 max-w-4xl">
      {/* Career */}
      <section className="w-full mb-16 sm:mb-20 lg:mb-24">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Career
        </h2>
        <div className="space-y-0">
          {CAREER_DATA.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="w-full mb-16 sm:mb-20 lg:mb-24">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Blog
        </h2>
        <div className="flex flex-wrap gap-2">
          <a
            href={BLOG_URL.velog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <Badge variant="outline" className="text-xs py-1 px-2">
              <FileText className="h-3 w-3 mr-1" />
              Velog
            </Badge>
          </a>
          <a
            href={BLOG_URL.naver}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <Badge variant="outline" className="text-xs py-1 px-2">
              <BookOpen className="h-3 w-3 mr-1" />
              Naver Blog
            </Badge>
          </a>
          <a
            href={BLOG_URL.brunch}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <Badge variant="outline" className="text-xs py-1 px-2">
              <Coffee className="h-3 w-3 mr-1" />
              Brunch
            </Badge>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Contact
        </h2>
        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${CONTACT_URL.email}`}
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <Badge variant="outline" className="text-xs py-1 px-2">
              <Mail className="h-3 w-3 mr-1" />
              Email
            </Badge>
          </a>
          <a
            href={CONTACT_URL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <Badge variant="outline" className="text-xs py-1 px-2">
              <Github className="h-3 w-3 mr-1" />
              GitHub
            </Badge>
          </a>
          <a
            href={CONTACT_URL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <Badge variant="outline" className="text-xs py-1 px-2">
              <Linkedin className="h-3 w-3 mr-1" />
              LinkedIn
            </Badge>
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
