import Link from "next/link";
import styles from "../service.module.css";
import FAQ from "../FAQ";

export const metadata = {
  title: "Mild Infertility Treatment — Asbery & Associates",
  description:
    "Diagnostic evaluations and initial treatment options for women beginning their fertility journey, close to home in Southern Illinois.",
};

const features = [
  {
    icon: "\u{1F338}",
    title: "Fertility Evaluations",
    desc: "Comprehensive diagnostic workups including hormone testing, imaging, and assessment to identify potential causes of infertility.",
  },
  {
    icon: "\u{1F9EA}",
    title: "Ovulation Support",
    desc: "Medication-assisted ovulation induction and cycle monitoring to optimize your chances of conception.",
  },
  {
    icon: "\u{1F52C}",
    title: "Diagnostic Surgery",
    desc: "When needed, minimally invasive laparoscopy to evaluate and treat structural causes of infertility such as endometriosis or adhesions.",
  },
  {
    icon: "\u{1F49B}",
    title: "Compassionate Guidance",
    desc: "Navigating fertility challenges is emotional. We provide clear information, realistic expectations, and referrals to specialists when advanced treatment is needed.",
  },
];

const conditions = [
  { name: "Unexplained Infertility", desc: "When standard testing doesn\u2019t reveal a clear cause for difficulty conceiving. This doesn\u2019t mean nothing can be done \u2014 many couples with unexplained infertility respond well to initial treatments like ovulation support." },
  { name: "Ovulatory Disorders", desc: "Irregular or absent ovulation is one of the most common causes of infertility. Conditions like PCOS, thyroid disorders, or hormonal imbalances can disrupt your cycle, but medication can often restore regular ovulation." },
  { name: "PCOS-Related Infertility", desc: "Polycystic ovary syndrome affects ovulation, making it harder to conceive. The good news: many women with PCOS respond well to ovulation-inducing medications, often achieving pregnancy without advanced fertility treatments." },
  { name: "Endometriosis-Related Infertility", desc: "Endometriosis can affect fertility by distorting pelvic anatomy, creating inflammation, or damaging eggs and sperm. Surgical treatment combined with fertility support can improve your chances significantly." },
  { name: "Tubal Factor Evaluation", desc: "Blocked or damaged fallopian tubes prevent the egg from reaching the uterus. We use imaging like HSG (hysterosalpingography) to evaluate tubal health and determine the best path forward." },
  { name: "Recurrent Pregnancy Loss", desc: "Two or more pregnancy losses can be devastating. We investigate potential causes including hormonal issues, uterine abnormalities, clotting disorders, and genetic factors to help prevent future losses." },
  { name: "Fertility Challenges", desc: "If you\u2019ve been trying to conceive without success, we provide a supportive, thorough evaluation to understand your unique situation and develop a plan \u2014 whether that\u2019s treatment here or a coordinated referral." },
  { name: "Pre-Conception Counseling", desc: "Planning for pregnancy before you start trying. We review your health history, medications, and lifestyle factors, optimize any existing conditions, and ensure you\u2019re in the best possible position to conceive." },
];

export default function InfertilityTreatmentPage() {
  return (
    <main className={styles.servicePage}>
      <section className={styles.serviceHero}>
        <div className={styles.heroInner}>
          <Link href="/#services" className={styles.backLink}>
            &larr; All Services
          </Link>
          <div className={styles.heroIcon}>{"\u{1F338}"}</div>
          <h1 className={styles.heroTitle}>Mild Infertility Treatment</h1>
          <p className={styles.heroSubtitle}>
            Diagnostic evaluations and initial treatment options for women
            beginning their fertility journey, close to home.
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <p className="section-label">Overview</p>
          <h2 className="section-title">
            Your Fertility Journey Starts Here
          </h2>
          <div className={styles.overviewText}>
            <p>
              Starting a family doesn&apos;t always happen as planned. If
              you&apos;ve been trying to conceive without success, our team can
              help with initial evaluations and treatments &mdash; right here in
              Southern Illinois, without the need to travel to a fertility
              clinic for the first steps.
            </p>
            <p>
              We provide thorough diagnostic workups, ovulation support, and
              treatment for common causes of mild infertility. When more advanced
              reproductive technologies are needed, we coordinate referrals to
              trusted fertility specialists while continuing to support your
              care locally.
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
              First Steps, Close to Home
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
            How We Can Help
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
        { q: "When should I see a doctor about fertility?", a: "If you\u2019re under 35 and have been trying to conceive for 12 months without success, or over 35 and trying for 6 months, it\u2019s time to schedule an evaluation. If you have known conditions like PCOS or endometriosis, earlier evaluation is recommended." },
        { q: "What happens during a fertility evaluation?", a: "We start with a thorough medical history, hormone blood work, and imaging such as ultrasound. Depending on results, additional testing like a hysterosalpingogram (HSG) to evaluate the fallopian tubes may be recommended." },
        { q: "Do you provide IVF?", a: "We focus on initial fertility evaluations and mild infertility treatments such as ovulation induction and cycle monitoring. If IVF or other advanced reproductive technologies are needed, we coordinate referrals to trusted fertility specialists while continuing to support your care." },
        { q: "Can PCOS cause infertility?", a: "PCOS is one of the most common causes of infertility due to irregular or absent ovulation. The good news is that many women with PCOS respond well to ovulation-inducing medications, which we offer as part of our fertility services." },
        { q: "Does insurance cover fertility testing?", a: "Many insurance plans cover diagnostic fertility testing. Coverage for treatment varies more widely. Our team will help verify your specific benefits before proceeding." },
      ]} />

      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2 className="section-title" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          Ready to Explore Your Options?
        </h2>
        <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Schedule a consultation to discuss your fertility goals and next steps.
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
