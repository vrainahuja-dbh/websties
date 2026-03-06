import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <div className={styles.footerBrand}>Asbery &amp; Associates</div>
          <p className={styles.footerTagline}>
            World-class medicine, hometown values.
            <br />
            Serving Southern Illinois since 1999.
          </p>
        </div>
        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/#services">Robotic Surgery</Link></li>
            <li><Link href="/#services">Urogynecology</Link></li>
            <li><Link href="/#services">Hormonal Health</Link></li>
            <li><Link href="/#services">Endometriosis</Link></li>
            <li><Link href="/#services">Weight Management</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Practice</h4>
          <ul>
            <li><Link href="/providers/dr-asbery">About Dr. Asbery</Link></li>
            <li><Link href="/providers">Our Providers</Link></li>
            <li><Link href="/#reviews">Patient Reviews</Link></li>
            <li><Link href="/#locations">Locations</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <ul>
            <li><Link href="/request-appointment">Request Appointment</Link></li>
            <li><Link href="/#portal">Patient Portal</Link></li>
            <li><Link href="/#insurance">Insurance</Link></li>
            <li><Link href="/#resources">Patient Resources</Link></li>
          </ul>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Asbery &amp; Associates. All rights reserved. | HIPAA Compliant</p>
        <p>Mount Vernon, Illinois</p>
      </div>
    </>
  );
}
