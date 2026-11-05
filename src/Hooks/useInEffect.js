import { useEffect, useState } from "react";
import { isInEffect } from "../Assets/Data/policySchedule";

// setTimeout 이 받는 가장 긴 지연(약 24.8일). 더 길면 브라우저가 곧바로 불러 버린다.
const MAX_TIMEOUT_MS = 2147483647;

// 시행 순간이 지났는지. 쪽을 열어 둔 채 그 순간을 넘겨도 바로 바뀌고,
// 폰이 잠들었다 깨어나 타이머가 늦어진 경우에도 다시 보이는 때(visibilitychange·focus)에 맞춘다.
export default function useInEffect(effectiveAt) {
  const [inEffect, setInEffect] = useState(() => isInEffect(effectiveAt));

  useEffect(() => {
    if (inEffect) return undefined;
    let timer;
    const check = () => {
      window.clearTimeout(timer);
      if (isInEffect(effectiveAt)) {
        setInEffect(true);
        return;
      }
      const wait = Math.min(effectiveAt - Date.now() + 50, MAX_TIMEOUT_MS);
      timer = window.setTimeout(check, wait);
    };
    check();
    document.addEventListener("visibilitychange", check);
    window.addEventListener("focus", check);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", check);
      window.removeEventListener("focus", check);
    };
  }, [effectiveAt, inEffect]);

  return inEffect;
}
