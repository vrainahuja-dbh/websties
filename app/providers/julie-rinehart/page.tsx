import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "Julie Rinehart, DNP, APRN, CNM, WHNP-BC — Certified Nurse-Midwife & Nurse Practitioner | Asbery & Associates",
  description:
    "Julie Rinehart, DNP, APRN, CNM, WHNP-BC is a certified nurse-midwife and nurse practitioner offering holistic women's health services at Asbery & Associates.",
};

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
              alt="Julie Rinehart, DNP, APRN, CNM, WHNP-BC"
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
              Julie Rinehart, DNP, APRN, CNM, WHNP-BC
            </h1>
            <p className={styles.heroTitle}>
              Certified Nurse-Midwife &amp; Nurse Practitioner
            </p>
            <div className={styles.heroBio}>
              <p className={styles.heroBioLabel}>Biography</p>
              <p>
                A Georgetown-educated Doctor of Nursing Practice with more than 30 years of clinical
                experience, Julie Rinehart is a committed champion for women&apos;s health and health
                equity. An Advanced Practice Registered Nurse dual-certified as a Nurse Midwife and
                Women&apos;s Health Nurse Practitioner, she joined Asbery and Associates in 2018, where
                she provides full-scope midwifery and comprehensive women&apos;s health care&mdash;from
                pregnancy, labor, and delivery to perimenopause and menopause.
              </p>
              <p>
                Julie&apos;s expertise spans well-woman and adolescent care, preconception and infertility
                support, family planning, and the management of complex gynecologic concerns. She is
                trained in procedures such as Nexplanon insertion, IUD placement, and colposcopy, while
                she also pursues ongoing, evidence-based education in midlife transition and menopause
                management.
              </p>
              <p>
                Deeply dedicated to maternal mental health, rural access, and equitable care, Julie&apos;s
                doctoral work focused on improving postpartum mental health through early provider and
                patient education. In addition to her clinical practice, she serves as an adjunct faculty
                member at Georgetown University and mentors nurse practitioner students across multiple
                programs at various universities. She maintains certification through the American
                Midwifery Certification Board (AMCB) and the National Certification Corporation (NCC)
                in addition to state licensures.
              </p>
              <p>
                When not providing patient care or shaping future clinicians, Julie enjoys time with her
                family and sons, and finds balance through travel, cooking, attending the theater,
                learning about other cultures, exercise, and creative pursuits.
              </p>
              <div className={styles.heroBioButton}>
                <Link href="/request-appointment" className="btn-plum">
                  Request an Appointment
                </Link>
              </div>
            </div>
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
