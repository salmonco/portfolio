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
                    <span className="truncate">
                      {item.label} - {item.description}
                    </span>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      {item.label} - {item.description}
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
                    <span className="truncate">
                      {item.label} - {item.description}
                    </span>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                      {item.label} - {item.description}
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
          {/* Y축 타임라인 - 명확하게 보이도록 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-600" />

          {/* 연도 표시 - 왼쪽에 배치 */}
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
                className="absolute left-0 z-20"
                style={{ top: `${topPercent}%` }}
              >
                <div className="text-xs font-bold text-primary">{year}</div>
              </div>
            );
          })}

          <div className="relative" style={{ minHeight: "600px" }}>
            {/* 각 항목을 좌우 배치 - 겹침 방지 */}
            {HISTORY_DATA.map((item, index) => {
              const startOffset = getMonthsDiff(TIMELINE_START, item.startDate);
              const duration = getMonthsDiff(item.startDate, item.endDate) + 1;
              const topPercent = (startOffset / totalMonths) * 100;
              const heightPercent = (duration / totalMonths) * 100;
              const endOffset = startOffset + duration;

              // 왼쪽과 오른쪽 레인에서 겹치는지 확인
              let leftOverlap = false;
              let rightOverlap = false;

              for (let i = 0; i < index; i++) {
                const prevItem = HISTORY_DATA[i];
                const prevStart = getMonthsDiff(
                  TIMELINE_START,
                  prevItem.startDate
                );
                const prevDuration =
                  getMonthsDiff(prevItem.startDate, prevItem.endDate) + 1;
                const prevEnd = prevStart + prevDuration;
                const prevIsLeft = i % 2 === 0;

                // 겹치는지 확인
                const overlaps = !(
                  endOffset <= prevStart || startOffset >= prevEnd
                );

                if (overlaps) {
                  if (prevIsLeft) {
                    leftOverlap = true;
                  } else {
                    rightOverlap = true;
                  }
                }
              }

              // 겹치지 않는 쪽 선택
              let isLeft;
              if (!leftOverlap && !rightOverlap) {
                isLeft = index % 2 === 0; // 기본: 번갈아 배치
              } else if (!leftOverlap) {
                isLeft = true;
              } else if (!rightOverlap) {
                isLeft = false;
              } else {
                isLeft = index % 2 === 0; // 둘 다 겹치면 기본값
              }

              // 둘 다 겹치면 카드를 상단 또는 하단에 배치
              // 우학동(id=4)은 항상 하단에 배치
              const verticalAlign =
                item.id === 4
                  ? "justify-end pb-2"
                  : leftOverlap && rightOverlap
                  ? index % 4 < 2
                    ? "justify-start pt-2"
                    : "justify-end pb-2"
                  : "justify-center";

              return (
                <div
                  key={item.id}
                  className="absolute"
                  style={{
                    left: isLeft ? "0" : "50%",
                    right: isLeft ? "50%" : "0",
                    top: `${topPercent}%`,
                    height: `${heightPercent}%`,
                  }}
                >
                  <div
                    className={`relative h-full flex flex-col ${verticalAlign} ${
                      isLeft ? "items-end pr-3" : "items-start pl-3"
                    }`}
                  >
                    {/* 세로 색상 바 - 기간 표시 */}
                    <div
                      className={`absolute ${
                        isLeft
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      } top-0 bottom-0 w-1 rounded-full`}
                      style={{ backgroundColor: item.color }}
                    />

                    {/* 시작점 */}
                    <div
                      className={`absolute ${
                        isLeft
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      } top-0 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-background z-10`}
                      style={{ backgroundColor: item.color }}
                    />

                    {/* 종료점 */}
                    <div
                      className={`absolute ${
                        isLeft
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      } bottom-0 translate-y-1/2 w-3 h-3 rounded-full border-2 border-background z-10`}
                      style={{ backgroundColor: item.color }}
                    />

                    {/* rowLabel */}
                    <div className="text-[9px] text-muted-foreground font-medium mb-1">
                      {item.rowLabel}
                    </div>

                    {/* 내용 카드 */}
                    <div className="max-w-[120px]">
                      {item.link ? (
                        <Link href={item.link}>
                          <div className="bg-background border rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-xs font-medium leading-tight mb-1">
                              {item.label}
                            </div>
                            <div className="text-[10px] text-muted-foreground leading-tight">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="bg-background border rounded-lg p-2 shadow-sm">
                          <div className="text-xs font-medium leading-tight mb-1">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-muted-foreground leading-tight">
                            {item.description}
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
