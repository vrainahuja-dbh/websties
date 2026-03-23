import Link from "next/link";
import styles from "../shared.module.css";

export const metadata = {
  title: "Insurance & Billing — Patient Resources | Asbery & Associates",
  description:
    "Learn about insurance plans accepted at Asbery & Associates, billing policies, and payment options for gynecologic care in Southern Illinois.",
};

const carriers = [
  "BCBS",
  "Healthlink",
  "Cigna",
  "UMR",
  "United Healthcare",
  "Health Alliance",
  "Aetna",
  "Tricare Standard",
];

export default function InsurancePage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="section-label">Patient Resources</p>
          <h1 className="section-title" style={{ maxWidth: "none" }}>
            Insurance &amp; Billing
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "none" }}>
            We work with a wide range of insurance providers and offer
            straightforward billing to make care accessible.
          </p>
        </div>
      </section>

      {/* ACCEPTED INSURANCE */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Accepted Insurance Plans</h2>
          <p className={styles.paragraph}>
            We accept most major insurance plans. Below are some of the carriers
            we work with. If you don&apos;t see yours listed, please call our
            office and we&apos;ll be happy to verify your coverage.
          </p>
          <div className={styles.tags}>
            {carriers.map((name) => (
              <span key={name} className={styles.tag}>
                {name}
              </span>
            ))}
            <span className={styles.tagMore}>+ more</span>
          </div>
          <div className={styles.callout}>
            <strong>Not sure if we accept your plan?</strong>{" "}
            <Link href="/#contact" className={styles.calloutLink}>
              Call our office
            </Link>{" "}
            and our team will verify your benefits before your visit.
          </div>
        </div>
      </section>

      {/* BILLING & PAYMENT */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Billing &amp; Payment</h2>
          <p className={styles.paragraph}>
            Co-pays and any outstanding balances are due at the time of service.
            We accept cash, check, and all major credit and debit cards.
          </p>
          <p className={styles.paragraph}>
            For your convenience, you can also pay your bill online through our
            secure payment portal.
          </p>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Online Bill Pay</h3>
              <p className={styles.cardDesc}>
                Pay your balance securely online at any time through our
                InStaMed payment portal.
              </p>
              <div style={{ marginTop: 20 }}>
                <a
                  href="https://pay.instamed.com/Form/PaymentPortal/Default?id=ASBERYANDASSOCIATES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-plum"
                  style={{ padding: "12px 28px", fontSize: "11px" }}
                >
                  Pay Online
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Billing Questions</h3>
              <p className={styles.cardDesc}>
                If you have questions about a bill or need to set up a payment
                arrangement, our billing team is here to help.
              </p>
              <div style={{ marginTop: 20 }}>
                <Link
                  href="/#contact"
                  className="btn-sage"
                  style={{ padding: "12px 28px", fontSize: "11px" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELF-PAY & NO INSURANCE */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            Self-Pay &amp; Uninsured Patients
          </h2>
          <p className={styles.paragraph}>
            We believe everyone deserves access to quality gynecologic care. If
            you are uninsured or prefer to self-pay, please contact our office to
            discuss pricing and available options. We are committed to working
            with you to make care affordable.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Questions About Coverage?
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          We&apos;re Happy to Help
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "16px auto 0", textAlign: "center" }}
        >
          Our team can verify your insurance benefits and walk you through any
          billing questions before your visit.
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
