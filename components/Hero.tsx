import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <p className={styles.heroEyebrow}>Southern Illinois&apos; Premier GYN Practice</p>
        <h1 className={styles.heroTitle}>
          Advanced Gynecologic Care
          <br />
          <em>In Hands You Can Trust.</em>
        </h1>
        <p className={styles.heroSubtitle}>
          Dr. Asbery and his dedicated team deliver expert gynecologic care
          including robotic surgery, urogynecology, and women&apos;s wellness.
          World-class treatment close to home, without the drive to St. Louis.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/request-appointment" className="btn-gold">
            Request Appointment
          </Link>
          <Link href="/#services" className="btn-ghost-white">
            Explore Our Services
          </Link>
        </div>
      </div>
      <div className={styles.heroRight}>
        <Image
          src="/hero-image.jpg"
          alt="Dr. Asbery with robotic surgery system"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        <div className={styles.heroStatCard}>
          <div className={styles.heroStatNumber}>19+</div>
          <div className={styles.heroStatLabel}>Years Serving Southern Illinois</div>
        </div>
      </div>
    </section>
  );
}
