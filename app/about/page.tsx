import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CAREER_DATA } from "@/data/career";
import { BLOG_URL, CONTACT_URL } from "@/data/contact";

const About = () => {
  return (
    <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-6xl">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center">
        About
      </h1>

      {/* Career */}
      <section className="w-full mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
          Career
        </h2>
        <div className="space-y-6">
          {CAREER_DATA.map((career) => (
            <Card key={career.id}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl sm:text-2xl">
                    {career.company}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {career.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {career.position} · {career.team}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm sm:text-base">{career.description}</p>

                {/* Projects */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-base sm:text-lg">
                    주요 프로젝트
                  </h3>
                  {career.projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="pl-4 border-l-2 border-muted space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="font-semibold text-sm sm:text-base">
                          {project.title}
                        </h4>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      {project.tasks && (
                        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                          {project.tasks.map((task, taskIdx) => (
                            <li key={taskIdx}>{task}</li>
                          ))}
                        </ul>
                      )}
                      {project.achievements && (
                        <div className="mt-2 p-2 bg-primary/5 rounded border-l-2 border-primary">
                          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                            {project.achievements.map((achievement, achIdx) => (
                              <li key={achIdx} className="font-medium">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Activities */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    기술 공유 활동
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                    {career.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="w-full mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
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
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
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
