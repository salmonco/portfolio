"use client";

import { HISTORY_DATA, TIMELINE_END, TIMELINE_START } from "@/data/history";
import Link from "next/link";

const getMonthsDiff = (start: string, end: string) => {
  const [startYear, startMonth] = start.split("-").map(Number);
  const [endYear, endMonth] = end.split("-").map(Number);
  return (endYear - startYear) * 12 + (endMonth - startMonth);
};

const getYears = (start: string, end: string) => {
  const [startYear] = start.split("-").map(Number);
  const [endYear] = end.split("-").map(Number);
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};

export const HistoryTimeline = () => {
  const totalMonths = getMonthsDiff(TIMELINE_START, TIMELINE_END) + 1;
  const years = getYears(TIMELINE_START, TIMELINE_END);
  const [startYear, startMonth] = TIMELINE_START.split("-").map(Number);

  return (
    <>
      {/* 데스크톱: 타임라인 뷰 */}
      <div className="hidden md:block">
        {/* X축 연도 레이블 */}
        <div className="flex">
          <div className="w-20"></div>
          <div className="flex-1 relative border-b pb-2 h-8">
            {years.map((year) => {
              const yearStartMonth = year === startYear ? startMonth : 1;
              const monthsFromStart =
                year === startYear
                  ? 0
                  : (year - startYear) * 12 - (startMonth - 1);
              const leftPercent = (monthsFromStart / totalMonths) * 100;

              return (
                <div
                  key={year}
                  className="absolute text-sm font-medium top-0"
                  style={{ left: `${leftPercent}%` }}
                >
                  {year}
                </div>
              );
            })}
          </div>
        </div>

        {/* 활동/프로젝트 행들 */}
        {HISTORY_DATA.map((item) => {
          const startOffset = getMonthsDiff(TIMELINE_START, item.startDate);
          const duration = getMonthsDiff(item.startDate, item.endDate) + 1;
          const leftPercent = (startOffset / totalMonths) * 100;
          const widthPercent = (duration / totalMonths) * 100;

          return (
            <div key={item.id} className="flex items-center">
              <div className="w-20 text-sm text-muted-foreground">
                {item.rowLabel}
              </div>
              <div className="flex-1 relative h-16 border-b flex items-center">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="absolute h-8 rounded flex items-center justify-center text-white text-xs font-medium px-2 group cursor-pointer"
                    style={{
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                      backgroundColor: item.color,
                    }}
                  >
                    <span className="truncate">{item.label}</span>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      {item.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="absolute h-8 rounded flex items-center justify-center text-white text-xs font-medium px-2 group"
                    style={{
                      left: `${leftPercent}%`,
                      width: `${widthPercent}%`,
                      backgroundColor: item.color,
                    }}
                  >
                    <span className="truncate">{item.label}</span>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      {item.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 모바일: 세로 타임라인 */}
      <div className="md:hidden">
        <div className="relative px-4">
          {/* 중앙 타임라인 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {/* 연도 표시 */}
          {years.map((year) => {
            const yearStartMonth = year === startYear ? startMonth : 1;
            const monthsFromStart =
              year === startYear
                ? 0
                : (year - startYear) * 12 - (startMonth - 1);
            const topPercent = (monthsFromStart / totalMonths) * 100;

            return (
              <div
                key={year}
                className="absolute left-1/2 -translate-x-1/2 bg-background px-2 text-xs font-medium text-muted-foreground"
                style={{ top: `${topPercent}%` }}
              >
                {year}
              </div>
            );
          })}

          <div className="relative" style={{ minHeight: "600px" }}>
            {/* 각 항목을 좌우 번갈아 배치 */}
            {HISTORY_DATA.map((item, index) => {
              const startOffset = getMonthsDiff(TIMELINE_START, item.startDate);
              const duration = getMonthsDiff(item.startDate, item.endDate) + 1;
              const topPercent = (startOffset / totalMonths) * 100;
              const heightPercent = (duration / totalMonths) * 100;

              const [startYear, startMonth] = item.startDate.split("-");
              const [endYear, endMonth] = item.endDate.split("-");
              const period = `${startYear}.${startMonth} ~ ${endYear}.${endMonth}`;

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="absolute group"
                  style={{
                    left: isLeft ? "0" : "50%",
                    right: isLeft ? "50%" : "0",
                    top: `${topPercent}%`,
                    height: `${heightPercent}%`,
                  }}
                >
                  <div
                    className={`relative h-full flex items-center ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {/* 연결선 */}
                    <div
                      className={`absolute top-0 bottom-0 w-8 ${
                        isLeft ? "right-0" : "left-0"
                      }`}
                      style={{
                        background: `linear-gradient(to ${
                          isLeft ? "left" : "right"
                        }, ${item.color}00, ${item.color})`,
                      }}
                    />

                    {/* 중앙 점 */}
                    <div
                      className={`absolute ${
                        isLeft ? "right-0" : "left-0"
                      } top-0 w-2.5 h-2.5 rounded-full border-2 border-background z-10`}
                      style={{ backgroundColor: item.color }}
                    />
                    <div
                      className={`absolute ${
                        isLeft ? "right-0" : "left-0"
                      } bottom-0 w-2.5 h-2.5 rounded-full border-2 border-background z-10`}
                      style={{ backgroundColor: item.color }}
                    />

                    {/* 내용 카드 */}
                    <div
                      className={`${isLeft ? "mr-10" : "ml-10"} max-w-[140px]`}
                    >
                      {item.link ? (
                        <Link href={item.link}>
                          <div className="bg-background border rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[10px] text-muted-foreground mb-0.5">
                              {item.rowLabel}
                            </div>
                            <div className="text-xs font-medium mb-1 line-clamp-2">
                              {item.label}
                            </div>
                            <div className="text-[9px] text-muted-foreground">
                              {period}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="bg-background border rounded-lg p-2 shadow-sm">
                          <div className="text-[10px] text-muted-foreground mb-0.5">
                            {item.rowLabel}
                          </div>
                          <div className="text-xs font-medium mb-1 line-clamp-2">
                            {item.label}
                          </div>
                          <div className="text-[9px] text-muted-foreground">
                            {period}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
