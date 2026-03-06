import Link from "next/link";
import styles from "../service.module.css";
import FAQ from "../FAQ";

export const metadata = {
  title: "Endometriosis & Chronic Pelvic Pain — Asbery & Associates",
  description:
    "Compassionate diagnosis and treatment for endometriosis and chronic pelvic pain. We believe your pain is real. Serving Southern Illinois.",
};

const features = [
  {
    icon: "\u{1F49B}",
    title: "We Believe Your Pain",
    desc: "Too many women are told their pain is \"just normal.\" We take every symptom seriously and work to find answers, not dismiss concerns.",
  },
  {
    icon: "\u{1F52C}",
    title: "Accurate Diagnosis",
    desc: "Comprehensive evaluation including imaging, lab work, and when needed, diagnostic laparoscopy to confirm endometriosis and identify its extent.",
  },
  {
    icon: "\u{1F916}",
    title: "Surgical Expertise",
    desc: "Minimally invasive robotic excision of endometriosis for thorough treatment with faster recovery and better long-term outcomes.",
  },
  {
    icon: "\u{1F33F}",
    title: "Multi-Modal Management",
    desc: "Combining surgical treatment with hormonal therapy, pain management, and lifestyle support for comprehensive, lasting relief.",
  },
];

const conditions = [
  { name: "Endometriosis", desc: "Tissue similar to the uterine lining grows outside the uterus, attaching to organs in the pelvis. It can cause severe pain, heavy periods, and fertility challenges. Excision surgery is the gold standard for treatment." },
  { name: "Chronic Pelvic Pain", desc: "Persistent pain below the belly button lasting 6 months or more. It can have multiple overlapping causes \u2014 we conduct thorough evaluations to identify all contributing factors, not just the most obvious one." },
  { name: "Painful Periods (Dysmenorrhea)", desc: "Cramping and pain during menstruation that goes beyond typical discomfort. If your periods regularly keep you from work, school, or daily activities, that\u2019s not normal \u2014 it\u2019s a sign something treatable may be happening." },
  { name: "Pain During Intercourse", desc: "Deep or surface-level pain during or after sex (dyspareunia). This can be caused by endometriosis, pelvic floor tension, hormonal changes, or other conditions \u2014 and it\u2019s something we can help with." },
  { name: "Pelvic Adhesions", desc: "Bands of scar tissue that form between pelvic organs, often after surgery, infection, or endometriosis. They can pull organs out of position and cause chronic pain, bowel issues, or fertility problems." },
  { name: "Adenomyosis", desc: "Similar to endometriosis, but the tissue grows into the muscular wall of the uterus itself. It causes heavy, painful periods and a feeling of bloating or pressure. Often misdiagnosed as fibroids." },
  { name: "Vulvodynia", desc: "Chronic pain or discomfort around the opening of the vagina with no identifiable cause. It can make sitting, exercise, and intimacy difficult. Multidisciplinary treatment approaches can provide significant relief." },
  { name: "Interstitial Cystitis", desc: "A chronic bladder condition causing pelvic pain, pressure, and frequent urination that\u2019s often mistaken for UTIs. It frequently co-occurs with endometriosis and benefits from a coordinated treatment approach." },
];

export default function EndometriosisPage() {
  return (
    <main className={styles.servicePage}>
      <section className={styles.serviceHero}>
        <div className={styles.heroInner}>
          <Link href="/#services" className={styles.backLink}>
            &larr; All Services
          </Link>
          <div className={styles.heroIcon}>{"\u{1F49B}"}</div>
          <h1 className={styles.heroTitle}>
            Endometriosis &amp; Chronic Pelvic Pain
          </h1>
          <p className={styles.heroSubtitle}>
            Compassionate, comprehensive diagnosis and treatment for women
            who&apos;ve been told their pain is &ldquo;just normal.&rdquo;
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <p className="section-label">Overview</p>
          <h2 className="section-title">
            Your Pain Deserves Real Answers
          </h2>
          <div className={styles.overviewText}>
            <p>
              Endometriosis affects an estimated 1 in 10 women, yet the average
              diagnosis takes 7&ndash;10 years. Chronic pelvic pain can be
              debilitating, affecting work, relationships, and quality of life.
              At Asbery &amp; Associates, we specialize in getting to the root
              cause of your pain.
            </p>
            <p>
              Our approach combines thorough diagnostic evaluation with advanced
              surgical treatment and ongoing medical management. Dr. Asbery&apos;s
              expertise in robotic excision surgery allows for precise removal of
              endometriosis lesions while preserving healthy tissue and fertility
              when desired.
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
              Comprehensive Pain Care
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
        { q: "How is endometriosis diagnosed?", a: "While symptoms and imaging can suggest endometriosis, definitive diagnosis requires a laparoscopic procedure where tissue is visualized and biopsied. We use minimally invasive techniques to both diagnose and treat in the same procedure when possible." },
        { q: "Can endometriosis be cured?", a: "While there is no definitive cure, endometriosis can be effectively managed. Excision surgery removes the disease tissue, and combined with hormonal management, many patients experience significant, long-lasting relief from symptoms." },
        { q: "Why does it take so long to get diagnosed?", a: "The average diagnosis takes 7\u201310 years because symptoms are often dismissed as \u201Cnormal\u201D period pain. We take pelvic pain seriously from your first visit and work efficiently toward answers." },
        { q: "Will endometriosis affect my fertility?", a: "Endometriosis can impact fertility, but many women with endometriosis conceive successfully, especially with proper treatment. We\u2019ll discuss your fertility goals as part of your treatment plan." },
        { q: "What can I expect after excision surgery?", a: "Most patients recover within 1\u20132 weeks from minimally invasive excision. Many experience significant pain reduction within the first month, with continued improvement over the following months." },
      ]} />

      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2 className="section-title" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          You Deserve to Be Heard
        </h2>
        <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
          If you&apos;ve been living with pelvic pain, schedule a consultation with a team that will listen.
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
