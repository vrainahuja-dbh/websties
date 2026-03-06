import Image from "next/image";
import Link from "next/link";
import styles from "./MeetSpecialist.module.css";

const credentials = [
  "Board Certified OB-GYN",
  "Robotic Surgery",
  "Urogynecology",
  "Minimally Invasive Surgery",
];

export default function MeetSpecialist() {
  return (
    <section className={styles.meetSpecialist}>
      <div className={styles.meetInner}>
        <div className={styles.meetPhoto}>
          <Image
            src="/specialist-robot.png"
            alt="Dr. Asbery with surgical robot"
            width={440}
            height={550}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <div>
          <span className={styles.meetTag}>Meet Your Specialist</span>
          <h2 className={styles.meetTitle}>
            Dr. Asbery,
            <br />
            <em>Board-Certified OB-GYN Surgeon</em>
          </h2>
          <div className={styles.meetCredentials}>
            {credentials.map((cred) => (
              <span key={cred} className={styles.credTag}>
                {cred}
              </span>
            ))}
          </div>
          <p className={styles.meetBio}>
            Dr. Asbery has dedicated his career to bringing world-class
            gynecologic surgical expertise to Southern Illinois. His approach
            combines cutting-edge techniques with a personal commitment to
            listening to each patient.
          </p>
          <div className={styles.meetQuote}>
            &ldquo;The doctor is more than just a surgeon, more than just a
            scientist. My goal is to better the community &mdash; not just
            medically, but to shepherd the community.&rdquo;
          </div>
          <p className={styles.meetExtra}>
            A decade-plus of surgical excellence, with patients who keep coming
            back &mdash; and sending their families.
          </p>
          <Link href="/providers/dr-asbery" className="btn-plum">
            Meet Dr. Asbery &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
