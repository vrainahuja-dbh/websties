"use client";

import { useState, FormEvent } from "react";
import styles from "./AppointmentForm.module.css";
import PhoneLink from "@/components/PhoneLink";

type AppointmentFormProps = {
  source?: string;
  id?: string;
  compact?: boolean;
};

export default function AppointmentForm({
  source,
  id,
  compact = false,
}: AppointmentFormProps) {
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
      source: source ?? "Website",
    };

    const res = await fetch("/api/request-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSubmitting(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please call our office or try again.");
    }
  };

  return (
    <div className={`${styles.formCard} ${compact ? styles.compact : ""}`} id={id}>
      {submitted ? (
        <div className={styles.success}>
          <div className={styles.successIcon}>&#10003;</div>
          <h2 className={styles.successTitle}>Request Received</h2>
          <p className={styles.successText}>
            Thank you! Our team will contact you shortly to confirm your
            appointment. If you need immediate assistance, please call our office.
          </p>
          <PhoneLink className="btn-plum" style={{ marginTop: 24 }}>
            Call (618) 244-4800
          </PhoneLink>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor={`${id ?? "appt"}-firstName`} className={styles.label}>
                First Name <span className={styles.required}>*</span>
              </label>
              <input
                id={`${id ?? "appt"}-firstName`}
                name="firstName"
                type="text"
                className={styles.input}
                placeholder="Jane"
                autoComplete="given-name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${id ?? "appt"}-lastName`} className={styles.label}>
                Last Name <span className={styles.required}>*</span>
              </label>
              <input
                id={`${id ?? "appt"}-lastName`}
                name="lastName"
                type="text"
                className={styles.input}
                placeholder="Doe"
                autoComplete="family-name"
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor={`${id ?? "appt"}-email`} className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                id={`${id ?? "appt"}-email`}
                name="email"
                type="email"
                className={styles.input}
                placeholder="jane@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`${id ?? "appt"}-phone`} className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                id={`${id ?? "appt"}-phone`}
                name="phone"
                type="tel"
                className={styles.input}
                placeholder="(618) 555-0123"
                autoComplete="tel"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor={`${id ?? "appt"}-message`} className={styles.label}>
              Message
            </label>
            <textarea
              id={`${id ?? "appt"}-message`}
              name="message"
              className={styles.textarea}
              placeholder="Tell us a little about the reason for your visit, preferred dates/times, or any questions you may have."
            />
          </div>

          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? "Submitting..." : "Request Appointment"}
          </button>
        </form>
      )}
    </div>
  );
}
