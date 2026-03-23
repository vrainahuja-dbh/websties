import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Services — Asbery & Associates",
  description:
    "Explore the full range of gynecologic services at Asbery & Associates, from robotic surgery and urogynecology to hormonal health and weight management.",
};

const services = [
  {
    slug: "robotic-surgery",
    name: "Robotic & Minimally Invasive Surgery",
    icon: "\u{1F916}",
    tags: ["da Vinci Robotic Surgery", "Advanced Laparoscopy", "Hysterectomy"],
    desc: "Advanced robotic and laparoscopic gynecologic surgery with faster recovery, less pain, and better outcomes. All available locally in Southern Illinois without traveling to a major city.",
  },
  {
    slug: "urogynecology",
    name: "Urogynecology",
    icon: "\u{1F3E5}",
    tags: ["Pelvic Floor Disorders", "Incontinence", "Prolapse Repair"],
    desc: "Expert treatment for pelvic floor disorders, urinary incontinence, and pelvic organ prolapse using the latest evidence-based, minimally invasive techniques.",
  },
  {
    slug: "hormonal-health",
    name: "Hormonal Health & Pellet Therapy",
    icon: "\u{1F33F}",
    tags: ["Bio-Identical Hormones", "Pellet Therapy", "Menopause Management"],
    desc: "Personalized hormone management including bio-identical pellet therapy to restore balance, energy, and well-being. Helping you feel like yourself again.",
  },
  {
    slug: "endometriosis",
    name: "Endometriosis & Chronic Pelvic Pain",
    icon: "\u{1F49B}",
    tags: ["Endometriosis", "Pelvic Pain", "Diagnostic Laparoscopy"],
    desc: "Compassionate diagnosis and treatment for endometriosis and chronic pelvic pain. We believe your pain is real, and we work to find answers, not dismiss concerns.",
  },
  {
    slug: "weight-management",
    name: "Weight Management",
    icon: "\u2696\uFE0F",
    tags: ["Medical Weight Loss", "Hormonal Assessment", "Nutrition Planning"],
    desc: "Medically supervised weight management programs tailored to women\u2019s unique physiology and hormonal factors, with ongoing support and accountability.",
  },
  {
    slug: "infertility-treatment",
    name: "Mild Infertility Treatment",
    icon: "\u{1F338}",
    tags: ["Fertility Evaluations", "Ovulation Support", "Initial Workup"],
    desc: "Diagnostic evaluations and initial treatment options for women beginning their fertility journey. Compassionate, thorough care close to home.",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.servicesPage}>
      <section className={styles.servicesHero}>
        <div className={styles.servicesHeroContent}>
          <p className="section-label">What We Offer</p>
          <h1 className="section-title" style={{ maxWidth: "none" }}>
            Our Services
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "none" }}>
            Comprehensive gynecologic care, from advanced surgical solutions to
            personalized wellness programs.
          </p>
        </div>
      </section>

      <section className={styles.servicesList}>
        {services.map((service) => (
          <Link
            href={`/services/${service.slug}`}
            key={service.slug}
            className={styles.serviceCard}
          >
            <div className={styles.serviceIcon}>{service.icon}</div>
            <div className={styles.serviceInfo}>
              <h2 className={styles.serviceName}>{service.name}</h2>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <div className={styles.serviceTags}>
                {service.tags.map((tag) => (
                  <span key={tag} className={styles.serviceTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className={styles.serviceLink}>
                Learn More &rarr;
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
