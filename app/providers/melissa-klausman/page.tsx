import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "Melissa Klausman, WHNP-BC, CNM — Women\u2019s Health NP & Nurse-Midwife | Asbery & Associates",
  description:
    "Melissa Klausman, WHNP-BC, CNM specializes in women's health and midwifery at Asbery & Associates in Southern Illinois.",
};

const credentials = [
  "WHNP-BC, CNM",
  "Georgetown University, M.S. 2015",
  "Board Certified 2016",
  "U.S. Air Force Veteran",
];

const highlights = [
  {
    icon: "\u{1F393}",
    title: "Dual Degree from Georgetown",
    desc: "Melissa graduated from Georgetown University School of Nursing with a Master\u2019s of Science in both Nurse Midwifery and Women\u2019s Health Nurse Practitioner.",
  },
  {
    icon: "\u{1FA96}",
    title: "U.S. Air Force Veteran",
    desc: "Before her nursing career, Melissa served in the United States Air Force as a Communications Officer, bringing discipline and dedication to her practice.",
  },
  {
    icon: "\u{1F3E5}",
    title: "Extensive Nursing Background",
    desc: "Melissa\u2019s nursing experience spans hospital telemetry and infectious disease settings, giving her a broad clinical foundation for women\u2019s health care.",
  },
  {
    icon: "\u{1F91D}",
    title: "Part of the Team Since 2021",
    desc: "Melissa joined Asbery & Associates in January 2021 and continues to offer a wide variety of Women\u2019s Health Services.",
  },
];

export default function MelissaKlausmanPage() {
  return (
    <main className={styles.providerPage}>
      <section className={styles.providerHero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImage}>
            <Image
              src="/providers/Klausman.jpg"
              alt="Melissa Klausman, WHNP-BC, CNM"
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
              Melissa Klausman, WHNP-BC, CNM
            </h1>
            <p className={styles.heroTitle}>
              Women&apos;s Health Nurse Practitioner &amp; Certified Nurse-Midwife
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
            Specialized in Women&apos;s Wellness
          </h2>
          <div className={styles.bioText}>
            <p>
              Melissa Klausman attended Georgetown University School of Nursing
              in Washington, D.C. She graduated in 2015 with a Master&apos;s
              Degree of Science in Nursing, having completed a dual degree
              program in both Nurse Midwifery and Women&apos;s Health Nurse
              Practitioner. She became board certified in 2016.
            </p>
            <p>
              Melissa brings an extensive nursing background having practiced in
              a hospital telemetry and infectious disease setting, as well as
              being a United States Air Force Veteran where she served as a
              Communications Officer. She joined Asbery &amp; Associates in
              January 2021 and continues to offer a wide variety of
              Women&apos;s Health Services.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Patients Choose Melissa
            </p>
            <h2
              className="section-title"
              style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}
            >
              Expert, Evidence-Based Care
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
          Ready to Schedule with Melissa?
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
