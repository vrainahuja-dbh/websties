import styles from "./FirstVisit.module.css";

const steps = [
  {
    title: "Request an Appointment",
    desc: "Call our office or submit a request online. No referral required for most services. Most major insurance accepted.",
  },
  {
    title: "Your First Consultation",
    desc: "Meet with your provider to discuss your history, concerns, and goals. We take time to actually listen. No rushing.",
  },
  {
    title: "Personalized Care Plan",
    desc: "We develop a treatment plan tailored specifically to you, whether that's monitoring, medical management, or surgery.",
  },
  {
    title: "Ongoing Support",
    desc: "Your care doesn't end after a procedure. We provide follow-up, check-ins, and continued support throughout your journey.",
  },
];

export default function FirstVisit() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className="section-label">Your First Visit</p>
        <h2 className="section-title" style={{ margin: "0 auto", textAlign: "center", maxWidth: "none" }}>
          What to Expect at Your First Visit
        </h2>
        <p className={styles.subtitle}>
          We make it easy to get the care you need, from scheduling to
          treatment, here&apos;s how it works.
        </p>
      </div>
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={step.title} className={styles.step}>
            <div className={styles.stepNumber}>{i + 1}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
