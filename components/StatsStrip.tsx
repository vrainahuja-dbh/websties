import styles from "./StatsStrip.module.css";

const stats = [
  { number: "2k", label: "Successful Operations" },
  { number: "6", label: "GYN Specialties" },
  { number: "7+", label: "Counties Served" },
];

export default function StatsStrip() {
  return (
    <div className={styles.statsStrip}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.statBlock}>
          <div className={styles.statBlockNumber}>{stat.number}</div>
          <div className={styles.statBlockLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
