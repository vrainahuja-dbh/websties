"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLogo}>
        <Image src="/logo.png" alt="Asbery & Associates" width={180} height={90} priority />
      </Link>

      <button
        className={styles.navToggleLabel}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.line1Open : ""} />
        <span className={menuOpen ? styles.line2Open : ""} />
        <span className={menuOpen ? styles.line3Open : ""} />
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
        <li className={styles.dropdown}>
          <Link href="/#services">Services</Link>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/services/robotic-surgery">Robotic &amp; Minimally Invasive Surgery</Link></li>
            <li><Link href="/services/urogynecology">Urogynecology</Link></li>
            <li><Link href="/services/hormonal-health">Hormonal Health &amp; Pellet Therapy</Link></li>
            <li><Link href="/services/endometriosis">Endometriosis &amp; Chronic Pelvic Pain</Link></li>
            <li><Link href="/services/weight-management">Weight Management</Link></li>
            <li><Link href="/services/infertility-treatment">Mild Infertility Treatment</Link></li>
          </ul>
        </li>
        <li><Link href="/about">About Us</Link></li>
        <li className={styles.dropdown}>
          <Link href="/providers">Our Providers</Link>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/providers/dr-asbery">David S. Asbery, M.D., FACOG</Link></li>
            <li><Link href="/providers/dr-dudley">Jo Ann Dudley, M.D., FACOG</Link></li>
            <li><Link href="/providers/andrea-briles">Andrea Briles, PA-C</Link></li>
            <li><Link href="/providers/julie-rinehart">Julie Rinehart, CNM, CNP</Link></li>
            <li><Link href="/providers/melissa-klausman">Melissa Klausman, WHNP-BC, CNM</Link></li>
            <li><Link href="/providers/cynthia-phillips">Cynthia Phillips, FNP</Link></li>
            <li><Link href="/providers/paul-havrilka">Paul Havrilka, FNP</Link></li>
          </ul>
        </li>
        <li><Link href="/#locations">Locations</Link></li>
        <li className={styles.dropdown}>
          <Link href="/#resources">Patient Resources</Link>
          <ul className={styles.dropdownMenu}>
            <li><a href="https://pay.instamed.com/Form/PaymentPortal/Default?id=ASBERYANDASSOCIATES" target="_blank" rel="noopener noreferrer">Bill Pay</a></li>
            <li><a href="https://mycw4.eclinicalweb.com/asbe/jsp/100mp/login_otp.jsp" target="_blank" rel="noopener noreferrer">Patient Portal</a></li>
          </ul>
        </li>
        <li>
          <Link href="/request-appointment" className={styles.navCta}>
            Request Appointment
          </Link>
        </li>
      </ul>
    </nav>
  );
}
