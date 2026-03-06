import Link from "next/link";
import styles from "../service.module.css";
import FAQ from "../FAQ";

export const metadata = {
  title: "Robotic & Minimally Invasive Surgery — Asbery & Associates",
  description:
    "Advanced robotic and laparoscopic gynecologic surgery in Southern Illinois. Faster recovery, less pain, and better outcomes — all locally.",
};

const features = [
  {
    icon: "\u{1F916}",
    title: "da Vinci Robotic Surgery",
    desc: "State-of-the-art robotic-assisted procedures with enhanced precision, smaller incisions, and faster recovery times.",
  },
  {
    icon: "\u{1F52C}",
    title: "Advanced Laparoscopy",
    desc: "Minimally invasive techniques for complex gynecologic conditions, reducing hospital stays and recovery time significantly.",
  },
  {
    icon: "\u{1F3AF}",
    title: "First in the Region",
    desc: "Dr. Asbery was the first robotic surgeon in the Mt. Vernon area, bringing advanced surgical access that previously required travel to St. Louis or Indianapolis.",
  },
  {
    icon: "\u{1F49B}",
    title: "Patient-Centered Approach",
    desc: "Every surgical plan is tailored to the individual patient, with thorough pre-operative education and post-operative support.",
  },
];

const conditions = [
  { name: "Uterine Fibroids", desc: "Non-cancerous growths in the uterus that can cause heavy bleeding, pelvic pressure, and pain. Robotic myomectomy or hysterectomy can remove fibroids with minimal scarring and faster recovery." },
  { name: "Endometriosis", desc: "Tissue similar to the uterine lining grows outside the uterus, causing chronic pain and sometimes infertility. Robotic excision allows precise removal while preserving healthy tissue." },
  { name: "Ovarian Cysts", desc: "Fluid-filled sacs on the ovaries that may cause pain, bloating, or irregular periods. When surgery is needed, minimally invasive cystectomy removes the cyst while preserving the ovary." },
  { name: "Abnormal Uterine Bleeding", desc: "Heavy, prolonged, or irregular periods that interfere with daily life. Surgical options range from endometrial ablation to hysterectomy depending on severity and family planning goals." },
  { name: "Pelvic Organ Prolapse", desc: "When pelvic organs drop from their normal position due to weakened support muscles. Robotic sacrocolpopexy provides durable repair with shorter recovery than open surgery." },
  { name: "Chronic Pelvic Pain", desc: "Persistent pain in the lower abdomen lasting 6 months or more. Diagnostic laparoscopy can identify hidden causes like adhesions or endometriosis that imaging may miss." },
  { name: "Cervical Dysplasia", desc: "Abnormal cell changes on the cervix, often caused by HPV. When pre-cancerous changes are found, minimally invasive procedures can remove affected tissue before it progresses." },
  { name: "Pelvic Adhesions", desc: "Scar tissue bands that form between organs after surgery, infection, or endometriosis. Robotic lysis of adhesions carefully separates tissue to relieve pain and restore normal anatomy." },
];

export default function RoboticSurgeryPage() {
  return (
    <main className={styles.servicePage}>
      <section className={styles.serviceHero}>
        <div className={styles.heroInner}>
          <Link href="/#services" className={styles.backLink}>
            &larr; All Services
          </Link>
          <div className={styles.heroIcon}>{"\u{1F916}"}</div>
          <h1 className={styles.heroTitle}>
            Robotic &amp; Minimally Invasive Surgery
          </h1>
          <p className={styles.heroSubtitle}>
            Advanced laparoscopic and robotic procedures for faster recovery,
            less pain, and better outcomes &mdash; all locally in Southern Illinois.
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewInner}>
          <p className="section-label">Overview</p>
          <h2 className="section-title">
            World-Class Surgical Care, Close to Home
          </h2>
          <div className={styles.overviewText}>
            <p>
              Robotic and minimally invasive surgery represents the gold standard
              in modern gynecologic care. Using the da Vinci surgical system,
              Dr. Asbery performs complex procedures through tiny incisions,
              resulting in less pain, less scarring, and dramatically faster
              recovery times compared to traditional open surgery.
            </p>
            <p>
              Patients no longer need to travel hours to a major medical center
              for these advanced procedures. Our practice brings the same
              technology and expertise found in leading university hospitals to
              Southern Illinois.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresHeader}>
            <p className="section-label" style={{ textAlign: "center" }}>
              What Sets Us Apart
            </p>
            <h2 className="section-title" style={{ maxWidth: "none", textAlign: "center", margin: "0 auto" }}>
              Advanced Technology, Compassionate Care
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
            Conditions We Treat Surgically
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
        { q: "What is robotic surgery?", a: "Robotic surgery uses a state-of-the-art surgical system controlled by your surgeon to perform procedures through tiny incisions. The robotic arms provide enhanced precision, a magnified 3D view, and greater range of motion than the human hand alone." },
        { q: "How long is recovery after robotic surgery?", a: "Most patients return to normal activities within 1\u20132 weeks, compared to 6\u20138 weeks for traditional open surgery. You\u2019ll typically go home the same day or the next day." },
        { q: "Is robotic surgery safe?", a: "Yes. Robotic-assisted surgery has an excellent safety profile and is associated with less blood loss, fewer complications, and lower infection rates compared to open procedures." },
        { q: "Will I have visible scars?", a: "Robotic surgery uses incisions that are typically 8\u201312mm \u2014 much smaller than traditional surgery. Most patients find their scars are barely noticeable once healed." },
        { q: "Does insurance cover robotic surgery?", a: "Most major insurance plans cover robotic-assisted gynecologic procedures. Our billing team will verify your coverage and discuss any out-of-pocket costs before your procedure." },
      ]} />

      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Take the First Step
        </p>
        <h2 className="section-title" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          Ready to Learn More About Your Surgical Options?
        </h2>
        <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Schedule a consultation to discuss whether minimally invasive surgery is right for you.
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
