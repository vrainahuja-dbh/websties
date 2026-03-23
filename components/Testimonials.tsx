import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Stephanie S.",
    image: "/reviews/stephanie.png",
    detail: "Google Review",
    quote:
      "Top notch care, support, communication and facility. Billing was clearly laid out and went smooth. Wonderful team!",
  },
  {
    name: "Katherine C.",
    image: "/reviews/katherine.png",
    detail: "Google Review",
    quote:
      "Very caring and kind. Explain things very well and took their time.",
  },
  {
    name: "Erica E.",
    image: "/reviews/erica.png",
    detail: "Google Review",
    quote:
      "I\u2019ve had nothing, but great experiences at this location. Every single person who works there is welcoming, understanding, and kind. I always tell my friends to ask for Dr. Dudley!",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.tag}>Patient Testimonials</div>
        <h2 className={styles.title}>
          Hear From Our <em>Patients</em>
        </h2>
      </div>
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.card}>
            <Image
              src={t.image}
              alt={t.name}
              width={64}
              height={64}
              className={styles.avatar}
            />
            <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.detail}>{t.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
