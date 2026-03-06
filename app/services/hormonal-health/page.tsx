import Link from "next/link";
import styles from "../service.module.css";
import FAQ from "../FAQ";

export const metadata = {
  title: "Hormonal Health & Pellet Therapy — Asbery & Associates",
  description:
    "Personalized hormone management including bio-identical pellet therapy to help you feel like yourself again. Serving Southern Illinois.",
};

const features = [
  {
    icon: "\u{1F33F}",
    title: "Bio-Identical Pellet Therapy",
    desc: "Plant-derived hormones that are structurally identical to what your body produces, delivered through a simple in-office pellet insertion for consistent, sustained relief.",
  },
  {
    icon: "\u{1F9EA}",
    title: "Comprehensive Hormone Testing",
    desc: "Thorough lab work and symptom evaluation to identify imbalances and create a treatment plan tailored specifically to your body.",
  },
  {
    icon: "\u{1F4C8}",
    title: "Ongoing Monitoring",
    desc: "Regular follow-up testing and dosage adjustments to ensure your hormone levels stay optimized and your symptoms remain controlled.",
  },
  {
    icon: "\u{1F49B}",
    title: "Whole-Patient Wellness",
    desc: "Hormone health is about more than just lab numbers. We consider your lifestyle, nutrition, sleep, and stress to support total well-being.",
  },
];

const conditions = [
  { name: "Perimenopause", desc: "The transitional years before menopause when hormone levels begin to fluctuate. Symptoms like irregular periods, mood swings, and sleep disruption can start in your 40s \u2014 or even earlier." },
  { name: "Menopause", desc: "When periods stop permanently and estrogen levels drop significantly. Hot flashes, vaginal dryness, bone loss, and mood changes are common but highly treatable with the right hormone support." },
  { name: "Hormone Imbalances", desc: "When your body produces too much or too little of key hormones like estrogen, progesterone, or testosterone. Imbalances can affect everything from your weight to your mental clarity." },
  { name: "Hot Flashes & Night Sweats", desc: "Sudden waves of heat and sweating that can disrupt sleep and daily life. These are among the most common menopause symptoms and often respond well to hormone therapy." },
  { name: "Low Energy & Fatigue", desc: "Persistent tiredness that doesn\u2019t improve with rest. Hormonal shifts can affect your metabolism, thyroid function, and sleep quality \u2014 all of which contribute to feeling exhausted." },
  { name: "Mood Changes & Irritability", desc: "Anxiety, depression, or emotional volatility that seems to come out of nowhere. Fluctuating hormones directly affect brain chemistry, and stabilizing them can bring significant relief." },
  { name: "Low Libido", desc: "Decreased interest in intimacy that can strain relationships and self-confidence. Hormonal decline \u2014 especially in testosterone and estrogen \u2014 is a common and treatable cause." },
  { name: "Brain Fog & Sleep Issues", desc: "Difficulty concentrating, forgetfulness, and trouble falling or staying asleep. These frustrating symptoms are frequently linked to hormonal changes and often improve with proper treatment." },
];

export default function HormonalHealthPage() {
  return (
    <main className={styles.servicePage}>
      <section className={styles.serviceHero}>
        <div className={styles.heroInner}>
          <Link href="/#services" className={styles.backLink}>
            &larr; All Services
          </Link>
          <div className={styles.heroIcon}>{"\u{1F33F}"}</div>
          <h1 className={styles.heroTitle}>
            Hormonal Health &amp; Pellet Therapy
          </h1>
          <p className={styles.heroSubtitle}>
            Personalized hormone management &mdash; including bio-identical
            pellet therapy &mdash; to help you feel like yourself again.
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <p className="section-label">Overview</p>
          <h2 className="section-title">
            Feel Like Yourself Again
          </h2>
          <div className={styles.overviewText}>
            <p>
              Hormonal changes can affect every aspect of your life &mdash; from
              energy and mood to sleep and intimacy. Whether you&apos;re
              navigating perimenopause, menopause, or other hormonal imbalances,
              our team provides personalized solutions that address the root
              cause, not just the symptoms.
            </p>
            <p>
              We offer a range of treatment options including bio-identical
              pellet therapy, which provides steady, consistent hormone levels
              without the peaks and valleys of pills or patches. Each treatment
              plan is built around your unique lab results, symptoms, and goals.
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
              Science-Backed, Personalized Care
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
          <p className="section-label">Symptoms We Address</p>
          <h2 className="section-title">
            Common Symptoms &amp; Conditions
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
        { q: "What is bio-identical pellet therapy?", a: "Pellet therapy uses tiny, plant-derived hormone pellets that are inserted under the skin in a quick, in-office procedure. They release a steady, consistent dose of hormones over 3\u20135 months, avoiding the peaks and valleys of pills, patches, or creams." },
        { q: "How do I know if I need hormone therapy?", a: "Common signs of hormonal imbalance include hot flashes, night sweats, fatigue, mood changes, weight gain, low libido, and brain fog. We start with comprehensive lab work and a symptom evaluation to determine if hormone therapy is right for you." },
        { q: "Are bio-identical hormones safer than synthetic?", a: "Bio-identical hormones are structurally identical to the hormones your body naturally produces. Many patients and providers prefer them for their natural fit, though individual risks and benefits should be discussed during your consultation." },
        { q: "How quickly will I notice results?", a: "Most patients begin feeling improvement within 2\u20134 weeks after pellet insertion, with full effects typically felt by 6\u20138 weeks. Energy, mood, and sleep are often among the first symptoms to improve." },
        { q: "Is pellet therapy covered by insurance?", a: "Coverage varies by plan. Our team will help verify your benefits and discuss costs upfront so there are no surprises." },
      ]} />

      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2 className="section-title" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          Ready to Reclaim Your Vitality?
        </h2>
        <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Schedule a consultation to discuss your symptoms and explore personalized hormone solutions.
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
