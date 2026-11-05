// 새 개인정보처리방침·이용약관(2026-11-14 판)이 시행되는 순간.
//
// 한국 시각 0시를 시간대 오프셋까지 적어 한 순간으로 고정한다. 그래서 보는 사람의 기기가 어느 시간대에
// 있든 같은 순간에 바뀐다. new Date("2026-11-14") 는 UTC 자정(한국 오전 9시)이라 쓰지 않는다.
// 정적 쪽 /terms/ 의 공고 상자도 같은 값으로 숨는다(public/terms/index.html 맨 아래 스크립트).
export const POLICY_2026_11_14_EFFECTIVE_AT = Date.parse("2026-11-14T00:00:00+09:00");

export function isInEffect(effectiveAt, now = Date.now()) {
  return now >= effectiveAt;
}
