"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  FAQWrapper,
  FAQContent,
  FAQTitle,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQQuestionText,
  FAQIcon,
  FAQAnswer,
} from "./style";

export const FAQ = () => {
  const t = useTranslations("landingOdonto.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
  ];

  return (
    <FAQWrapper id="faq">
      <FAQContent>
        <FAQTitle>{t("title")}</FAQTitle>

        <FAQList>
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <FAQItem key={index} $isOpen={isOpen}>
                <FAQQuestion
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggle(index)}
                >
                  <FAQQuestionText>{item.q}</FAQQuestionText>
                  <FAQIcon $isOpen={isOpen} aria-hidden="true">
                    <FontAwesomeIcon className="icon-plus" icon={faPlus} />
                    <FontAwesomeIcon className="icon-minus" icon={faMinus} />
                  </FAQIcon>
                </FAQQuestion>

                <FAQAnswer id={answerId} role="region" aria-labelledby={questionId} $isOpen={isOpen}>
                  <p>{item.a}</p>
                </FAQAnswer>
              </FAQItem>
            );
          })}
        </FAQList>
      </FAQContent>
    </FAQWrapper>
  );
};
