import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BLOG_URL, CONTACT_URL } from "@/lib/constants";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold mb-16">About</h1>

      {/* Career */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Career</h2>
        <Card>
          <CardContent className="p-8 text-lg leading-relaxed">
            <p className="mb-4">
              여기에 경력 정보를 작성해주세요. (예: 어떤 회사에서 어떤 역할을
              했는지, 주요 성과 등)
            </p>
            <p>
              저는 [회사명]에서 [기간] 동안 [직책]으로 근무하며 [주요 업무 및
              성과]를 달성했습니다. [다른 경력]
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 hover:underline">
                <a href={`mailto:${CONTACT_URL.email}`}>{CONTACT_URL.email}</a>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 hover:underline">
                <a
                  href={CONTACT_URL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_URL.github}
                </a>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 hover:underline">
                <a
                  href={CONTACT_URL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_URL.linkedin}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <Card>
            <CardHeader>
              <CardTitle>Velog</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 hover:underline">
                <a
                  href={BLOG_URL.velog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BLOG_URL.velog}
                </a>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Naver Blog</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 hover:underline">
                <a
                  href={BLOG_URL.naver}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BLOG_URL.naver}
                </a>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Brunch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-600 hover:underline">
                <a
                  href={BLOG_URL.brunch}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BLOG_URL.brunch}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default About;
