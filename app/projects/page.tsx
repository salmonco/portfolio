"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROJECT_DATA } from "@/data/projects";
import { useEffect, useState } from "react";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#project-", "");
      setTimeout(() => {
        setExpandedProjects({ [Number(id)]: true });
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 0);
    }
  }, []);

  const toggleProject = (id: number) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFaq = (key: string) => {
    setExpandedFaqs((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl font-bold mb-16">Projects</h1>

      {/* Startup Projects */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Startup Projects
        </h2>
        <div className="space-y-12">
          {PROJECT_DATA.startup.map((project) => (
            <Card key={project.id} id={`project-${project.id}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      {project.period.start} ~ {project.period.end || "진행중"}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === "MVP 개발 완료"
                        ? "bg-blue-100 text-blue-800"
                        : project.status === "PMF 검증 완료"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-3 mt-2">
                  {project.links.web && (
                    <a
                      href={project.links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      🌐 Web
                    </a>
                  )}
                  {project.links.ios && (
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      📱 iOS
                    </a>
                  )}
                  {project.links.android && (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      🤖 Android
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      💻 GitHub
                    </a>
                  )}
                </div>
                <CardDescription className="text-base mt-2">
                  {project.summary}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => toggleProject(project.id)}
                  className="text-blue-600 hover:underline mb-4"
                >
                  {expandedProjects[project.id] ? "▼ 접기" : "▶ 자세히 보기"}
                </button>

                {expandedProjects[project.id] && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">1. 목적</h3>
                      <p>{project.purpose}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">2. 배경</h3>
                      <p>{project.background}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        3. 가치제안
                      </h3>
                      <ol className="list-decimal list-inside space-y-1">
                        {project.valueProposition.map((value, idx) => (
                          <li key={idx}>{value}</li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">4. 원칙</h3>
                      <ol className="list-decimal list-inside space-y-1">
                        {project.principles.map((principle, idx) => (
                          <li key={idx}>{principle}</li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">5. 목표</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {project.goals.map((goal, idx) => (
                          <li key={idx}>{goal}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        6. 주요 지표
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border p-2">지표</th>
                              <th className="border p-2">목표</th>
                              <th className="border p-2">선정 근거</th>
                              <th className="border p-2">측정 방법</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.metrics.map((m, idx) => (
                              <tr key={idx}>
                                <td className="border p-2">{m.metric}</td>
                                <td className="border p-2">{m.target}</td>
                                <td className="border p-2">{m.reason}</td>
                                <td className="border p-2">{m.method}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">7. 로드맵</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border p-2">단계</th>
                              <th className="border p-2">내용</th>
                              <th className="border p-2">ETA</th>
                              <th className="border p-2">상태</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.roadmap.map((r, idx) => (
                              <tr key={idx}>
                                <td className="border p-2">{r.stage}</td>
                                <td className="border p-2">{r.content}</td>
                                <td className="border p-2">{r.eta}</td>
                                <td className="border p-2">{r.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">8. FAQ</h3>
                      <div className="space-y-2">
                        {project.faq.map((item, idx) => {
                          const faqKey = `${project.id}-${idx}`;
                          return (
                            <div key={idx} className="border rounded p-3">
                              <button
                                onClick={() => toggleFaq(faqKey)}
                                className="w-full text-left font-semibold flex justify-between items-center"
                              >
                                <span>Q. {item.question}</span>
                                <span>{expandedFaqs[faqKey] ? "▼" : "▶"}</span>
                              </button>
                              {expandedFaqs[faqKey] && (
                                <p className="text-gray-700 mt-2">
                                  A. {item.answer}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Side Projects */}
      <section className="w-full max-w-4xl mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Side Projects
        </h2>
        <div className="space-y-8">
          {PROJECT_DATA.side.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      {project.period.start} ~ {project.period.end || "진행중"}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === "진행중"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-3 mt-2">
                  {project.links.web && (
                    <a
                      href={project.links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      🌐 Web
                    </a>
                  )}
                  {project.links.ios && (
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      📱 iOS
                    </a>
                  )}
                  {project.links.android && (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      🤖 Android
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      💻 GitHub
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-1">
                  <strong className="font-semibold">목적:</strong>{" "}
                  {project.purpose}
                </p>
                <p className="mb-1">
                  <strong className="font-semibold">사용 기술:</strong>{" "}
                  {project.tech}
                </p>
                <p className="mb-1">
                  <strong className="font-semibold">역할:</strong>{" "}
                  {project.role}
                </p>
                <p className="mb-1">
                  <strong className="font-semibold">주요 기능:</strong>{" "}
                  {project.features}
                </p>
                <p className="mb-1">
                  <strong className="font-semibold">결과 / 배운 점:</strong>{" "}
                  {project.result}
                </p>
              </CardContent>
              <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECT_DATA.openSource.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex gap-3 mt-2">
                  {project.links.web && (
                    <a
                      href={project.links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      🌐 Web
                    </a>
                  )}
                  {project.links.ios && (
                    <a
                      href={project.links.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      📱 iOS
                    </a>
                  )}
                  {project.links.android && (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      🤖 Android
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      💻 GitHub
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>{/* Optional: Add links or actions */}</CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
