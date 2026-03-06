import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "Paul Havrilka, FNP — Family Nurse Practitioner | Asbery & Associates",
  description:
    "Paul Havrilka, FNP is a family nurse practitioner providing dedicated, patient-centered gynecologic and wellness care at Asbery & Associates.",
};

const credentials = [
  "FNP",
  "Frontier Nursing University, M.S. 2013",
  "Board Certified 2013",
  "Family Medicine & Women\u2019s Health",
];

const highlights = [
  {
    icon: "\u{1F3E5}",
    title: "Diverse Clinical Experience",
    desc: "Paul\u2019s career spans medical office practice, hospital and emergency department settings, and running his own solo practice \u2014 bringing well-rounded expertise to patient care.",
  },
  {
    icon: "\u{1F393}",
    title: "Frontier Nursing University",
    desc: "Paul graduated from Frontier Nursing University in 2013 with a Master\u2019s of Science in Nursing and became board certified that same year.",
  },
  {
    icon: "\u{1F4CD}",
    title: "Two Locations",
    desc: "Paul serves patients at both the McLeansboro and Mt. Vernon Family Medicine locations, expanding access to care across the region.",
  },
  {
    icon: "\u{1F91D}",
    title: "Part of the Team Since 2019",
    desc: "Paul joined Asbery & Associates in 2019 and offers a wide variety of Family Medicine and Women\u2019s Health Services.",
  },
];

export default function PaulHavrilkaPage() {
  return (
    <main className={styles.providerPage}>
      <section className={styles.providerHero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImage}>
            <Image
              src="/providers/Paul Havrilka.jpg"
              alt="Paul Havrilka, FNP"
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
              Paul Havrilka, FNP
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
            Patient-Centered, Community-Driven
          </h2>
          <div className={styles.bioText}>
            <p>
              Paul Havrilka graduated from Frontier Nursing University in 2013
              with a Master&apos;s of Science in Nursing. He became Board
              Certified in August 2013 and began his career in a medical office
              setting.
            </p>
            <p>
              He later practiced in a hospital setting including the emergency
              department until he opened his own office and practiced solo until
              2016, when he and his family relocated to Alaska. Paul joined
              Asbery &amp; Associates in 2019 and offers a wide variety of
              Family Medicine and Women&apos;s Health Services in both the
              McLeansboro and Mt. Vernon Family Medicine locations.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Patients Choose Paul
            </p>
            <h2
              className="section-title"
              style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}
            >
              Committed to Your Health
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
          Ready to Schedule with Paul?
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
