import styles from "./Insurance.module.css";

const carriers = [
  "BlueCross BlueShield",
  "Aetna",
  "Cigna",
  "United Healthcare",
  "Healthlink",
  "UMR",
  "Health Alliance",
  "Tricare Standard",
];

export default function Insurance() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Insurance Accepted</span>
        <div className={styles.tags}>
          {carriers.map((name) => (
            <span key={name} className={styles.tag}>
              {name}
            </span>
          ))}
          <span className={styles.more}>+ More</span>
        </div>
      </div>
    </section>
  );
}
