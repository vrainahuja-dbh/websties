import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Locations — Asbery & Associates",
  description:
    "Visit Asbery & Associates in Mt. Vernon, IL. Serving patients from across Southern Illinois with expert gynecologic care.",
};

export default function LocationsPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="section-label">Our Locations</p>
          <h1 className="section-title" style={{ maxWidth: "none" }}>
            Find Us
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "none" }}>
            Conveniently located in Southern Illinois, serving patients from
            across the region.
          </p>
        </div>
      </section>

      {/* MAIN OFFICE */}
      <section className={styles.locationsList}>
        <div className={styles.locationCard}>
          <div className={styles.locationMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6261.487685612232!2d-88.94725102408306!3d38.30860228123068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8876c7fd8d68fe83%3A0xbeb6c6361d762a9e!2sAsbery%20%26%20Associates%20Ob%2FGyn%20Llc!5e0!3m2!1sen!2sus!4v1774223915756!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Asbery & Associates Main Office"
            />
          </div>
          <div className={styles.locationInfo}>
            <p className={styles.locationLabel}>Main Office</p>
            <h2 className={styles.locationName}>
              Asbery &amp; Associates OB/GYN
            </h2>
            <div className={styles.locationDetails}>
              <div className={styles.locationDetail}>
                <span className={styles.detailIcon}>{"\u{1F4CD}"}</span>
                <p className={styles.detailText}>
                  <strong>Address</strong>
                  333 South 42nd Street<br />
                  Mt. Vernon, IL 62864
                </p>
              </div>
              <div className={styles.locationDetail}>
                <span className={styles.detailIcon}>{"\u{1F4DE}"}</span>
                <p className={styles.detailText}>
                  <strong>Phone</strong>
                  (618) 244-3424
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
              <Link href="/request-appointment" className="btn-plum">
                Request an Appointment
              </Link>
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

      {/* SERVING THE REGION */}
      <section className={styles.regionSection}>
        <div className={styles.regionInner}>
          <p className="section-label" style={{ textAlign: "center" }}>
            Serving Southern Illinois
          </p>
          <h2 className={styles.regionTitle}>
            Patients Travel From Across the Region
          </h2>
          <p className={styles.regionDesc}>
            Our patients come from communities throughout Southern Illinois for
            specialized gynecologic care they can&apos;t find closer to home.
            World-class expertise without the big-city drive.
          </p>
          <div className={styles.regionTags}>
            {[
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
            ].map((city) => (
              <span key={city} className={styles.regionTag}>
                {city}
              </span>
            ))}
            <span
              className={styles.regionTag}
              style={{
                background: "transparent",
                border: "1px dashed var(--light-gray)",
                color: "var(--mid-gray)",
                fontStyle: "italic",
              }}
            >
              + surrounding areas
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Ready to Visit?
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          Schedule Your Appointment
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "16px auto 0", textAlign: "center" }}
        >
          New and returning patients welcome. No referral required for most
          services.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/request-appointment" className="btn-plum">
            Request an Appointment
          </Link>
          <Link href="/#contact" className="btn-sage">
            Call Our Office
          </Link>
        </div>
      </section>
    </main>
  );
}
