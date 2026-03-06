"use client";

import { useState } from "react";
import styles from "./service.module.css";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqInner}>
        <div className={styles.faqHeader}>
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className={styles.faqList}>
          {items.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <svg
                  className={`${styles.faqChevron} ${openIndex === i ? styles.faqChevronOpen : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className={`${styles.faqAnswer} ${openIndex === i ? styles.faqAnswerOpen : ""}`}>
                <p className={styles.faqAnswerText}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
