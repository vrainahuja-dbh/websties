"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.css";

export default function RequestAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    // TODO: Replace with actual API endpoint
    console.log("Appointment request:", data);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Request an Appointment</h1>
        <p className={styles.heroSubtitle}>
          Fill out the form below and our team will reach out to schedule your visit.
          New and returning patients welcome.
        </p>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>&#10003;</div>
                <h2 className={styles.successTitle}>Request Received</h2>
                <p className={styles.successText}>
                  Thank you! Our team will contact you shortly to confirm your
                  appointment. If you need immediate assistance, please call our office.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="firstName" className={styles.label}>
                      First Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className={styles.input}
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="lastName" className={styles.label}>
                      Last Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className={styles.input}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="(618) 555-0123"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Tell us a little about the reason for your visit, preferred dates/times, or any questions you may have."
                  />
                </div>

                <button type="submit" className={styles.submit} disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <p className="section-label" style={{ textAlign: "center" }}>
          Prefer to Call?
        </p>
        <h2
          className="section-title"
          style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}
        >
          Reach Us by Phone
        </h2>
        <p className={styles.infoText}>
          Most insurance accepted. No referral required for most services. Our
          friendly staff is ready to help you schedule.
        </p>
      </section>
    </main>
  );
}
