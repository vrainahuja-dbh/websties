import Link from "next/link";
import styles from "../service.module.css";
import FAQ from "../FAQ";

export const metadata = {
  title: "Urogynecology — Asbery & Associates",
  description:
    "Expert treatment for pelvic floor disorders, incontinence, and prolapse using the latest evidence-based techniques in Southern Illinois.",
};

const features = [
  {
    icon: "\u{1F3E5}",
    title: "Pelvic Floor Expertise",
    desc: "Comprehensive evaluation and treatment of pelvic floor dysfunction, including muscle retraining, pessary fitting, and surgical repair.",
  },
  {
    icon: "\u{1F52C}",
    title: "Minimally Invasive Repair",
    desc: "Advanced surgical techniques for prolapse and incontinence that minimize recovery time while delivering lasting results.",
  },
  {
    icon: "\u{1F4CB}",
    title: "Thorough Diagnostics",
    desc: "Urodynamic testing and imaging to accurately diagnose the root cause of your symptoms before recommending treatment.",
  },
  {
    icon: "\u{1F49B}",
    title: "Compassionate, Private Care",
    desc: "We understand how personal these conditions are. Every conversation and treatment plan is handled with discretion and empathy.",
  },
];

const conditions = [
  { name: "Urinary Incontinence", desc: "Involuntary urine leakage during coughing, sneezing, exercise, or with sudden urges. Treatments range from pelvic floor therapy to minimally invasive sling procedures with high success rates." },
  { name: "Pelvic Organ Prolapse", desc: "When the uterus, bladder, or rectum drops from its normal position due to weakened pelvic support. You may feel pressure, heaviness, or a bulging sensation. Both surgical and non-surgical options are available." },
  { name: "Overactive Bladder", desc: "Frequent, sudden urges to urinate that are hard to control, sometimes with leakage. This is not a normal part of aging \u2014 medications, nerve stimulation, and behavioral therapies can provide significant relief." },
  { name: "Fecal Incontinence", desc: "Difficulty controlling bowel movements, which can range from occasional leakage to complete loss of control. This is more common than most people think, and effective treatments exist." },
  { name: "Recurrent UTIs", desc: "Repeated urinary tract infections (3 or more per year) that may signal an underlying issue. We investigate root causes and develop prevention strategies beyond repeated antibiotics." },
  { name: "Pelvic Floor Dysfunction", desc: "Difficulty coordinating the muscles of the pelvic floor, leading to problems with urination, bowel movements, or pelvic pain. Specialized therapy and treatment can retrain these muscles." },
  { name: "Vaginal Prolapse", desc: "The vaginal walls weaken and bulge inward, often after childbirth or menopause. You may notice a feeling of fullness or tissue protruding. Pessaries or surgical repair can restore support." },
  { name: "Bladder Prolapse (Cystocele)", desc: "The bladder drops into the vaginal wall, causing pressure, incomplete emptying, and sometimes incontinence. Severity varies \u2014 mild cases may be managed conservatively, while advanced cases benefit from surgical repair." },
];

export default function UrogynecologyPage() {
  return (
    <main className={styles.servicePage}>
      <section className={styles.serviceHero}>
        <div className={styles.heroInner}>
          <Link href="/#services" className={styles.backLink}>
            &larr; All Services
          </Link>
          <div className={styles.heroIcon}>{"\u{1F3E5}"}</div>
          <h1 className={styles.heroTitle}>Urogynecology</h1>
          <p className={styles.heroSubtitle}>
            Expert treatment for pelvic floor disorders, incontinence, and
            prolapse using the latest evidence-based techniques.
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <p className="section-label">Overview</p>
          <h2 className="section-title">
            Restoring Comfort &amp; Confidence
          </h2>
          <div className={styles.overviewText}>
            <p>
              Pelvic floor disorders affect millions of women, yet many suffer
              in silence because they&apos;re embarrassed or believe nothing can
              be done. At Asbery &amp; Associates, we specialize in diagnosing
              and treating these conditions with both non-surgical and surgical
              options.
            </p>
            <p>
              From conservative approaches like pelvic floor therapy and pessary
              management to advanced minimally invasive surgical repairs, we
              develop individualized treatment plans that address your specific
              symptoms and goals.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              Our Approach
            </p>
            <h2 className="section-title" style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}>
              Comprehensive Pelvic Floor Care
            </h2>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((item) => (
              <div key={item.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{item.icon}</div>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.conditionsSection}>
        <div className={styles.conditionsInner}>
          <p className="section-label">Conditions Treated</p>
          <h2 className="section-title">
            Conditions We Specialize In
          </h2>
          <div className={styles.conditionsCards}>
            {conditions.map((c) => (
              <div key={c.name} className={styles.conditionCard}>
                <div className={styles.conditionCardTitle}>
                  <span className={styles.conditionCardBullet}>&#9830;</span>
                  {c.name}
                </div>
                <p className={styles.conditionCardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={[
        { q: "What is urogynecology?", a: "Urogynecology is a subspecialty focused on pelvic floor disorders in women, including urinary incontinence, pelvic organ prolapse, and bladder dysfunction. It combines expertise in both gynecology and urology." },
        { q: "Is urinary incontinence a normal part of aging?", a: "While common, incontinence is not something you have to accept. Effective treatments range from pelvic floor exercises and medications to minimally invasive surgical procedures that can significantly improve or resolve symptoms." },
        { q: "What is a pessary?", a: "A pessary is a removable device placed in the vagina to support the pelvic organs. It\u2019s a non-surgical option for managing prolapse and certain types of incontinence, and many women find it very effective." },
        { q: "When should I consider surgery for prolapse?", a: "Surgery is typically considered when conservative treatments haven\u2019t provided adequate relief, or when prolapse is significantly affecting your quality of life. We\u2019ll discuss all options and help you make the best decision for your situation." },
        { q: "Will I need to stay in the hospital?", a: "Most urogynecologic procedures are performed minimally invasively, and many patients go home the same day. Your surgeon will discuss the expected recovery timeline for your specific procedure." },
      ]} />

      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2 className="section-title" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          Don&apos;t Suffer in Silence
        </h2>
        <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Effective treatments are available. Schedule a confidential consultation today.
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
