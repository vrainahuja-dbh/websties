import styles from "./WhyChooseUs.module.css";

const reasons = [
  {
    icon: "\u{1F3AF}",
    title: "GYN-Focused Practice",
    desc: "You\u2019ll see the same face every time you walk through our door. One dedicated specialist, fully invested in your care, who knows your history and your goals.",
  },
  {
    icon: "\u{1F916}",
    title: "Robotic Surgical Excellence",
    desc: "Dr. Asbery was the first robotic surgeon in the Mt. Vernon area, bringing access to robotic and minimally invasive procedures that patients would otherwise need to travel to St. Louis or Indianapolis to receive.",
  },
  {
    icon: "\u{1F49B}",
    title: "A Practice That Listens",
    desc: '\u201CYou\u2019re seen and you matter here.\u201D From billing questions to complex diagnoses, every person on our team is here to help, not redirect you.',
  },
  {
    icon: "\u{1F4CD}",
    title: "Locally Rooted, Regionally Serving",
    desc: "Based in Mount Vernon, serving patients from Effingham to Metropolis. World-class care that doesn\u2019t require a 2-hour drive.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyHeader}>
        <div className={styles.whyTag}>Why Choose Us</div>
        <h2 className={styles.whyTitle}>
          State of the Art Care
          <br />
          Without the <em>Big City Hassle</em>
        </h2>
      </div>
      <div className={styles.whyGrid}>
        {reasons.map((reason) => (
          <div key={reason.title} className={styles.whyCard}>
            <div className={styles.whyIcon}>{reason.icon}</div>
            <div>
              <div className={styles.whyCardTitle}>{reason.title}</div>
              <p className={styles.whyCardDesc}>{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
