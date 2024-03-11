"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqData } from "@/constants/faqData";
const FaqAccordion = () => {
  return (
    <Accordion
      variant="bordered"
      selectionMode="multiple"
      itemClasses={{
        title: " font-semibold text-sm md:text-base",
      }}
    >
      {faqData.map((faq) => (
        <AccordionItem
          key={faq.question}
          aria-label={faq.question}
          //   indicator={faq.icon}
          title={faq.question}
          startContent={faq.icon}
          data-aos="zoom-in-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <span className="text-slate-900 dark:text-slate-50 text-sm md:text-base">
            {faq.answer}
          </span>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
