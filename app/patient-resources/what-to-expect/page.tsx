import Link from "next/link";
import styles from "../shared.module.css";

export const metadata = {
  title: "What to Expect — Patient Resources | Asbery & Associates",
  description:
    "Learn what to expect at your first visit to Asbery & Associates. From scheduling to follow-up, we make getting expert gynecologic care simple.",
};

const steps = [
  {
    title: "Request an Appointment",
    desc: "Call our office or submit a request online. No referral is required for most services, and we accept most major insurance plans. Our team will help you find a convenient time.",
  },
  {
    title: "Your First Consultation",
    desc: "You'll meet with your provider to discuss your medical history, current concerns, and personal health goals. We take the time to actually listen. No rushing, no feeling dismissed. This is your visit.",
  },
  {
    title: "Personalized Care Plan",
    desc: "Based on your consultation, we'll develop a treatment plan tailored specifically to you, whether that means monitoring, medical management, minimally invasive procedures, or surgery.",
  },
  {
    title: "Ongoing Support",
    desc: "Your care doesn't end after a procedure or a single appointment. We provide follow-up visits, check-ins, and continued support throughout your journey to make sure you're healing and feeling your best.",
  },
];

const bringItems = [
  "A valid photo ID (driver's license or state ID)",
  "Your insurance card(s)",
  "A list of current medications, including dosages",
  "Any relevant medical records or imaging results from other providers",
  "A list of questions or concerns you'd like to discuss",
];

export default function WhatToExpectPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="section-label">Patient Resources</p>
          <h1 className="section-title" style={{ maxWidth: "none" }}>
            What to Expect at Your First Visit
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "none" }}>
            We make it easy to get the care you need, from scheduling to
            treatment, here&apos;s how it works.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>How Your Visit Works</h2>
          <p className={styles.paragraph}>
            Whether you&apos;re coming in for a routine wellness exam or a
            specific concern, we want you to feel comfortable and informed from
            the moment you walk in.
          </p>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={step.title} className={styles.step}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO BRING */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>What to Bring</h2>
          <p className={styles.paragraph}>
            To help us make the most of your first appointment, please bring the
            following:
          </p>
          <ul className={styles.list}>
            {bringItems.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.callout}>
            <strong>First time with us?</strong> Please arrive 15 minutes early
            to complete any remaining paperwork. You can also access forms
            through our{" "}
            <a
              href="https://mycw4.eclinicalweb.com/asbe/jsp/100mp/login_otp.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.calloutLink}
            >
              Patient Portal
            </a>{" "}
            ahead of time.
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            A Different Kind of Practice
          </h2>
          <p className={styles.paragraph}>
            At Asbery &amp; Associates, we believe that great care starts with
            listening. Dr. Asbery and the entire team are known for taking the
            time to understand each patient&apos;s unique situation, not just
            the clinical picture, but the personal one too.
          </p>
          <p className={styles.paragraph}>
            You won&apos;t feel rushed. You won&apos;t feel dismissed. You&apos;ll
            have a provider who explains your options clearly, involves you in
            every decision, and follows up to make sure you&apos;re doing well.
          </p>
          <p className={styles.paragraph}>
            That&apos;s why patients travel from across Southern Illinois, from
            Effingham to Metropolis, for care they can trust.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Ready to Get Started?
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          Schedule Your First Visit
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "16px auto 0", textAlign: "center" }}
        >
          New and returning patients welcome. No referral required for most
          services.
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
