import Link from "next/link";
import styles from "./Conditions.module.css";

const conditions = [
  "Uterine Fibroids",
  "Ovarian Cysts",
  "Endometriosis",
  "Pelvic Organ Prolapse",
  "Abnormal Uterine Bleeding",
  "Urinary Incontinence",
  "Chronic Pelvic Pain",
  "PCOS",
  "Hormone Imbalances",
  "Perimenopause & Menopause",
  "Vulvodynia",
  "Interstitial Cystitis",
  "Pelvic Adhesions",
  "Dyspareunia",
  "Fertility Challenges",
  "Cervical Dysplasia",
];

export default function Conditions() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Conditions We Treat</p>
        <h2 className={styles.title}>
          If You&apos;ve Been Searching for
          <br />
          Answers, <em>We Find Them</em>
        </h2>
        <p className={styles.subtitle}>
          We treat the full range of gynecologic conditions &ndash; including those
          that can be difficult to get diagnosed and taken seriously.
        </p>

        <div className={styles.content}>
          <div className={styles.conditionsList}>
            {conditions.map((condition) => (
              <div key={condition} className={styles.conditionItem}>
                <span className={styles.conditionBullet}>&#9830;</span>
                {condition}
              </div>
            ))}
          </div>

          <div className={styles.helpCard}>
            <h3 className={styles.helpTitle}>
              Not Sure If We
              <br />
              Can <em>Help You?</em>
            </h3>
            <p className={styles.helpDesc}>
              Don&apos;t let uncertainty stop you from getting care. Call our office and our
              team will help you understand if our services are right for your needs &ndash;
              no referral required for most conditions.
            </p>
            <Link href="/#contact" className={styles.helpBtn}>
              Call Our Office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
