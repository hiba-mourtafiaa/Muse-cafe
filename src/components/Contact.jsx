import React, { useState } from "react";
import "./Contact.css";
import hero from "../assets/hero.jfif";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete all fields.",
      });
      return;
    }

    setSending(true);

    try {
      const response = await fetch("http://localhost/muze-api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });
    }

    setSending(false);
  };

  return (
    <main className="contact-page">
      <section
        className="menu-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="menu-overlay"></div>

        <div className="menu-content">
          <span className="menu-label">Visit or write</span>

          <h1>We’d love to welcome you</h1>

          <p>
            For reservations, celebrations, or a simple question, our team is
            here.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h2>Find Müze</h2>

          <div className="contact-item">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <p>Sample Address, Nişantaşı, İstanbul</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 2a15 15 0 0 0 4.5 4.5l2-2.5 5 2v4c0 1-1 2-2 2C10.3 21 3 13.7 3 5c0-1 1-1 2-1Z" />
              </svg>
            </span>
            <p>+90 212 000 00 00</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <p>hello@muzecafe.example</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <p>Mon–Fri 08:00–22:00 · Sat–Sun 09:00–23:00</p>
          </div>

          <div className="map-container">
            <iframe
              title="Müze Cafe Location"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1564.2476062783755!2d33.995414!3d38.360664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d6713dca53bd5f%3A0x325f5fab655c5729!2sM%C3%BCze%20Cafe%20Aksaray!5e0!3m2!1sen!2sus!4v1791213392753!5m2!1sen!2sus"         
            ></iframe>
          </div>
        </div>

        <div className="contact-form-container">
          <span className="form-label">SEND A NOTE</span>

          <h2>How can we help?</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}