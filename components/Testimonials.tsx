import styles from "./Testimonials.module.css";

const testimonials = [
  {
    initials: "S.M.",
    name: "Sarah M.",
    detail: "Patient since 2019",
    quote:
      "Dr. Asbery and her team made me feel so comfortable and heard. After years of being dismissed by other doctors, I finally found someone who truly listens and takes my concerns seriously.",
  },
  {
    initials: "J.K.",
    name: "Jennifer K.",
    detail: "Patient since 2021",
    quote:
      "I was terrified about my surgery, but the entire staff walked me through every step. The robotic procedure meant I was back on my feet in no time. I can\u2019t recommend this practice enough.",
  },
  {
    initials: "L.R.",
    name: "Lisa R.",
    detail: "Patient since 2017",
    quote:
      "From the front desk to the exam room, everyone here treats you like family. It\u2019s rare to find a medical office where the staff genuinely cares. I drive over an hour and it\u2019s worth every mile.",
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
            <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.detail}>{t.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
