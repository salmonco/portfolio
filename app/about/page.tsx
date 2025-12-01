import { CareerCard } from "@/components/about/CareerCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CAREER_DATA } from "@/data/career";
import { BLOG_URL, CONTACT_URL } from "@/data/contact";

const About = () => {
  return (
    <main className="container mx-auto px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-20 max-w-4xl">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-12 sm:mb-16 leading-relaxed">
        About
      </h1>

      {/* Career */}
      <section className="w-full mb-16 sm:mb-20 lg:mb-24">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Career
        </h2>
        <div className="space-y-6">
          {CAREER_DATA.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="w-full mb-16 sm:mb-20 lg:mb-24">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${CONTACT_URL.email}`}
                className="text-primary hover:underline"
              >
                {CONTACT_URL.email}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={CONTACT_URL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub Profile
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={CONTACT_URL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn Profile
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog */}
      <section className="w-full">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          <Card>
            <CardHeader>
              <CardTitle>Velog</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={BLOG_URL.velog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit Blog
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Naver Blog</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={BLOG_URL.naver}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit Blog
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Brunch</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={BLOG_URL.brunch}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit Blog
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default About;
