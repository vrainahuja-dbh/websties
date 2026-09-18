import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/AppointmentForm";
import PhoneLink from "@/components/PhoneLink";
import StatsStrip from "@/components/StatsStrip";
import MeetTeam from "@/components/MeetTeam";
import MeetSpecialist from "@/components/MeetSpecialist";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Insurance from "@/components/Insurance";
import FirstVisit from "@/components/FirstVisit";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Asbery & Associates OB/GYN — Mt. Vernon, IL Women's Health",
  description:
    "Asbery & Associates has cared for women across Southern Illinois since 1999. Board-certified physicians, nurse practitioners, and certified nurse-midwives in Mt. Vernon. New patients welcome — call (618) 244-4800.",
};

const heroTeam = [
  { name: "David S. Asbery, M.D., FACOG", image: "/providers/Asbery 2020.jpeg" },
  { name: "Jo Ann Dudley, M.D., FACOG", image: "/providers/JoAnn Dudley.jpg" },
  { name: "Andrea Briles, PA-C", image: "/providers/Andrea Briles.jpg" },
  { name: "Julie Rinehart, CNM, CNP", image: "/providers/Julie Rinehart.jpg" },
  { name: "Melissa Klausman, WHNP-BC, CNM", image: "/providers/Klausman.jpg" },
];

const cities = [
  "Mt. Vernon",
  "Centralia",
  "Salem",
  "Effingham",
  "Marion",
  "Carbondale",
  "Harrisburg",
  "Metropolis",
  "Fairfield",
  "Flora",
  "Olney",
  "McLeansboro",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Asbery & Associates OB/GYN",
  medicalSpecialty: "Gynecologic",
  telephone: "+16182444800",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 Cusumano Professional Plaza",
    addressLocality: "Mt. Vernon",
    addressRegion: "IL",
    postalCode: "62864",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  areaServed: cities.map((city) => ({
    "@type": "City",
    name: `${city}, IL`,
  })),
};

export default function ObgynNearMePage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>
            Asbery &amp; Associates OB/GYN · Mt. Vernon, Illinois
          </p>
          <h1 className={styles.heroTitle}>
            Caring for Southern Illinois Women
            <br />
            <em>Since 1999.</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Board-certified physicians, nurse practitioners, and certified
            nurse-midwives under one roof, caring for everything from annual
            wellness visits to advanced robotic surgery. You see the same
            familiar faces every time.
          </p>

          <div className={styles.heroTeam}>
            <div className={styles.heroAvatars}>
              {heroTeam.map((member) => (
                <div key={member.name} className={styles.heroAvatar}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={104}
                    height={104}
                    sizes="52px"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </div>
              ))}
              <div className={styles.heroAvatarMore}>+2</div>
            </div>
            <p className={styles.heroTeamLabel}>
              Seven providers on our care team
            </p>
          </div>

          <ul className={styles.heroProof}>
            <li>8 Cusumano Professional Plaza, Mt. Vernon, IL</li>
            <li>Monday – Friday, 8:00 AM – 5:00 PM</li>
            <li>Most insurance accepted · No referral required for most services</li>
          </ul>
        </div>

        <div className={styles.heroForm} id="book">
          <p className={styles.formEyebrow}>Request an Appointment</p>
          <h2 className={styles.formTitle}>Find the Right Provider for You</h2>
          <p className={styles.formNote}>
            Tell us what you&apos;re looking for and our team will help you find
            the provider who fits. Prefer to talk it through? Call the office
            during business hours.
          </p>
          <AppointmentForm
            id="ads-obgyn-near-me"
            source="Google Ads — OB/GYN Near Me"
            compact
          />
        </div>
      </section>

      <StatsStrip />

      <MeetTeam />
      <MeetSpecialist />

      <section className={styles.locationSection}>
        <div className={styles.locationCard}>
          <div className={styles.locationMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6261.487685612232!2d-88.94725102408306!3d38.30860228123068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8876c7fd8d68fe83%3A0xbeb6c6361d762a9e!2sAsbery%20%26%20Associates%20Ob%2FGyn%20Llc!5e0!3m2!1sen!2sus!4v1774223915756!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Asbery & Associates Main Office in Mt. Vernon, IL"
            />
          </div>
          <div className={styles.locationInfo}>
            <p className={styles.locationLabel}>Conveniently Located</p>
            <h2 className={styles.locationName}>
              Your Local OB/GYN in Mt. Vernon
            </h2>
            <p className={styles.locationIntro}>
              Patients across Southern Illinois choose Asbery &amp; Associates
              for advanced gynecologic care they can reach without leaving the
              region.
            </p>
            <div className={styles.locationDetails}>
              <div className={styles.locationDetail}>
                <span className={styles.detailIcon}>{"\u{1F4CD}"}</span>
                <p className={styles.detailText}>
                  <strong>Address</strong>
                  8 Cusumano Professional Plaza
                  <br />
                  Mt. Vernon, IL 62864
                </p>
              </div>
              <div className={styles.locationDetail}>
                <span className={styles.detailIcon}>{"\u{1F4DE}"}</span>
                <p className={styles.detailText}>
                  <strong>Phone</strong>
                  <PhoneLink>(618) 244-4800</PhoneLink>
                </p>
              </div>
              <div className={styles.locationDetail}>
                <span className={styles.detailIcon}>{"\u{1F552}"}</span>
                <p className={styles.detailText}>
                  <strong>Hours</strong>
                  Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM
                </p>
              </div>
            </div>
            <div className={styles.locationButtons}>
              <a href="#book" className="btn-plum">
                Request an Appointment
              </a>
              <a
                href="https://maps.app.goo.gl/bGvyjjQFn9t1aMX38"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sage"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.regionSection}>
        <div className={styles.regionInner}>
          <p className="section-label" style={{ textAlign: "center" }}>
            Serving Southern Illinois
          </p>
          <h2 className={styles.regionTitle}>
            Nearby Communities We See Patients From
          </h2>
          <p className={styles.regionDesc}>
            Women travel to our Mt. Vernon office from communities throughout
            the region for specialized gynecologic care they can&apos;t find
            closer to home — no big-city drive required.
          </p>
          <div className={styles.regionTags}>
            {cities.map((city) => (
              <span key={city} className={styles.regionTag}>
                {city}
              </span>
            ))}
            <span className={styles.regionTagMore}>+ surrounding areas</span>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Services />
      <FirstVisit />
      <Insurance />
      <Testimonials />
      <CTA />

      <p className={styles.legalNote}>
        Asbery &amp; Associates is a gynecologic-focused OB/GYN practice.{" "}
        <Link href="/locations">View office location</Link>
        {" · "}
        <Link href="/providers">Meet our providers</Link>
      </p>
    </main>
  );
}
