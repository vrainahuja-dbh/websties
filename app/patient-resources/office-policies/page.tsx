import Link from "next/link";
import styles from "../shared.module.css";

export const metadata = {
  title: "Office Policies — Patient Resources | Asbery & Associates",
  description:
    "Review office policies at Asbery & Associates including appointment scheduling, cancellations, medical records, and patient responsibilities.",
};

const policies = [
  {
    title: "Appointments & Scheduling",
    desc: "We offer appointments Monday through Friday during regular business hours. To schedule, call our office or submit an online request. We do our best to accommodate urgent needs and will work with you to find a time that fits your schedule.",
  },
  {
    title: "Cancellations & No-Shows",
    desc: "If you need to cancel or reschedule, please give us at least 24 hours' notice. This allows us to offer that appointment time to another patient. Repeated no-shows may result in a rescheduling fee.",
  },
  {
    title: "Referrals",
    desc: "No referral is required for most of our services. If your insurance plan requires a referral, please obtain one from your primary care provider before your appointment to avoid delays.",
  },
  {
    title: "Prescription Refills",
    desc: "Please allow up to 48 business hours for prescription refill requests. For the fastest service, contact your pharmacy directly and they will send us the refill request electronically.",
  },
  {
    title: "Medical Records",
    desc: "You may request a copy of your medical records by contacting our office. Please allow up to 10 business days for processing. Records can also be accessed through the Patient Portal.",
  },
  {
    title: "Privacy & Confidentiality",
    desc: "Your privacy is important to us. We comply fully with HIPAA regulations and will never share your personal health information without your written consent, except as required by law.",
  },
];

export default function OfficePoliciesPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="section-label">Patient Resources</p>
          <h1 className="section-title" style={{ maxWidth: "none" }}>
            Office Policies
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "none" }}>
            A few things to know to help your visits go smoothly.
          </p>
        </div>
      </section>

      {/* POLICIES */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            What You Should Know
          </h2>
          <p className={styles.paragraph}>
            We want your experience at Asbery &amp; Associates to be as smooth
            and stress-free as possible. Below are our standard office policies.
            If you have any questions, don&apos;t hesitate to reach out.
          </p>
          <div className={styles.cardGrid}>
            {policies.map((policy) => (
              <div key={policy.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{policy.title}</h3>
                <p className={styles.cardDesc}>{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT PORTAL */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Patient Portal</h2>
          <p className={styles.paragraph}>
            Our online Patient Portal gives you secure access to your health
            information, appointment history, and messaging with your care team.
            You can also use it to complete intake forms before your visit.
          </p>
          <div style={{ marginTop: 24 }}>
            <a
              href="https://mycw4.eclinicalweb.com/asbe/jsp/100mp/login_otp.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-plum"
            >
              Access Patient Portal
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Have a Question?
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          We&apos;re Here to Help
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "16px auto 0", textAlign: "center" }}
        >
          If you have questions about our policies or need assistance, our team
          is always happy to help.
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
