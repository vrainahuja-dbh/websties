import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "Cynthia Phillips, FNP — Family Nurse Practitioner | Asbery & Associates",
  description:
    "Cynthia Phillips, FNP is a family nurse practitioner providing compassionate women's wellness care at Asbery & Associates in Southern Illinois.",
};

const credentials = [
  "FNP",
  "Purdue University, M.S. 2017",
  "Board Certified 2018",
  "18 Years Nursing Experience",
];

const highlights = [
  {
    icon: "\u{1F3E5}",
    title: "18 Years of Nursing Experience",
    desc: "Cindy brings 18 years of nursing experience including hospital staff nurse, circulating surgical nurse, and Assistant Director of Surgical Services.",
  },
  {
    icon: "\u{1F52C}",
    title: "Surgical Services Background",
    desc: "Her experience as a circulating surgical nurse and in surgical services leadership gives Cindy a unique perspective on comprehensive patient care.",
  },
  {
    icon: "\u{1F393}",
    title: "Purdue University Graduate",
    desc: "Cindy graduated from Purdue University in 2017 with a Master\u2019s of Science in Nursing, Family Nurse Practitioner, and became board certified in 2018.",
  },
  {
    icon: "\u{1F4CD}",
    title: "Serving Mt. Vernon & Beyond",
    desc: "Cindy joined Asbery & Associates in May 2023 and serves the Mt. Vernon and surrounding areas with a wide variety of Women\u2019s Health Services.",
  },
];

export default function CynthiaPhillipsPage() {
  return (
    <main className={styles.providerPage}>
      <section className={styles.providerHero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImage}>
            <Image
              src="/providers/Phillips.jpg"
              alt="Cynthia Phillips, FNP"
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
              Cynthia Phillips, FNP
            </h1>
            <p className={styles.heroTitle}>
              Family Nurse Practitioner
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
            Compassionate, Patient-Centered Care
          </h2>
          <div className={styles.bioText}>
            <p>
              Cindy Phillips attended Purdue University and graduated in 2017
              with a Master&apos;s of Science in Nursing, Family Nurse
              Practitioner. She became board certified in February 2018.
            </p>
            <p>
              Cindy brings 18 years of nursing experience including hospital
              staff nurse, circulating surgical nurse, and Assistant Director of
              Surgical Services prior to beginning her career as a Nurse
              Practitioner in 2018. She joined Asbery &amp; Associates in
              practice in May 2023 and continues to serve the Mt. Vernon and
              surrounding areas offering a wide variety of Women&apos;s Health
              Services.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Patients Choose Cynthia
            </p>
            <h2
              className="section-title"
              style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}
            >
              Warm, Trusted Care
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
          Ready to Schedule with Cynthia?
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
