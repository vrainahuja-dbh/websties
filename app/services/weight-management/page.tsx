import Link from "next/link";
import styles from "../service.module.css";
import FAQ from "../FAQ";

export const metadata = {
  title: "Weight Management — Asbery & Associates",
  description:
    "Medically supervised weight management programs tailored to women's unique physiology and hormonal factors. Serving Southern Illinois.",
};

const features = [
  {
    icon: "\u2696\uFE0F",
    title: "Medically Supervised Programs",
    desc: "Physician-guided weight management that goes beyond diet and exercise, addressing the medical factors that make weight loss challenging.",
  },
  {
    icon: "\u{1F9EA}",
    title: "Hormonal Assessment",
    desc: "Comprehensive lab work to identify hormonal imbalances, thyroid dysfunction, insulin resistance, and other metabolic factors affecting your weight.",
  },
  {
    icon: "\u{1F4CB}",
    title: "Personalized Plans",
    desc: "Individualized programs that consider your medical history, lifestyle, hormonal profile, and personal goals \u2014 not one-size-fits-all solutions.",
  },
  {
    icon: "\u{1F49B}",
    title: "Judgment-Free Support",
    desc: "A compassionate, supportive environment where your struggles are understood and your progress is celebrated at every step.",
  },
];

const conditions = [
  { name: "Obesity & Overweight", desc: "When excess weight begins affecting your health, energy, or quality of life. We address the medical factors that make losing weight feel impossible despite your best efforts." },
  { name: "Hormonal Weight Gain", desc: "Weight gain driven by hormonal shifts \u2014 from estrogen and progesterone changes to cortisol and testosterone imbalances. Identifying the specific hormonal cause is key to effective treatment." },
  { name: "PCOS-Related Weight", desc: "Polycystic ovary syndrome often causes weight gain, especially around the midsection, due to insulin resistance and androgen excess. Targeted treatment can break the cycle." },
  { name: "Menopausal Weight Changes", desc: "The hormonal shifts of menopause slow metabolism and change where your body stores fat. Understanding these changes allows us to tailor strategies that actually work for your new physiology." },
  { name: "Insulin Resistance", desc: "When your cells don\u2019t respond normally to insulin, leading to elevated blood sugar, increased fat storage, and difficulty losing weight. Often a hidden driver of stubborn weight gain." },
  { name: "Thyroid-Related Weight", desc: "An underactive thyroid (hypothyroidism) slows your metabolism, causing weight gain, fatigue, and difficulty losing weight. Proper diagnosis and medication can make a meaningful difference." },
  { name: "Metabolic Syndrome", desc: "A cluster of conditions \u2014 high blood pressure, high blood sugar, excess abdominal fat, and abnormal cholesterol \u2014 that increase your risk for heart disease and diabetes. Early intervention can reverse course." },
  { name: "Post-Surgical Weight Management", desc: "Maintaining a healthy weight after gynecologic surgery, especially hysterectomy. Hormonal changes and activity restrictions during recovery require an adjusted, medically guided approach." },
];

export default function WeightManagementPage() {
  return (
    <main className={styles.servicePage}>
      <section className={styles.serviceHero}>
        <div className={styles.heroInner}>
          <Link href="/#services" className={styles.backLink}>
            &larr; All Services
          </Link>
          <div className={styles.heroIcon}>{"\u2696\uFE0F"}</div>
          <h1 className={styles.heroTitle}>Weight Management</h1>
          <p className={styles.heroSubtitle}>
            Medically supervised programs tailored to women&apos;s unique
            physiology and hormonal factors.
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <p className="section-label">Overview</p>
          <h2 className="section-title">
            A Medical Approach to Weight Wellness
          </h2>
          <div className={styles.overviewText}>
            <p>
              Weight management for women is complex. Hormonal fluctuations,
              metabolic changes, PCOS, thyroid conditions, and menopause all play
              significant roles that generic weight loss programs don&apos;t
              address. Our medically supervised programs are designed specifically
              for women&apos;s unique physiology.
            </p>
            <p>
              We start with a thorough medical evaluation to understand the
              factors contributing to your weight challenges, then build a
              personalized plan that may include nutritional guidance, medication
              when appropriate, hormonal optimization, and ongoing medical
              monitoring.
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
              More Than Just a Diet Plan
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
          <p className="section-label">Conditions Addressed</p>
          <h2 className="section-title">
            Who We Help
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
        { q: "How is medical weight management different from dieting?", a: "Medical weight management addresses the underlying medical, hormonal, and metabolic factors that affect your weight \u2014 not just calories and exercise. We use lab work, medical assessments, and when appropriate, medications to support sustainable results." },
        { q: "Will I need to take medication?", a: "Not necessarily. Medication is one tool in our approach and is considered based on your individual assessment. Some patients achieve their goals with nutritional guidance and hormonal optimization alone." },
        { q: "How do hormones affect weight?", a: "Hormonal imbalances \u2014 from thyroid dysfunction, PCOS, insulin resistance, or menopause \u2014 can make weight loss extremely difficult despite diet and exercise. Identifying and addressing these imbalances is often key to success." },
        { q: "How often will I have appointments?", a: "Initially, visits are typically every 2\u20134 weeks for monitoring and adjustments. As you progress, visits become less frequent. We\u2019re with you for the long term, not just the first few pounds." },
        { q: "Is the program covered by insurance?", a: "Coverage varies by plan and the specific services involved. Our team will verify your benefits and explain costs before starting treatment." },
      ]} />

      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2 className="section-title" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          Start Your Wellness Journey
        </h2>
        <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Schedule a consultation to discuss a personalized, medically guided weight management plan.
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
