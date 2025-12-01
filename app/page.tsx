import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BLOG_URL } from "@/data/contact";
import { HOME_DATA } from "@/data/home";
import { getVelogPosts } from "@/velog/getVelogPosts";
import { truncateDescription } from "@/velog/truncateDescription";
import { VelogPost } from "@/velog/types";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const velogUsername = "salmonco";
  const posts: VelogPost[] = await getVelogPosts(velogUsername);

  return (
    <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-6xl">
      {/* Hero Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
          {HOME_DATA.hero.title}
        </h1>
        {HOME_DATA.hero.slogan && (
          <p className="text-sm sm:text-base lg:text-lg font-light text-muted-foreground mb-4">
            {HOME_DATA.hero.slogan}
          </p>
        )}
        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
          {HOME_DATA.hero.description}
        </p>
      </section>

      {/* Main Projects */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
          Main Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {HOME_DATA.mainProjects.map((project) => (
            <Link key={project.id} href={`/projects#project-${project.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Velog Posts */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
          최신 글 (Velog)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.id}
                href={`${BLOG_URL.velog}/${post.url_slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  {post.thumbnail && (
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <CardHeader className="flex-1">
                    <CardTitle className="text-base sm:text-lg line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm line-clamp-3">
                      {truncateDescription(post.shortDescription)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-xs">
                      {new Date(post.released_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground text-sm">
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
