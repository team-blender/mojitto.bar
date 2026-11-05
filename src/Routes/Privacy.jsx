import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import Cursor from "../Components/Cursor";
import SiteHeader from "../Components/Header";
import Privacy20260716 from "./Privacy20260716";
import useInEffect from "../Hooks/useInEffect";
import { POLICY_2026_11_14_EFFECTIVE_AT } from "../Assets/Data/policySchedule";
import NOTICE from "../Assets/Policy/notice-2026-11-14.json";
import privacyKo from "../Assets/Policy/privacy-2026-11-14.ko.html?raw";
import privacyEn from "../Assets/Policy/privacy-2026-11-14.en.html?raw";

// 라이브 앱(골드 화면·라운지 로그인 화면)이 https://mojitto.bar/#/privacy 로 여는 쪽.
//
// 2026-11-06 공고 ~ 2026-11-13: 맨 위 공고 상자 → 새 방침(2026-11-14 시행) 한·영 → 지금 방침(2026-07-16 판).
// 2026-11-14 0시(한국 시각)부터: 새 방침 한·영만. 바뀌는 순간은 policySchedule.js 한 곳에서 정한다.
// 새 방침 글은 원고에서 만든 조각(src/Assets/Policy)을 그대로 넣는다 — 글을 여기서 고치지 않는다.

const KO_HTML = { __html: privacyKo };
const EN_HTML = { __html: privacyEn };
const MAIL = "mojitto.bar@gmail.com";

const Page = styled.div`
  width: 100%;
  min-width: 0;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6px;
`;

const LinkButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: inherit;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

const JumpButton = styled(LinkButton)`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Notice = styled.aside`
  margin: 4px 0 32px;
  padding: 18px 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  line-height: 1.65;
  word-break: keep-all;
  overflow-wrap: anywhere;
  -webkit-user-select: text;
  user-select: text;
`;

const NoticeTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 8px;
`;

const NoticeText = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.74);
  a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const NoticeLinks = styled.div`
  margin-top: 10px;
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const NoticeEnglish = styled.div`
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`;

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #8ee6c4;
  margin: 0 0 4px;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  margin: 44px 0 24px;
`;

const PolicyArticle = styled.article`
  width: 100%;
  min-width: 0;
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.74);
  word-break: keep-all;
  overflow-wrap: anywhere;
  -webkit-user-select: text;
  user-select: text;

  h1 {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.3;
    color: #fff;
    margin: 8px 0 18px;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4;
    color: #fff;
    margin: 34px 0 12px;
  }
  h3 {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.45;
    color: #fff;
    margin: 26px 0 10px;
  }
  p {
    margin: 10px 0;
  }
  ul,
  ol {
    margin: 10px 0;
    padding-left: 24px;
  }
  ul {
    list-style: disc;
  }
  ul ul {
    list-style: circle;
  }
  ol {
    list-style: decimal;
  }
  li + li {
    margin-top: 6px;
  }
  li > ul,
  li > ol,
  li > p {
    margin-top: 6px;
    margin-bottom: 0;
  }
  strong {
    font-weight: 700;
    color: #fff;
  }
  a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  hr {
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    margin: 32px 0;
  }
  .table-wrap {
    overflow-x: auto;
    margin: 12px 0;
    -webkit-overflow-scrolling: touch;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    line-height: 1.55;
  }
  th,
  td {
    border: 1px solid rgba(255, 255, 255, 0.14);
    padding: 8px 10px;
    text-align: left;
    vertical-align: top;
    min-width: 3em;
  }
  table.cols-3 {
    min-width: 30em;
  }
  table.cols-4,
  table.cols-5,
  table.cols-6 {
    min-width: 42em;
  }
  th {
    color: #fff;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.06);
  }
`;

const OldSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const withMailLink = (text) =>
  text.split(MAIL).flatMap((part, i) =>
    i === 0
      ? [part]
      : [
          <a key={i} href={`mailto:${MAIL}`}>
            {MAIL}
          </a>,
          part,
        ]
  );

const MojitoPrivacy = () => {
  const inEffect = useInEffect(POLICY_2026_11_14_EFFECTIVE_AT);

  useEffect(() => {
    document.title = "개인정보처리방침 | 모지또";
    return () => {
      document.title = "모지또 | Mojitto";
    };
  }, []);

  return (
    <>
      <Cursor />
      <Container>
        <SiteHeader />
        <Page>
          <TopRow>
            <JumpButton type="button" onClick={() => scrollToId("privacy-en")}>
              English
            </JumpButton>
          </TopRow>

          {!inEffect && (
            <Notice aria-labelledby="policy-notice-title" data-policy-notice="">
              <NoticeTitle id="policy-notice-title">11월 14일부터 새 방침이 시행돼요</NoticeTitle>
              <NoticeText>{withMailLink(NOTICE.ko)}</NoticeText>
              <NoticeLinks>
                <a href="/privacy/changes-2026-11-14/">바뀌는 점 — 변경 전·후 비교표</a>
                <LinkButton type="button" onClick={() => scrollToId("privacy-2026-11-14")}>
                  새 방침 전문
                </LinkButton>
                <LinkButton type="button" onClick={() => scrollToId("privacy-2026-07-16")}>
                  지금 방침 전문(2026년 7월 16일 시행)
                </LinkButton>
                <a href="/terms/">이용약관</a>
              </NoticeLinks>
              <NoticeEnglish lang="en">
                <NoticeTitle>The new Privacy Policy takes effect on November 14</NoticeTitle>
                <NoticeText>{withMailLink(NOTICE.en)}</NoticeText>
                <NoticeLinks>
                  <a href="/privacy/changes-2026-11-14/">Comparison table (in Korean)</a>
                  <LinkButton type="button" onClick={() => scrollToId("privacy-en")}>
                    New Privacy Policy in English
                  </LinkButton>
                  <a href="/terms/">Terms of Use</a>
                </NoticeLinks>
              </NoticeEnglish>
            </Notice>
          )}

          {!inEffect && <SectionLabel>새 방침 · 2026년 11월 14일부터 시행</SectionLabel>}
          <PolicyArticle id="privacy-2026-11-14" lang="ko" dangerouslySetInnerHTML={KO_HTML} />

          <Divider />
          {!inEffect && <SectionLabel lang="en">New policy · effective November 14, 2026</SectionLabel>}
          <PolicyArticle id="privacy-en" lang="en" dangerouslySetInnerHTML={EN_HTML} />
        </Page>

        {!inEffect && (
          <OldSection id="privacy-2026-07-16" data-policy-current="">
            <Divider />
            <SectionLabel>지금 시행 중인 방침 · 2026년 7월 16일 ~ 2026년 11월 13일</SectionLabel>
          </OldSection>
        )}
        {!inEffect && <Privacy20260716 />}
      </Container>
    </>
  );
};

export default MojitoPrivacy;
