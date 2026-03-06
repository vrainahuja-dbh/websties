import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    icon: "\u{1F916}",
    name: "Robotic & Minimally Invasive Surgery",
    slug: "robotic-surgery",
    desc: "Advanced laparoscopic and robotic procedures for faster recovery, less pain, and better outcomes \u2014 all locally.",
  },
  {
    icon: "\u{1F3E5}",
    name: "Urogynecology",
    slug: "urogynecology",
    desc: "Expert treatment for pelvic floor disorders, incontinence, and prolapse using the latest evidence-based techniques.",
  },
  {
    icon: "\u{1F33F}",
    name: "Hormonal Health & Pellet Therapy",
    slug: "hormonal-health",
    desc: "Personalized hormone management \u2014 including bio-identical pellet therapy \u2014 to help you feel like yourself again.",
  },
  {
    icon: "\u{1F49B}",
    name: "Endometriosis & Chronic Pelvic Pain",
    slug: "endometriosis",
    desc: 'Compassionate, comprehensive diagnosis and treatment for women who\u2019ve been told their pain is "just normal."',
  },
  {
    icon: "\u2696\uFE0F",
    name: "Weight Management",
    slug: "weight-management",
    desc: "Medically supervised programs tailored to women\u2019s unique physiology and hormonal factors.",
  },
  {
    icon: "\u{1F338}",
    name: "Mild Infertility Treatment",
    slug: "infertility-treatment",
    desc: "Diagnostic evaluations and initial treatment options for women beginning their fertility journey, close to home.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <p className="section-label">Gynecologic Services</p>
      <h2 className="section-title">
        Specialized Care You Don&apos;t Have to Travel For
      </h2>
      <p className="section-subtitle">
        From minimally invasive surgery to comprehensive women&apos;s wellness,
        our team brings advanced GYN expertise to Southern Illinois.
      </p>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.name} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <div className={styles.serviceName}>{service.name}</div>
            <p className={styles.serviceDesc}>{service.desc}</p>
            <Link href={`/services/${service.slug}`} className={styles.serviceLink}>
              Learn More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
