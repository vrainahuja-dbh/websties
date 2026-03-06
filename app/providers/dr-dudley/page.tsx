import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "Jo Ann Dudley, M.D., FACOG — OB-GYN Physician | Asbery & Associates",
  description:
    "Jo Ann Dudley, M.D., FACOG is a board-certified OB-GYN physician providing compassionate, comprehensive gynecologic care in Southern Illinois.",
};

const credentials = [
  "M.D., FACOG",
  "Board Certified OB-GYN",
  "Georgetown University School of Medicine, 1985",
  "30+ Years in Practice",
];

const highlights = [
  {
    icon: "\u{1F393}",
    title: "Over 30 Years of Experience",
    desc: "Dr. Dudley has been in medical practice for over 30 years, bringing decades of clinical expertise to every patient encounter.",
  },
  {
    icon: "\u{1F3E5}",
    title: "Wide Variety of Services",
    desc: "From routine wellness exams to complex gynecologic concerns, Dr. Dudley provides thorough, evidence-based care across the full spectrum of women\u2019s health.",
  },
  {
    icon: "\u{1F4DC}",
    title: "Professional Memberships",
    desc: "Active member of ACOG, AAGL, ASCCP, and ASRM \u2014 staying current with the latest advances in women\u2019s health and gynecologic care.",
  },
  {
    icon: "\u{1F91D}",
    title: "Part of the Team Since 2019",
    desc: "Dr. Dudley joined Asbery & Associates in January 2019, bringing her extensive experience to serve the women of Southern Illinois.",
  },
];

export default function DrDudleyPage() {
  return (
    <main className={styles.providerPage}>
      <section className={styles.providerHero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImage}>
            <Image
              src="/providers/JoAnn Dudley.jpg"
              alt="Dr. Jo Ann Dudley"
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
              Jo Ann Dudley, M.D., FACOG
            </h1>
            <p className={styles.heroTitle}>
              Board-Certified OB-GYN Physician
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
            Dedicated to Women&apos;s Health
          </h2>
          <div className={styles.bioText}>
            <p>
              Dr. Dudley graduated from Georgetown University School of Medicine
              in 1985. She completed her residency in Obstetrics &amp; Gynecology
              at Blodgett/St. Mary&apos;s in Grand Rapids, Michigan in 1989 and
              became board certified in 1991.
            </p>
            <p>
              Dr. Dudley relocated from West Virginia to Illinois in January 2019
              when she joined Asbery &amp; Associates in practice. She has been in
              medical practice for over 30 years and continues to offer a wide
              variety of Women&apos;s Health Services. Dr. Dudley is currently a
              member of The American College of Obstetrics and Gynecology, American
              Association of Gynecologic Laparoscopists, American Society for
              Colposcopy and Cervical Pathology, and American Society for
              Reproductive Medicine.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Patients Choose Dr. Dudley
            </p>
            <h2
              className="section-title"
              style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}
            >
              Care You Can Count On
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
          Ready to Schedule with Dr. Dudley?
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
