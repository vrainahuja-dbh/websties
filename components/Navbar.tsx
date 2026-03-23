"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside nav
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className={styles.nav} ref={navRef}>
      <Link href="/" className={styles.navLogo} onClick={closeMenu}>
        <Image src="/logo.png" alt="Asbery & Associates" width={180} height={90} priority />
      </Link>

      <button
        className={styles.navToggleLabel}
        onClick={() => {
          setMenuOpen(!menuOpen);
          if (menuOpen) setOpenDropdown(null);
        }}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.line1Open : ""} />
        <span className={menuOpen ? styles.line2Open : ""} />
        <span className={menuOpen ? styles.line3Open : ""} />
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
        <li className={styles.dropdown}>
          <button
            className={`${styles.dropdownToggle} ${openDropdown === "services" ? styles.dropdownToggleOpen : ""}`}
            onClick={(e) => toggleDropdown("services", e)}
            aria-expanded={openDropdown === "services"}
          >
            <span className={styles.dropdownLabel}>Services</span>
            <svg className={styles.chevron} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "services" ? styles.dropdownMenuOpen : ""}`}>
            <li><Link href="/services" onClick={closeMenu}>All Services</Link></li>
            <li><Link href="/services/robotic-surgery" onClick={closeMenu}>Robotic &amp; Minimally Invasive Surgery</Link></li>
            <li><Link href="/services/urogynecology" onClick={closeMenu}>Urogynecology</Link></li>
            <li><Link href="/services/hormonal-health" onClick={closeMenu}>Hormonal Health &amp; Pellet Therapy</Link></li>
            <li><Link href="/services/endometriosis" onClick={closeMenu}>Endometriosis &amp; Chronic Pelvic Pain</Link></li>
            <li><Link href="/services/weight-management" onClick={closeMenu}>Weight Management</Link></li>
            <li><Link href="/services/infertility-treatment" onClick={closeMenu}>Mild Infertility Treatment</Link></li>
          </ul>
        </li>

        <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>

        <li className={styles.dropdown}>
          <button
            className={`${styles.dropdownToggle} ${openDropdown === "providers" ? styles.dropdownToggleOpen : ""}`}
            onClick={(e) => toggleDropdown("providers", e)}
            aria-expanded={openDropdown === "providers"}
          >
            <span className={styles.dropdownLabel}>Our Providers</span>
            <svg className={styles.chevron} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "providers" ? styles.dropdownMenuOpen : ""}`}>
            <li><Link href="/providers" onClick={closeMenu}>All Providers</Link></li>
            <li><Link href="/providers/dr-asbery" onClick={closeMenu}>David S. Asbery, M.D., FACOG</Link></li>
            <li><Link href="/providers/dr-dudley" onClick={closeMenu}>Jo Ann Dudley, M.D., FACOG</Link></li>
            <li><Link href="/providers/andrea-briles" onClick={closeMenu}>Andrea Briles, PA-C</Link></li>
            <li><Link href="/providers/julie-rinehart" onClick={closeMenu}>Julie Rinehart, CNM, CNP</Link></li>
            <li><Link href="/providers/melissa-klausman" onClick={closeMenu}>Melissa Klausman, WHNP-BC, CNM</Link></li>
            <li><Link href="/providers/cynthia-phillips" onClick={closeMenu}>Cynthia Phillips, FNP</Link></li>
            <li><Link href="/providers/paul-havrilka" onClick={closeMenu}>Paul Havrilka, FNP</Link></li>
          </ul>
        </li>

        <li><Link href="/locations" onClick={closeMenu}>Locations</Link></li>

        <li className={styles.dropdown}>
          <button
            className={`${styles.dropdownToggle} ${openDropdown === "resources" ? styles.dropdownToggleOpen : ""}`}
            onClick={(e) => toggleDropdown("resources", e)}
            aria-expanded={openDropdown === "resources"}
          >
            <span className={styles.dropdownLabel}>Patient Resources</span>
            <svg className={styles.chevron} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          <ul className={`${styles.dropdownMenu} ${openDropdown === "resources" ? styles.dropdownMenuOpen : ""}`}>
            <li><Link href="/patient-resources/what-to-expect" onClick={closeMenu}>What to Expect</Link></li>
            <li><Link href="/patient-resources/insurance" onClick={closeMenu}>Insurance &amp; Billing</Link></li>
            <li><Link href="/patient-resources/office-policies" onClick={closeMenu}>Office Policies</Link></li>
            <li><a href="https://pay.instamed.com/Form/PaymentPortal/Default?id=ASBERYANDASSOCIATES" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Bill Pay</a></li>
            <li><a href="https://mycw4.eclinicalweb.com/asbe/jsp/100mp/login_otp.jsp" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Patient Portal</a></li>
          </ul>
        </li>

        <li>
          <Link href="/request-appointment" className={styles.navCta} onClick={closeMenu}>
            Request Appointment
          </Link>
        </li>
      </ul>
    </nav>
  );
}
