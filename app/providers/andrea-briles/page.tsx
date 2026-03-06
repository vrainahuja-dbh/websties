import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "Andrea Briles, PA-C — Physician Assistant | Asbery & Associates",
  description:
    "Andrea Briles, PA-C is a certified physician assistant providing expert gynecologic care at Asbery & Associates in Southern Illinois.",
};

const credentials = [
  "PA-C",
  "Certified Physician Assistant & Surgical Assistant",
  "University of Alabama at Birmingham, 1995",
  "Women\u2019s Health & Family Practice",
];

const highlights = [
  {
    icon: "\u{1F3E5}",
    title: "Extensive Surgical Background",
    desc: "With 17 years of hospital experience beginning as a Surgical Assistant, Andrea brings deep surgical knowledge \u2014 from Cardio-Thoracic to Vascular Surgery \u2014 to her patient care.",
  },
  {
    icon: "\u{1F49C}",
    title: "Family Practice & Women\u2019s Health",
    desc: "Andrea\u2019s family practice background combined with her women\u2019s health expertise allows her to take a whole-patient approach to gynecologic care.",
  },
  {
    icon: "\u{1F91D}",
    title: "Part of the Team Since 2012",
    desc: "Andrea joined Asbery & Associates in September 2012 and works closely with the physicians to ensure continuity and seamless coordination of care.",
  },
  {
    icon: "\u{1F4CD}",
    title: "Accessible Care",
    desc: "Helping expand access to quality gynecologic services for women throughout Southern Illinois.",
  },
];

export default function AndreaBrilesPage() {
  return (
    <main className={styles.providerPage}>
      <section className={styles.providerHero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImage}>
            <Image
              src="/providers/Andrea Briles.jpg"
              alt="Andrea Briles, PA-C"
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
              Andrea Briles, PA-C
            </h1>
            <p className={styles.heroTitle}>
              Physician Assistant
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
            Expert Care, Personal Touch
          </h2>
          <div className={styles.bioText}>
            <p>
              Andrea Briles attended The University of Alabama at Birmingham,
              graduating in 1995 as a Certified Physician&apos;s Assistant and
              Surgical Assistant. She began her 17-year career in the hospital
              setting as a Surgical Assistant, spending 3 years in
              Cardio-Thoracic Surgeries before moving on to Vascular Surgery
              for the next 4 years.
            </p>
            <p>
              Andrea transitioned to the medical office setting as a
              Physician&apos;s Assistant in 2005. She joined Asbery &amp;
              Associates in September 2012 and offers our patients a family
              practice background in conjunction with Women&apos;s Health.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Patients Choose Andrea
            </p>
            <h2
              className="section-title"
              style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}
            >
              Dedicated to Your Well-Being
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
          Ready to Schedule with Andrea?
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
