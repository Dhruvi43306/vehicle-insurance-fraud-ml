
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Clock3,
  Headphones,
  ChevronRight,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);

      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.08), transparent 28%),
            radial-gradient(circle at 90% 20%, rgba(99, 102, 241, 0.07), transparent 30%),
            #f8fafc;
          color: #0f172a;
          padding: 60px 20px 90px;
          position: relative;
          overflow: hidden;
        }

        .contact-page::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.06);
          filter: blur(70px);
          top: -180px;
          left: -150px;
          pointer-events: none;
        }

        .contact-page::after {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.05);
          filter: blur(80px);
          right: -150px;
          bottom: -120px;
          pointer-events: none;
        }

        .contact-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ================= HEADER ================= */

        .contact-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 52px;
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          color: #2563eb;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .contact-eyebrow svg {
          width: 14px;
          height: 14px;
        }

        .contact-title {
          margin: 0;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.04;
          letter-spacing: -0.045em;
          font-weight: 850;
          color: #0f172a;
        }

        .contact-title-gradient {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-subtitle {
          margin: 20px auto 0;
          max-width: 680px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.75;
        }

        /* ================= MAIN GRID ================= */

        .contact-main-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 26px;
          align-items: stretch;
        }

        /* ================= LEFT PANEL ================= */

        .contact-info-panel {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          padding: 34px;
          background: linear-gradient(145deg, #0f172a, #172554);
          color: white;
          box-shadow:
            0 25px 60px rgba(15, 23, 42, 0.16),
            0 8px 24px rgba(15, 23, 42, 0.08);
        }

        .contact-info-panel::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.22);
          filter: blur(65px);
          right: -120px;
          top: -100px;
        }

        .contact-info-panel::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.15);
          filter: blur(60px);
          left: -100px;
          bottom: -90px;
        }

        .info-content {
          position: relative;
          z-index: 2;
        }

        .info-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 11px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #bfdbfe;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .info-top-badge svg {
          width: 14px;
          height: 14px;
        }

        .contact-info-panel h2 {
          margin: 22px 0 12px;
          font-size: 32px;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .contact-panel-desc {
          margin: 0 0 28px;
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.75;
        }

        /* ================= CONTACT CARDS ================= */

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.09);
          transition: all 0.25s ease;
        }

        .contact-method-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.11);
          border-color: rgba(147, 197, 253, 0.28);
        }

        .method-icon-box {
          width: 44px;
          height: 44px;
          min-width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: rgba(59, 130, 246, 0.17);
          color: #93c5fd;
        }

        .method-details {
          min-width: 0;
        }

        .method-details h4 {
          margin: 0 0 4px;
          color: white;
          font-size: 13px;
          font-weight: 750;
        }

        .method-details a,
        .method-details p {
          display: block;
          margin: 0;
          color: #e2e8f0;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.5;
          word-break: break-word;
        }

        .method-details a:hover {
          color: #93c5fd;
        }

        .demo-notice {
          display: inline-block;
          margin-top: 4px;
          color: #94a3b8;
          font-size: 10px;
        }

        /* ================= SUPPORT BOX ================= */

        .support-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
          padding: 14px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .support-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: rgba(16, 185, 129, 0.13);
          color: #6ee7b7;
        }

        .support-box strong {
          display: block;
          color: white;
          font-size: 12px;
          margin-bottom: 3px;
        }

        .support-box span {
          color: #94a3b8;
          font-size: 11px;
        }

        /* ================= RIGHT FORM ================= */

        .contact-form-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          box-shadow:
            0 20px 50px rgba(15, 23, 42, 0.07),
            0 4px 15px rgba(15, 23, 42, 0.03);
        }

        .form-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 28px;
        }

        .form-heading h2 {
          margin: 0;
          color: #0f172a;
          font-size: 27px;
          letter-spacing: -0.025em;
        }

        .form-heading p {
          margin: 7px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.6;
        }

        .form-heading-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #dbeafe;
        }

        /* ================= SUCCESS ================= */

        .success-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          margin-bottom: 22px;
          border-radius: 14px;
          background: #ecfdf5;
          border: 1px solid #bbf7d0;
          color: #166534;
        }

        .success-banner-icon {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .success-banner-text {
          font-size: 13px;
          line-height: 1.5;
        }

        .success-banner-text strong {
          font-weight: 800;
        }

        /* ================= FORM ================= */

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: #334155;
          font-size: 12px;
          font-weight: 750;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
          transition: color 0.2s ease;
        }

        .textarea-icon {
          top: 16px;
          transform: none;
        }

        .form-input {
          width: 100%;
          border: 1px solid #dbe3ed;
          border-radius: 13px;
          background: #f8fafc;
          color: #0f172a;
          padding: 13px 14px 13px 43px;
          font-size: 13px;
          outline: none;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
          font-family: inherit;
        }

        .form-input::placeholder {
          color: #94a3b8;
        }

        .form-input:hover {
          border-color: #cbd5e1;
          background: white;
        }

        .form-input:focus {
          border-color: #60a5fa;
          background: white;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.09);
        }

        .input-wrapper:focus-within .input-icon {
          color: #2563eb;
        }

        textarea.form-input {
          min-height: 140px;
          resize: vertical;
          line-height: 1.6;
          padding-top: 14px;
        }

        .input-error {
          border-color: #f87171 !important;
          background: #fffafa;
        }

        .input-error:focus {
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.08);
        }

        .error-message {
          color: #dc2626;
          font-size: 11px;
          font-weight: 600;
        }

        /* ================= SUBMIT ================= */

        .form-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          border-radius: 13px;
          padding: 14px 18px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 10px 22px rgba(37, 99, 235, 0.2);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(37, 99, 235, 0.28);
        }

        .form-submit-btn:active {
          transform: translateY(0);
        }

        /* ================= BOTTOM INFO ================= */

        .contact-bottom-strip {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .bottom-info-card {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px 16px;
          border: 1px solid #e2e8f0;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 15px;
        }

        .bottom-info-icon {
          width: 34px;
          height: 34px;
          min-width: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #f1f5f9;
          color: #475569;
        }

        .bottom-info-card strong {
          display: block;
          color: #334155;
          font-size: 11px;
          margin-bottom: 2px;
        }

        .bottom-info-card span {
          color: #64748b;
          font-size: 10px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-panel {
            min-height: auto;
          }

          .contact-bottom-strip {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-page {
            padding: 38px 14px 60px;
          }

          .contact-header {
            margin-bottom: 34px;
          }

          .contact-title {
            font-size: 40px;
          }

          .contact-subtitle {
            font-size: 14px;
          }

          .contact-info-panel,
          .contact-form-panel {
            padding: 23px;
            border-radius: 22px;
          }

          .contact-info-panel h2 {
            font-size: 27px;
          }

          .form-heading {
            margin-bottom: 22px;
          }

          .form-heading h2 {
            font-size: 23px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-method-card {
            padding: 13px;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .contact-header,
          .contact-info-panel,
          .contact-form-panel {
            animation: contactFadeUp 0.6s ease both;
          }

          .contact-form-panel {
            animation-delay: 0.08s;
          }

          @keyframes contactFadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>

      <div className="contact-page">
        <div className="contact-container">

          {/* ================= HEADER ================= */}

          <header className="contact-header">
            <div className="contact-eyebrow">
              <Sparkles size={14} />
              FraudShield AI Support
            </div>

            <h1 className="contact-title">
              Let's Start a
              <br />
              <span className="contact-title-gradient">
                Conversation
              </span>
            </h1>

            <p className="contact-subtitle">
              Have questions about the fraud detection model, prediction
              workflow, or project architecture? Our team is here to help
              you understand the FraudShield AI platform.
            </p>
          </header>

          {/* ================= MAIN CONTENT ================= */}

          <div className="contact-main-grid">

            {/* ================= LEFT ================= */}

            <section className="contact-info-panel">
              <div className="info-content">

                <div className="info-top-badge">
                  <ShieldCheck size={14} />
                  Secure Support Channel
                </div>

                <h2>Let's Connect</h2>

                <p className="contact-panel-desc">
                  Whether you want to understand the machine-learning
                  pipeline, discuss model integration, or learn more about
                  the application, send us a message and we'll point you
                  in the right direction.
                </p>

                <div className="contact-methods">

                  {/* EMAIL */}

                  <div className="contact-method-card">
                    <div className="method-icon-box">
                      <Mail size={19} />
                    </div>

                    <div className="method-details">
                      <h4>Email</h4>

                      <a href="mailto:support@fraudshield.ai">
                        support@fraudshield.ai
                      </a>

                      <span className="demo-notice">
                        Demo Inbox Only
                      </span>
                    </div>
                  </div>

                  {/* PHONE */}

                  <div className="contact-method-card">
                    <div className="method-icon-box">
                      <Phone size={19} />
                    </div>

                    <div className="method-details">
                      <h4>Phone</h4>

                      <a href="tel:+919876543210">
                        +91 98765 43210
                      </a>

                      <span className="demo-notice">
                        Demo Line Only
                      </span>
                    </div>
                  </div>

                  {/* LOCATION */}

                  <div className="contact-method-card">
                    <div className="method-icon-box">
                      <MapPin size={19} />
                    </div>

                    <div className="method-details">
                      <h4>Location</h4>

                      <p>Gujarat, India</p>

                      <span className="demo-notice">
                        Demo Location Only
                      </span>
                    </div>
                  </div>

                </div>

                {/* SUPPORT BOX */}

                <div className="support-box">
                  <div className="support-icon">
                    <Headphones size={18} />
                  </div>

                  <div>
                    <strong>Need technical assistance?</strong>
                    <span>
                      Send your question using the form →
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    style={{
                      marginLeft: 'auto',
                      color: '#64748b',
                    }}
                  />
                </div>

              </div>
            </section>

            {/* ================= RIGHT ================= */}

            <section className="contact-form-panel">

              <div className="form-heading">
                <div>
                  <h2>Send a Message</h2>

                  <p>
                    Fill out the form and tell us how we can help.
                  </p>
                </div>

                <div className="form-heading-icon">
                  <MessageSquare size={21} />
                </div>
              </div>

              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="success-banner">
                  <CheckCircle2
                    className="success-banner-icon"
                    size={20}
                  />

                  <div className="success-banner-text">
                    <strong>Message submitted successfully.</strong>
                    <br />
                    Thank you for contacting FraudShield AI.
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
              >

                {/* NAME + EMAIL */}

                <div className="form-row">

                  {/* NAME */}

                  <div className="form-group">
                    <label htmlFor="fullName">
                      Full Name *
                    </label>

                    <div className="input-wrapper">

                      <UserIcon />

                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={
                          errors.fullName
                            ? 'form-input input-error'
                            : 'form-input'
                        }
                      />

                    </div>

                    {errors.fullName && (
                      <span className="error-message">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address *
                    </label>

                    <div className="input-wrapper">

                      <Mail
                        className="input-icon"
                        size={17}
                      />

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john.doe@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={
                          errors.email
                            ? 'form-input input-error'
                            : 'form-input'
                        }
                      />

                    </div>

                    {errors.email && (
                      <span className="error-message">
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* SUBJECT */}

                <div className="form-group">
                  <label htmlFor="subject">
                    Subject *
                  </label>

                  <div className="input-wrapper">

                    <MessageSquare
                      className="input-icon"
                      size={17}
                    />

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Integration Query"
                      value={formData.subject}
                      onChange={handleChange}
                      className={
                        errors.subject
                          ? 'form-input input-error'
                          : 'form-input'
                      }
                    />

                  </div>

                  {errors.subject && (
                    <span className="error-message">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* MESSAGE */}

                <div className="form-group">
                  <label htmlFor="message">
                    Message *
                  </label>

                  <div className="input-wrapper">

                    <MessageSquare
                      className="input-icon textarea-icon"
                      size={17}
                    />

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      className={
                        errors.message
                          ? 'form-input input-error'
                          : 'form-input'
                      }
                    />

                  </div>

                  {errors.message && (
                    <span className="error-message">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="form-submit-btn"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>

              </form>
            </section>

          </div>

          {/* ================= BOTTOM INFORMATION ================= */}

          <div className="contact-bottom-strip">

            <div className="bottom-info-card">
              <div className="bottom-info-icon">
                <Clock3 size={17} />
              </div>

              <div>
                <strong>Response Time</strong>
                <span>Usually within 24 hours</span>
              </div>
            </div>

            <div className="bottom-info-card">
              <div className="bottom-info-icon">
                <ShieldCheck size={17} />
              </div>

              <div>
                <strong>Secure Communication</strong>
                <span>Your message stays private</span>
              </div>
            </div>

            <div className="bottom-info-card">
              <div className="bottom-info-icon">
                <ArrowRight size={17} />
              </div>

              <div>
                <strong>Project Assistance</strong>
                <span>Model & application questions</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

/* Small reusable icon component */
function UserIcon() {
  return (
    <svg
      className="input-icon"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

