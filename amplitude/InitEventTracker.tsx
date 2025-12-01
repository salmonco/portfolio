"use client";

import { initAmplitude } from "@/amplitude/initAmplitude";
import { useEffect } from "react";

/**
 * 이벤트 추적 초기화
 */
export const InitEventTracker = () => {
  useEffect(() => {
    initAmplitude();
  }, []);

  return null;
};
