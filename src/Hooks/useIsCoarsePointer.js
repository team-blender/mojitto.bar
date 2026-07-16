import { useEffect, useState } from "react";

const QUERY = "(pointer: coarse)";

/**
 * 터치 기기 여부.
 *
 * 원본은 react-device-detect(UA 문자열 추측)를 썼으나, 여기서 필요한 판단은
 * "정밀 포인터가 없는 기기인가"(→ 커스텀 커서 숨김·hover 효과 비활성)이므로
 * pointer 미디어쿼리가 의미상 정확하고 의존성도 필요 없다.
 * 아이패드처럼 UA로는 구분이 애매한 기기도 올바르게 잡힌다.
 */
const useIsCoarsePointer = () => {
  const [isCoarse, setIsCoarse] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = (e) => setIsCoarse(e.matches);
    mql.addEventListener("change", onChange);
    setIsCoarse(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isCoarse;
};

export default useIsCoarsePointer;
