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
    </>
  );
};
