import { HistoryTimeline } from "@/components/HistoryTimeline";
import { TrackableLink } from "@/components/TrackableLink";
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
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
            {HOME_DATA.hero.slogan}
          </p>
        )}
        <p className="text-xs sm:text-sm text-muted-foreground leading-loose">
          {HOME_DATA.hero.description}
        </p>
      </section>

      {/* History Timeline */}
      <section className="mb-16 sm:mb-20 lg:mb-24">
        <HistoryTimeline />
      </section>

      {/* Main Projects */}
      <section className="mb-16 sm:mb-20 lg:mb-24">
        <h2 className="text-lg sm:text-xl font-semibold mb-8 border-b pb-2">
          Main Projects
        </h2>
        <div className="space-y-4">
          {HOME_DATA.mainProjects.map((project, index) => (
            <div
              key={project.id}
              className="flex gap-4 items-start hover:bg-muted/50 p-3 rounded-lg transition-colors group"
            >
              <span className="text-2xl font-bold text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
              <TrackableLink
                href={`/projects#project-${project.id}`}
                eventName="main_project_more_click"
                eventProperties={{
                  project_id: project.id,
                  project_title: project.title,
                }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors shrink-0"
              >
                More →
              </TrackableLink>
            </div>
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
