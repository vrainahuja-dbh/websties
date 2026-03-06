"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MeetTeam.module.css";

const team = [
  {
    slug: "dr-dudley",
    name: "Jo Ann Dudley, M.D.",
    title: "Board-Certified OB-GYN Physician",
    image: "/providers/JoAnn Dudley.jpg",
  },
  {
    slug: "andrea-briles",
    name: "Andrea Briles, PA-C",
    title: "Physician Assistant",
    image: "/providers/Andrea Briles.jpg",
  },
  {
    slug: "julie-rinehart",
    name: "Julie Rinehart, CNM, CNP",
    title: "Certified Nurse-Midwife",
    image: "/providers/Julie Rinehart.jpg",
  },
  {
    slug: "melissa-klausman",
    name: "Melissa Klausman, WHNP-BC",
    title: "Women\u2019s Health NP & Midwife",
    image: "/providers/Klausman.jpg",
  },
  {
    slug: "cynthia-phillips",
    name: "Cynthia Phillips, FNP",
    title: "Family Nurse Practitioner",
    image: "/providers/Phillips.jpg",
  },
  {
    slug: "paul-havrilka",
    name: "Paul Havrilka, FNP",
    title: "Family Nurse Practitioner",
    image: "/providers/Paul Havrilka.jpg",
  },
];

const PAGE_COUNT = 3;

export default function MeetTeam() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const scrollRatio = el.scrollLeft / (el.scrollWidth - el.clientWidth || 1);
    setActiveDot(Math.round(scrollRatio * (PAGE_COUNT - 1)));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (maxScroll / (PAGE_COUNT - 1)) * index, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.tag}>Our Team</div>
        <h2 className={styles.title}>Meet Our Providers</h2>
        <p className={styles.subtitle}>
          Expert gynecologic care from specialists who know your name, your
          history, and your goals.
        </p>
      </div>

      <div className={styles.track} ref={trackRef}>
        {team.map((member) => (
          <Link
            key={member.slug}
            href={`/providers/${member.slug}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <div className={styles.nameOverlay}>
                <div className={styles.overlayName}>{member.name}</div>
                <div className={styles.overlayTitle}>{member.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.dots}>
        {Array.from({ length: PAGE_COUNT }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === activeDot ? styles.dotActive : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Scroll to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
