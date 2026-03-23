import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <Image
            src="/logo-footer.png"
            alt="Asbery & Associates"
            width={200}
            height={60}
            className={styles.footerBrand}
          />
          <p className={styles.footerTagline}>
            World-class medicine, hometown values.
            <br />
            Serving Southern Illinois since 1999.
          </p>
        </div>
        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services/robotic-surgery">Robotic Surgery</Link></li>
            <li><Link href="/services/urogynecology">Urogynecology</Link></li>
            <li><Link href="/services/hormonal-health">Hormonal Health</Link></li>
            <li><Link href="/services/endometriosis">Endometriosis</Link></li>
            <li><Link href="/services/infertility-treatment">Infertility Treatment</Link></li>
            <li><Link href="/services/weight-management">Weight Management</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Practice</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/providers">Our Providers</Link></li>
            <li><Link href="/locations">Locations</Link></li>
            <li><Link href="/services">All Services</Link></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Patients</h4>
          <ul>
            <li><Link href="/request-appointment">Request Appointment</Link></li>
            <li><Link href="/patient-resources/what-to-expect">What to Expect</Link></li>
            <li><Link href="/patient-resources/office-policies">Office Policies</Link></li>
            <li><Link href="/patient-resources/insurance">Insurance</Link></li>
          </ul>
        </div>
      </footer>
      <div className={styles.footerBottom}>
        <p>Copyright &copy; 2026 Asbery and Associates, OB-GYN. All rights reserved.</p>
        <p>Website design &amp; development by <a href="https://www.databridge.health/" target="_blank" rel="noopener noreferrer">DataBridge Health, Inc.</a></p>
      </div>
    </>
  );
}
