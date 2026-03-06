import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Providers — Asbery & Associates",
  description:
    "Meet the providers at Asbery & Associates. Expert gynecologic care from board-certified specialists in Southern Illinois.",
};

const providers = [
  {
    slug: "dr-asbery",
    name: "David S. Asbery, M.D., FACOG",
    title: "Board-Certified OB-GYN Surgeon",
    image: "/providers/Asbery 2020.jpeg",
    specialties: ["Robotic Surgery", "Urogynecology", "Minimally Invasive Surgery"],
    bio: "Dr. Asbery has dedicated his career to bringing world-class gynecologic surgical expertise to Southern Illinois, combining cutting-edge techniques with a personal commitment to listening to each patient.",
  },
  {
    slug: "dr-dudley",
    name: "Jo Ann Dudley, M.D., FACOG",
    title: "Board-Certified OB-GYN Physician",
    image: "/providers/JoAnn Dudley.jpg",
    specialties: ["Obstetrics & Gynecology", "Women\u2019s Health"],
    bio: "Dr. Dudley brings compassionate, comprehensive OB-GYN care to the women of Southern Illinois with a focus on building lasting patient relationships.",
  },
  {
    slug: "andrea-briles",
    name: "Andrea Briles, PA-C",
    title: "Physician Assistant",
    image: "/providers/Andrea Briles.jpg",
    specialties: ["Women\u2019s Health", "Gynecologic Care"],
    bio: "Andrea Briles provides expert gynecologic care as a certified physician assistant, supporting patients with attentive, personalized treatment.",
  },
  {
    slug: "julie-rinehart",
    name: "Julie Rinehart, CNM, CNP",
    title: "Certified Nurse-Midwife & Nurse Practitioner",
    image: "/providers/Julie Rinehart.jpg",
    specialties: ["Midwifery", "Women\u2019s Health", "Primary Care"],
    bio: "Julie Rinehart offers holistic women\u2019s health services as a certified nurse-midwife and nurse practitioner, guiding patients through every stage of care.",
  },
  {
    slug: "melissa-klausman",
    name: "Melissa Klausman, WHNP-BC, CNM",
    title: "Women\u2019s Health Nurse Practitioner & Certified Nurse-Midwife",
    image: "/providers/Klausman.jpg",
    specialties: ["Women\u2019s Health", "Midwifery", "Hormonal Health"],
    bio: "Melissa Klausman specializes in women\u2019s health and midwifery, delivering personalized care rooted in evidence-based practice and patient empowerment.",
  },
  {
    slug: "cynthia-phillips",
    name: "Cynthia Phillips, FNP",
    title: "Family Nurse Practitioner",
    image: "/providers/Phillips.jpg",
    specialties: ["Family Medicine", "Women\u2019s Health"],
    bio: "Cynthia Phillips provides compassionate care as a family nurse practitioner, supporting women\u2019s wellness with a patient-first approach.",
  },
  {
    slug: "paul-havrilka",
    name: "Paul Havrilka, FNP",
    title: "Family Nurse Practitioner",
    image: "/providers/Paul Havrilka.jpg",
    specialties: ["Family Medicine", "Women\u2019s Health"],
    bio: "Paul Havrilka brings dedicated, patient-centered care as a family nurse practitioner, expanding access to quality gynecologic and wellness services.",
  },
];

export default function ProvidersPage() {
  return (
    <main className={styles.providersPage}>
      <section className={styles.providersHero}>
        <div className={styles.providersHeroContent}>
          <p className="section-label">Our Team</p>
          <h1 className="section-title" style={{ maxWidth: "none" }}>
            Our Providers
          </h1>
          <p className="section-subtitle" style={{ maxWidth: "none" }}>
            Expert gynecologic care from specialists who know your name, your
            history, and your goals.
          </p>
        </div>
      </section>

      <section className={styles.providersList}>
        {providers.map((provider) => (
          <Link
            href={`/providers/${provider.slug}`}
            key={provider.slug}
            className={styles.providerCard}
          >
            <div className={styles.providerImageWrap}>
              <Image
                src={provider.image}
                alt={provider.name}
                width={400}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            <div className={styles.providerInfo}>
              <h2 className={styles.providerName}>{provider.name}</h2>
              <p className={styles.providerTitle}>{provider.title}</p>
              <div className={styles.providerSpecialties}>
                {provider.specialties.map((s) => (
                  <span key={s} className={styles.specialtyTag}>
                    {s}
                  </span>
                ))}
              </div>
              <p className={styles.providerBio}>{provider.bio}</p>
              <span className={styles.providerLink}>
                View Full Profile &rarr;
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
