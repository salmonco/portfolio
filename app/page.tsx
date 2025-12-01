import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BLOG_URL, VELOG_USERNAME } from "@/data/contact";
import { HOME_DATA } from "@/data/home";
import { getVelogPosts } from "@/velog/getVelogPosts";
import { truncateDescription } from "@/velog/truncateDescription";
import { VelogPost } from "@/velog/types";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const posts: VelogPost[] = await getVelogPosts(VELOG_USERNAME);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Branding One-message */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">{HOME_DATA.hero.title}</h1>
        <p className="text-xl text-gray-700">{HOME_DATA.hero.description}</p>
      </section>

      {/* Representative Startup Projects */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Main Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOME_DATA.mainProjects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
              <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest posts (velog API integration) */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          최신 글 (Velog)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.id}
                href={`${BLOG_URL.velog}/${post.url_slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="h-full flex flex-col">
                  {post.thumbnail && (
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover rounded-t-lg mb-4"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {truncateDescription(post.shortDescription)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="text-gray-500 text-xs">
                      {new Date(post.released_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              최신 Velog 글을 불러오지 못했습니다. 사용자 이름 확인 또는
              네트워크 오류를 확인하세요.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
