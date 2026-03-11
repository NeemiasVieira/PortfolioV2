"use client";

import { useTranslations } from "next-intl";
import { FiClock, FiMapPin, FiMessageSquare, FiUsers } from "react-icons/fi";
import {
  ProblemWrapper,
  ProblemContent,
  ProblemHeader,
  ProblemBadge,
  ProblemTitle,
  ProblemSubtitle,
  ProblemList,
  ProblemItem,
  ProblemIcon,
  ProblemItemText,
  ProblemConclusion,
} from "./style";

export const Problem = () => {
  const t = useTranslations("landingOdonto.problem");
  const problems = [
    { icon: FiClock, text: t("item1") },
    { icon: FiMapPin, text: t("item2") },
    { icon: FiMessageSquare, text: t("item3") },
    { icon: FiUsers, text: t("item4") },
  ];

  const normalizeProblemText = (text: string) => text.replace(/^❌\s*/, "").trim();

  return (
    <ProblemWrapper id="problema">
      <ProblemContent>
        <ProblemHeader>
          <ProblemBadge>{t("badge")}</ProblemBadge>
          <ProblemTitle>{t("title")}</ProblemTitle>
          <ProblemSubtitle>{t("subtitle")}</ProblemSubtitle>
        </ProblemHeader>

        <ProblemList>
          {problems.map(({ icon: Icon, text }) => (
            <ProblemItem key={text}>
              <ProblemIcon>
                <Icon />
              </ProblemIcon>
              <ProblemItemText>{normalizeProblemText(text)}</ProblemItemText>
            </ProblemItem>
          ))}
        </ProblemList>

        <ProblemConclusion>{t("footer")}</ProblemConclusion>
      </ProblemContent>
    </ProblemWrapper>
  );
};
