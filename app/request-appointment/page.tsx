import AppointmentForm from "@/components/AppointmentForm";
import styles from "./page.module.css";

export default function RequestAppointmentPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Request an Appointment</h1>
        <p className={styles.heroSubtitle}>
          Fill out the form below and our team will reach out to schedule your visit.
          New and returning patients welcome.
        </p>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <AppointmentForm source="Website — Request Appointment" />
        </div>
      </section>

      <section className={styles.infoSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Prefer to Call?
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}
        >
          Reach Us by Phone
        </h2>
        <p className={styles.infoText}>
          Most insurance accepted. No referral required for most services. Our
          friendly staff is ready to help you schedule.
        </p>
      </section>
    </main>
  );
}
