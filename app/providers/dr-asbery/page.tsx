import Image from "next/image";
import Link from "next/link";
import styles from "../provider.module.css";

export const metadata = {
  title: "David S. Asbery, M.D., FACOG — Board-Certified OB-GYN Surgeon | Asbery & Associates",
  description:
    "David S. Asbery, M.D., FACOG is a board-certified OB-GYN surgeon specializing in robotic surgery, urogynecology, and minimally invasive procedures in Southern Illinois.",
};

const credentials = [
  "M.D.",
  "FACOG",
  "Board Certified OB-GYN",
  "Robotic Surgery",
  "Urogynecology",
  "Minimally Invasive Surgery",
];

const highlights = [
  {
    icon: "\u{1F3AF}",
    title: "19+ Years of Experience",
    desc: "Serving the women of Southern Illinois with dedicated gynecologic expertise since 1999.",
  },
  {
    icon: "\u{1F916}",
    title: "First Robotic Surgeon in Mt. Vernon",
    desc: "Pioneered robotic and minimally invasive surgical access in the region, eliminating the need for patients to travel to major metro areas.",
  },
  {
    icon: "\u{1F49B}",
    title: "Patient-Centered Philosophy",
    desc: "Known for taking the time to listen, explain, and involve patients in every decision about their care.",
  },
  {
    icon: "\u{1F4CD}",
    title: "Regionally Serving",
    desc: "Patients travel from Effingham to Metropolis for Dr. Asbery\u2019s specialized expertise \u2014 world-class care without the big-city drive.",
  },
];

export default function DrAsberyPage() {
  return (
    <main className={styles.providerPage}>
      {/* HERO */}
      <section className={styles.providerHero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroImage}>
            <Image
              src="/providers/Asbery 2020.jpeg"
              alt="Dr. David S. Asbery"
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
              David S. Asbery, M.D., FACOG
            </h1>
            <p className={styles.heroTitle}>
              Board-Certified OB-GYN Surgeon
            </p>
            <div className={styles.credentials}>
              {credentials.map((cred) => (
                <span key={cred} className={styles.credTag}>
                  {cred}
                </span>
              ))}
            </div>
            <div className={styles.heroQuote}>
              &ldquo;The doctor is more than just a surgeon, more than just a
              scientist. My goal is to better the community &mdash; not just
              medically, but to shepherd the community.&rdquo;
            </div>
            <Link href="/request-appointment" className="btn-plum">
              Request an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className={styles.bioSection}>
        <div className={styles.bioInner}>
          <p className="section-label">Background</p>
          <h2 className="section-title">
            A Career Built on Excellence &amp; Compassion
          </h2>
          <div className={styles.bioText}>
            <p>
              Dr. Asbery has dedicated his career to bringing world-class
              gynecologic surgical expertise to Southern Illinois. His approach
              combines cutting-edge techniques with a personal commitment to
              listening to each patient.
            </p>
            <p>
              As the first robotic surgeon in the Mt. Vernon area, Dr. Asbery
              brought access to robotic and minimally invasive procedures that
              patients would otherwise need to travel to St. Louis or
              Indianapolis to receive. His commitment to advancing surgical
              techniques while maintaining a deeply personal patient relationship
              sets his practice apart.
            </p>
            <p>
              A decade-plus of surgical excellence, with patients who keep coming
              back &mdash; and sending their families.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className={styles.highlightsSection}>
        <div className={styles.highlightsInner}>
          <div className={styles.highlightsHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Why Patients Choose Dr. Asbery
            </p>
            <h2
              className="section-title"
              style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}
            >
              Expertise You Can Trust
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

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          Ready to Schedule with Dr. Asbery?
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
