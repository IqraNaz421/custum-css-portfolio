// ContactPage.tsx
import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import "../css-files/contact.css"

const ContactPage: React.FC = () => {
  return (
    <section className="contact-page">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-description">We did love to hear from you! Reach out with any questions feedback or collaborations</p>

      <form className="contact-form">
        <div className="form-group">
          <FaUser className="form-icon" />
          <input type="text" placeholder="Your Name" className="form-input" required />
        </div>

        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input type="email" placeholder="Your Email" className="form-input" required />
        </div>

        <div className="form-group">
          <FaPhone className="form-icon" />
          <input type="tel" placeholder="Your Phone" className="form-input" required />
        </div>

        <div className="form-group">
          <textarea placeholder="Your Message" className="form-textarea" required></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message <FaPaperPlane className="submit-icon" />
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
