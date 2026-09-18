"use client";

import { useState } from "react";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { site, contactCopy } from "@/config/site";
import styles from "./page.module.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  designation: "",
  message: "",
  purpose: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{10}$/;

function validateField(name, value) {
  switch (name) {
    case "firstName":
      return value.trim() ? "" : "First name is required.";
    case "lastName":
      return value.trim() ? "" : "Last name is required.";
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!EMAIL_RE.test(value.trim())) return "Enter a valid email address.";
      return "";
    case "phone":
      if (!value.trim()) return ""; // optional
      return PHONE_RE.test(value.trim())
        ? ""
        : "Enter a valid 10-digit phone number.";
    case "purpose":
      return value ? "" : "Please select a purpose of enquiry.";
    default:
      return "";
  }
}

function validateAll(values) {
  const errors = {};
  Object.keys(values).forEach((name) => {
    const message = validateField(name, values[name]);
    if (message) errors[name] = message;
  });
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateAll(form);
    setErrors(validationErrors);
    setTouched(
      Object.keys(initialForm).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    // No backend is wired up yet — replace this with an API call
    // (e.g. POST to /api/contact) once you have somewhere to send it.
    console.log("Contact form submitted:", form);
    setStatus("sent");
    setForm(initialForm);
    setTouched({});
    setErrors({});
  }

  function fieldClass(name) {
    return `${styles.field} ${errors[name] ? styles.fieldError : ""}`;
  }

  return (
    <main className={styles.page}>
      <SiteChrome />

      <section className={styles.headerRow}>
        {/* <h1 className={styles.pageTitle}>{contactCopy.heading}</h1> */}
      </section>

      <section className={styles.grid}>
        {/* ---- Left column: map + directions ---- */}
        <div className={styles.mapCol}>
          <div className={styles.mapFrame}>
            <iframe
              src={contactCopy.map.embedSrc}
              title="Studio location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          </div>

          <h3 className={styles.howTitle}>{contactCopy.map.heading}</h3>
          {contactCopy.map.lines.map((line) => (
            <p key={line} className={styles.howLine}>
              {line}
            </p>
          ))}
          <a
            href={contactCopy.map.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsLink}
          >
            {contactCopy.map.directionsLabel}
          </a>
        </div>

        {/* ---- Right column: form + studio info ---- */}
        <div className={styles.formCol}>
          <h2 className={styles.formHeading}>CONTACT</h2>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.fieldRow}>
              <div className={fieldClass("firstName")}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  aria-label="first name"
                  value={form.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && (
                  <span className={styles.errorText}>{errors.firstName}</span>
                )}
              </div>
              <div className={fieldClass("lastName")}>
                <input
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  aria-label="last name"
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && (
                  <span className={styles.errorText}>{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={fieldClass("email")}>
                <input
                  type="email"
                  name="email"
                  placeholder="email ID"
                  aria-label="email ID"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>
              <div className={fieldClass("phone")}>
                <div className={styles.phoneInput}>
                  <span className={styles.phonePrefix}>+91</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="phone number"
                    aria-label="phone number"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.phone && (
                  <span className={styles.errorText}>{errors.phone}</span>
                )}
              </div>
            </div>

            <div className={styles.fieldRow}>
              <div className={fieldClass("company")}>
                <input
                  type="text"
                  name="company"
                  placeholder="company name"
                  aria-label="company name"
                  value={form.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className={fieldClass("designation")}>
                <input
                  type="text"
                  name="designation"
                  placeholder="designation"
                  aria-label="designation"
                  value={form.designation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div className={`${fieldClass("message")} ${styles.fieldFull}`}>
              <input
                type="text"
                name="message"
                placeholder="your questions or comments"
                aria-label="your questions or comments"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className={`${fieldClass("purpose")} ${styles.fieldFull}`}>
              <select
                name="purpose"
                aria-label="purpose of enquiry"
                value={form.purpose}
                onChange={handleChange}
                onBlur={handleBlur}
                className={form.purpose ? "" : styles.placeholderOption}
              >
                <option value="" disabled>
                  purpose of enquiry
                </option>
                {contactCopy.purposeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.purpose && (
                <span className={styles.errorText}>{errors.purpose}</span>
              )}
            </div>

            <button type="submit" className={styles.submit}>
              Submit
            </button>

            {status === "sent" && (
              <p className={styles.successNote} role="status">
                Thanks — we&apos;ve received your message and will be in
                touch shortly.
              </p>
            )}
          </form>

          <div className={styles.studioInfo}>
            <p className={styles.studioName}>
              {site.name} {site.handle}
            </p>
            <p className={styles.address}>{site.contact.address}</p>

            <p className={styles.whatsapp}>
              Whatsapp: {contactCopy.whatsapp}
            </p>

            <p className={styles.emailLabel}>Email:</p>
            <div className={styles.emailList}>
              {contactCopy.emails.map((row) => (
                <div key={row.label} className={styles.emailRow}>
                  <span className={styles.emailKey}>{row.label}</span>
                  <a href={`mailto:${row.value}`} className={styles.emailValue}>
                    {row.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}