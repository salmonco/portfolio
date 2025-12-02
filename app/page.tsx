import { TrackableLink } from "@/components/TrackableLink";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BLOG_URL } from "@/data/contact";
import { HOME_DATA } from "@/data/home";
import { getVelogPosts } from "@/velog/getVelogPosts";
import { VelogPost } from "@/velog/types";

const Home = async () => {
  const velogUsername = "salmonco";
  const posts: VelogPost[] = await getVelogPosts(velogUsername);

  return (
    <main className="container mx-auto px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-20 max-w-4xl">
      {/* Hero Section */}
      <section className="mb-16 sm:mb-20 lg:mb-24">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 leading-relaxed">
          {HOME_DATA.hero.title}
        </h1>
        {HOME_DATA.hero.slogan && (
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
            {HOME_DATA.hero.slogan}
          </p>
        )}
        <p className="text-xs sm:text-sm text-muted-foreground leading-loose">
          {HOME_DATA.hero.description}
        </p>
      </section>

      {/* Main Projects */}
      <section className="mb-16 sm:mb-20 lg:mb-24">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Main Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {HOME_DATA.mainProjects.map((project) => (
            <TrackableLink
              key={project.id}
              href={`/projects#project-${project.id}`}
              eventName="main_project_card_click"
              eventProperties={{
                project_id: project.id,
                project_title: project.title,
              }}
            >
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
            </TrackableLink>
          ))}
        </div>
      </section>

      {/* Latest Velog Posts */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          최신 글 (Velog)
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id}>
                <TrackableLink
                  href={`${BLOG_URL.velog}/${post.url_slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="velog_post_click"
                  eventProperties={{
                    post_id: post.id,
                    post_title: post.title,
                  }}
                  className="text-sm sm:text-base hover:underline"
                >
                  {post.title}
                </TrackableLink>
              </li>
            ))
          ) : (
            <p className="text-center text-muted-foreground text-sm">
              최신 Velog 글을 불러오지 못했습니다. 사용자 이름 확인 또는
              네트워크 오류를 확인하세요.
            </p>
          )}
        </ul>
      </section>
    </main>
  );
};

export default Home;
