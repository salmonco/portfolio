import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold mb-16">Projects</h1>

      {/* Startup Projects */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Startup Projects
        </h2>
        <div className="space-y-12">
          {/* Example Startup Project 1 */}
          <div className="border p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Startup Project Title 1</h3>
            <p className="mb-2">
              <strong className="font-semibold">배경:</strong> 프로젝트를
              시작하게 된 배경 설명.
            </p>
            <p className="mb-2">
              <strong className="font-semibold">문제 정의:</strong> 해결하고자
              했던 문제점.
            </p>
            <p className="mb-2">
              <strong className="font-semibold">가설:</strong> 문제 해결을 위한
              가설.
            </p>
            <p className="mb-2">
              <strong className="font-semibold">MVP:</strong> 최소 기능 제품
              설명.
            </p>
            <p className="mb-2">
              <strong className="font-semibold">지표 / 결과:</strong> 프로젝트의
              주요 지표 및 결과.
            </p>
            <p className="mb-2">
              <strong className="font-semibold">학습:</strong> 프로젝트를 통해
              배운 점.
            </p>
            <p className="mb-2">
              <strong className="font-semibold">피드백:</strong> 사용자 및 시장
              피드백.
            </p>
          </div>
          {/* Example Startup Project 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Startup Project Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <strong className="font-semibold">배경:</strong> 프로젝트를
                시작하게 된 배경 설명.
              </p>
              <p className="mb-2">
                <strong className="font-semibold">문제 정의:</strong> 해결하고자
                했던 문제점.
              </p>
              <p className="mb-2">
                <strong className="font-semibold">가설:</strong> 문제 해결을
                위한 가설.
              </p>
              <p className="mb-2">
                <strong className="font-semibold">MVP:</strong> 최소 기능 제품
                설명.
              </p>
              <p className="mb-2">
                <strong className="font-semibold">지표 / 결과:</strong>{" "}
                프로젝트의 주요 지표 및 결과.
              </p>
              <p className="mb-2">
                <strong className="font-semibold">학습:</strong> 프로젝트를 통해
                배운 점.
              </p>
              <p className="mb-2">
                <strong className="font-semibold">피드백:</strong> 사용자 및
                시장 피드백.
              </p>
            </CardContent>
            <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
          </Card>
        </div>
      </section>

      {/* Side Projects */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Side Projects
        </h2>
        <div className="space-y-8">
          {/* Example Side Project 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Side Project Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-1">
                <strong className="font-semibold">목적:</strong> 프로젝트의
                목적.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">사용 기술:</strong> 사용된
                기술 스택.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">역할:</strong> 프로젝트 내에서
                본인의 역할.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">주요 기능:</strong> 핵심 기능
                설명.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">결과 / 배운 점:</strong>{" "}
                프로젝트 결과 및 학습 내용.
              </p>
            </CardContent>
            <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
          </Card>
          {/* Example Side Project 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Side Project Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-1">
                <strong className="font-semibold">목적:</strong> 프로젝트의
                목적.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">사용 기술:</strong> 사용된
                기술 스택.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">역할:</strong> 프로젝트 내에서
                본인의 역할.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">주요 기능:</strong> 핵심 기능
                설명.
              </p>
              <p className="mb-1">
                <strong className="font-semibold">결과 / 배운 점:</strong>{" "}
                프로젝트 결과 및 학습 내용.
              </p>
            </CardContent>
            <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
          </Card>
        </div>
      </section>

      {/* Open Source */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Open Source Project 1 (Self-made) */}
          <Card>
            <CardHeader>
              <CardTitle>My Library Name</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                직접 만든 라이브러리에 대한 설명.
              </CardDescription>
              <p className="text-sm text-blue-600 mt-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub Link
                </a>
              </p>
            </CardContent>
            <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
          </Card>
          {/* Example Open Source Project 2 (Contributed) */}
          <Card>
            <CardHeader>
              <CardTitle>Contributed Project Name</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>기여한 오픈소스 프로젝트 설명.</CardDescription>
              <p className="text-sm text-blue-600 mt-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Contribution Link
                </a>
              </p>
            </CardContent>
            <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Projects;
