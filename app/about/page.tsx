import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "About Dr. Asbery — Asbery & Associates",
  description:
    "Learn about Dr. Asbery, a board-certified OB-GYN surgeon serving Southern Illinois with advanced gynecologic care.",
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroContent}>
          <p className="section-label">About Our Practice</p>
          <h1 className="section-title" style={{ maxWidth: "none" }}>
            Meet Dr. Asbery &amp; His Team
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "none" }}>
            Dedicated to bringing world-class gynecologic surgical expertise to
            Southern Illinois since 1999.
          </p>
        </div>
      </section>

      <section className={styles.aboutContent}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImage}>
            <Image
              src="/specialist-robot.png"
              alt="Dr. Asbery with surgical robot"
              width={500}
              height={625}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: 8,
              }}
            />
          </div>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutHeading}>
              A Career Built on Excellence &amp; Compassion
            </h2>
            <p className={styles.aboutParagraph}>
              Dr. Asbery has dedicated his career to bringing world-class
              gynecologic surgical expertise to Southern Illinois. His approach
              combines cutting-edge techniques with a personal commitment to
              listening to each patient.
            </p>
            <p className={styles.aboutParagraph}>
              As the first robotic surgeon in the Mt. Vernon area, Dr. Asbery
              brought access to robotic and minimally invasive procedures that
              patients would otherwise need to travel to St. Louis or
              Indianapolis to receive.
            </p>
            <div className={styles.aboutQuote}>
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
    </main>
  );
}
