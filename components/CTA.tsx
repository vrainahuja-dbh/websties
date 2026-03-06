import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section id="appointment" className={styles.ctaSection}>
      <p className="section-label" style={{ textAlign: "center" }}>
        Take the First Step
      </p>
      <h2 className="section-title" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        Ready to Be Seen, Heard, and Cared For?
      </h2>
      <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
        New and returning patients welcome. Most insurance accepted. No referral
        required for most services.
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
  );
}
