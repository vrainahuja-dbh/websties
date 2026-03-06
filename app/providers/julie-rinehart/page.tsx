import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "Julie Rinehart, CNM, CNP — Certified Nurse-Midwife & Nurse Practitioner | Asbery & Associates",
  description:
    "Julie Rinehart, CNM, CNP is a certified nurse-midwife and nurse practitioner offering holistic women's health services at Asbery & Associates.",
};

const credentials = [
  "CNM, CNP",
  "Georgetown University, M.S. 2017",
  "Board Certified 2018",
  "24 Years Nursing Experience",
];

const highlights = [
  {
    icon: "\u{1F3E5}",
    title: "24 Years in Nursing",
    desc: "With 24 years of nursing experience \u2014 15 dedicated to Women\u2019s Health \u2014 Julie brings deep clinical knowledge to every patient interaction.",
  },
  {
    icon: "\u{1F476}",
    title: "Comprehensive OB Expertise",
    desc: "Experienced in antepartum, intrapartum, and postpartum care, surgical first-assist for cesarean sections, natural birthing methods, and breastfeeding support.",
  },
  {
    icon: "\u{1F393}",
    title: "Dual Certification",
    desc: "Julie holds a Master\u2019s of Science from Georgetown University with dual certification as a Nurse-Midwife and Nurse Practitioner, board certified since 2018.",
  },
  {
    icon: "\u{1F33F}",
    title: "Wide Variety of Services",
    desc: "At Asbery & Associates, Julie offers a wide variety of services in Women\u2019s Health and OB-GYN in the medical office setting.",
  },
];

export default function JulieRinehartPage() {
  return (
    <main className={styles.providerPage}>
      <section className={styles.providerHero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImage}>
            <Image
              src="/providers/Julie Rinehart.jpg"
              alt="Julie Rinehart, CNM, CNP"
              width={540}
              height={675}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
          <div className={styles.heroContent}>
            <Link href="/providers" className={styles.backLink}>
              &larr; All Providers
            </Link>
            <h1 className={styles.heroName}>
              Julie Rinehart, CNM, CNP
            </h1>
            <p className={styles.heroTitle}>
              Certified Nurse-Midwife &amp; Nurse Practitioner
            </p>
            <div className={styles.credentials}>
              {credentials.map((cred) => (
                <span key={cred} className={styles.credTag}>
                  {cred}
                </span>
              ))}
            </div>
            <Link href="/request-appointment" className="btn-plum">
              Request an Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.bioSection}>
        <div className={styles.bioInner}>
          <p className="section-label">Background</p>
          <h2 className="section-title">
            Holistic Care for Every Stage
          </h2>
          <div className={styles.bioText}>
            <p>
              Julie Rinehart graduated from Georgetown University in Washington,
              DC with a Master&apos;s of Science in the Certified Nurse Midwife
              and Nurse Practitioner dual degree program in December 2017 and
              became board certified in 2018.
            </p>
            <p>
              Julie has 24 years of experience in nursing, with 15 of those
              years dedicated to Women&apos;s Health &mdash; including management
              of antepartum, intrapartum, and postpartum patient care, surgical
              first-assist for cesarean sections, natural birthing methods, and
              breastfeeding support. She is beginning her career with Asbery
              &amp; Associates in the medical office setting, where she offers a
              wide variety of services in Women&apos;s Health and OB-GYN.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Patients Choose Julie
            </p>
            <h2
              className="section-title"
              style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}
            >
              Compassionate, Whole-Person Care
            </h2>
          </div>
          <div className={styles.highlightsGrid}>
            {highlights.map((item) => (
              <div key={item.title} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{item.icon}</div>
                <h3 className={styles.highlightTitle}>{item.title}</h3>
                <p className={styles.highlightDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          Ready to Schedule with Julie?
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "16px auto 0", textAlign: "center" }}
        >
          New and returning patients welcome. Most insurance accepted. No
          referral required for most services.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/request-appointment" className="btn-plum">
            Request an Appointment
          </Link>
          <Link href="/#contact" className="btn-sage">
            Call Our Office
          </Link>
        </div>
      </section>
    </main>
  );
}
