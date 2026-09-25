
import React from "react";
import {
  Search,
  Cpu,
  BarChart2,
  CheckCircle2,
  UserCheck,
  Car,
  FileText,
  DollarSign,
  Info,
  Shield,
  Layers,
  Activity,
  Sparkles,
  ChevronRight,
  Sun,
  Layout,
  Sliders,
  ArrowUpRight,
  Database,
  Brain,
  Zap,
  Target,
  Workflow,
  CircleCheck,
} from "lucide-react";

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8fbff 0%, #ffffff 35%, #f8fafc 100%)",
        color: "#172033",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        * {
          box-sizing: border-box;
        }

        .about-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .about-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 50px 0 80px;
        }

        .hero-about {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          padding: 65px 60px;
          background:
            radial-gradient(circle at 85% 15%, rgba(99,102,241,.14), transparent 30%),
            radial-gradient(circle at 15% 90%, rgba(14,165,233,.12), transparent 30%),
            #ffffff;
          border: 1px solid #e6edf7;
          box-shadow: 0 25px 70px rgba(30, 64, 175, .08);
        }

        .hero-about::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border: 1px solid rgba(99,102,241,.08);
          border-radius: 50%;
          right: -180px;
          top: -190px;
        }

        .hero-about::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border: 1px solid rgba(14,165,233,.08);
          border-radius: 50%;
          right: -110px;
          top: -120px;
        }

        .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 60px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border-radius: 999px;
          background: #eef4ff;
          border: 1px solid #dce8ff;
          color: #4169d8;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 22px 0 18px;
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -0.055em;
          font-weight: 900;
          color: #172033;
        }

        .gradient-title {
          background: linear-gradient(90deg, #2563eb, #6366f1, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 680px;
          margin: 0;
          color: #64748b;
          font-size: 17px;
          line-height: 1.8;
        }

        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 27px;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e5eaf1;
          color: #475569;
          font-size: 13px;
          font-weight: 700;
        }

        .hero-visual {
          position: relative;
          min-height: 390px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-orbit {
          position: absolute;
          width: 310px;
          height: 310px;
          border: 1px dashed #cbd5e1;
          border-radius: 50%;
          animation: rotateOrbit 22s linear infinite;
        }

        .visual-orbit::before,
        .visual-orbit::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 18px rgba(59,130,246,.5);
        }

        .visual-orbit::before {
          top: 12px;
          left: 50%;
        }

        .visual-orbit::after {
          bottom: 20px;
          right: 25px;
          background: #8b5cf6;
        }

        .core-card {
          position: relative;
          z-index: 3;
          width: 245px;
          padding: 25px;
          border-radius: 25px;
          background: rgba(255,255,255,.94);
          border: 1px solid #e2e8f0;
          box-shadow: 0 25px 60px rgba(15,23,42,.12);
          text-align: center;
          animation: floatCard 4s ease-in-out infinite;
        }

        .core-icon {
          width: 76px;
          height: 76px;
          margin: 0 auto 18px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          color: #2563eb;
          background: linear-gradient(135deg, #eff6ff, #eef2ff);
          box-shadow: inset 0 0 0 1px #dbeafe;
        }

        .core-card h3 {
          margin: 0 0 8px;
          font-size: 19px;
          font-weight: 850;
        }

        .core-card p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.6;
        }

        .mini-floating {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 13px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 13px;
          box-shadow: 0 14px 35px rgba(15,23,42,.1);
          font-size: 12px;
          font-weight: 800;
          color: #334155;
        }

        .mini-floating.one {
          top: 38px;
          left: 5px;
        }

        .mini-floating.two {
          right: 0;
          bottom: 45px;
        }

        .mini-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 10px rgba(34,197,94,.5);
        }

        .section {
          margin-top: 95px;
        }

        .section-heading {
          max-width: 700px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 13px 0 12px;
          font-size: clamp(30px, 4vw, 43px);
          letter-spacing: -.035em;
          color: #172033;
          font-weight: 900;
        }

        .section-heading p {
          margin: 0;
          color: #64748b;
          line-height: 1.75;
          font-size: 15px;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 22px;
        }

        .story-card {
          padding: 35px;
          border-radius: 24px;
          background: #fff;
          border: 1px solid #e5eaf1;
          box-shadow: 0 15px 45px rgba(15,23,42,.055);
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }

        .story-card:hover {
          transform: translateY(-7px);
          border-color: #bfdbfe;
          box-shadow: 0 24px 55px rgba(37,99,235,.11);
        }

        .story-card h3 {
          margin: 16px 0 13px;
          font-size: 25px;
          font-weight: 850;
        }

        .story-card p {
          margin: 0 0 13px;
          color: #64748b;
          line-height: 1.8;
          font-size: 14px;
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 23px;
        }

        .soft-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          font-size: 12px;
          font-weight: 750;
        }

        .flow-list {
          display: grid;
          gap: 13px;
          margin-top: 20px;
        }

        .flow-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px;
          border-radius: 15px;
          background: #f8fafc;
          border: 1px solid #e8edf4;
          transition: all .25s ease;
        }

        .flow-item:hover {
          transform: translateX(6px);
          background: #f0f6ff;
          border-color: #bfdbfe;
        }

        .flow-icon {
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #fff;
          color: #2563eb;
          box-shadow: 0 5px 15px rgba(15,23,42,.06);
        }

        .flow-item strong {
          display: block;
          color: #334155;
          font-size: 13px;
        }

        .flow-item span {
          display: block;
          margin-top: 3px;
          color: #94a3b8;
          font-size: 11px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .feature-card {
          position: relative;
          overflow: hidden;
          padding: 25px;
          min-height: 205px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid #e5eaf1;
          box-shadow: 0 12px 35px rgba(15,23,42,.045);
          transition: all .3s ease;
        }

        .feature-card::after {
          content: "";
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          right: -55px;
          top: -55px;
          background: #eff6ff;
          transition: transform .35s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: #bfdbfe;
          box-shadow: 0 22px 50px rgba(37,99,235,.1);
        }

        .feature-card:hover::after {
          transform: scale(1.5);
        }

        .feature-icon {
          position: relative;
          z-index: 2;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          color: #2563eb;
          background: #eff6ff;
          margin-bottom: 19px;
        }

        .feature-card h3 {
          position: relative;
          z-index: 2;
          margin: 0 0 9px;
          font-size: 16px;
          font-weight: 850;
        }

        .feature-card p {
          position: relative;
          z-index: 2;
          margin: 0;
          color: #64748b;
          line-height: 1.65;
          font-size: 13px;
        }

        .pipeline {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pipeline-node {
          width: 145px;
          min-height: 135px;
          padding: 18px 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: #fff;
          border: 1px solid #e5eaf1;
          border-radius: 19px;
          box-shadow: 0 10px 30px rgba(15,23,42,.045);
          transition: all .3s ease;
        }

        .pipeline-node:hover {
          transform: translateY(-8px) scale(1.025);
          border-color: #93c5fd;
          box-shadow: 0 20px 40px rgba(37,99,235,.12);
        }

        .pipeline-node-icon {
          width: 47px;
          height: 47px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #2563eb;
          background: #eff6ff;
          margin-bottom: 12px;
        }

        .pipeline-node strong {
          font-size: 11px;
          letter-spacing: .06em;
          color: #334155;
        }

        .pipeline-arrow {
          color: #94a3b8;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 17px;
        }

        .process-card {
          position: relative;
          padding: 25px;
          min-height: 210px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid #e5eaf1;
          transition: all .3s ease;
        }

        .process-card:hover {
          transform: translateY(-7px);
          border-color: #c7d2fe;
          box-shadow: 0 22px 45px rgba(79,70,229,.1);
        }

        .process-number {
          display: inline-grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 11px;
          background: #eef2ff;
          color: #4f46e5;
          font-weight: 900;
          font-size: 12px;
          margin-bottom: 20px;
        }

        .process-card h3 {
          margin: 0 0 10px;
          font-size: 16px;
          font-weight: 850;
        }

        .process-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.65;
          font-size: 13px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .metric-card {
          position: relative;
          overflow: hidden;
          padding: 28px;
          border-radius: 21px;
          background: #fff;
          border: 1px solid #e5eaf1;
          transition: all .3s ease;
        }

        .metric-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(15,23,42,.08);
        }

        .metric-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #64748b;
          font-size: 12px;
          font-weight: 750;
        }

        .metric-icon {
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: #2563eb;
          background: #eff6ff;
        }

        .metric-value {
          margin-top: 18px;
          font-size: 31px;
          font-weight: 900;
          letter-spacing: -.04em;
          color: #172033;
        }

        .metric-description {
          margin-top: 5px;
          color: #94a3b8;
          font-size: 12px;
        }

        .responsible-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .responsible-card {
          display: flex;
          gap: 18px;
          padding: 28px;
          border-radius: 21px;
          background: #fff;
          border: 1px solid #e5eaf1;
          transition: all .3s ease;
        }

        .responsible-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 45px rgba(15,23,42,.07);
        }

        .responsible-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #2563eb;
          background: #eff6ff;
        }

        .responsible-card h3 {
          margin: 0 0 9px;
          font-size: 17px;
          font-weight: 850;
        }

        .responsible-card p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        .cta {
          position: relative;
          overflow: hidden;
          margin-top: 95px;
          padding: 55px;
          border-radius: 28px;
          background:
            radial-gradient(circle at 85% 20%, rgba(99,102,241,.18), transparent 30%),
            radial-gradient(circle at 10% 80%, rgba(14,165,233,.15), transparent 30%),
            #f8fbff;
          border: 1px solid #dce8f7;
          text-align: center;
        }

        .cta h2 {
          margin: 0 0 12px;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 900;
          letter-spacing: -.035em;
        }

        .cta p {
          max-width: 620px;
          margin: 0 auto;
          color: #64748b;
          line-height: 1.7;
          font-size: 14px;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 18px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid #dbeafe;
          color: #2563eb;
          font-size: 11px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }

        @keyframes rotateOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 950px) {
          .hero-grid,
          .story-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: 330px;
          }

          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .about-container {
            width: min(100% - 24px, 1180px);
            padding-top: 25px;
          }

          .hero-about {
            padding: 40px 25px;
            border-radius: 23px;
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-description {
            font-size: 15px;
          }

          .visual-orbit {
            width: 260px;
            height: 260px;
          }

          .mini-floating.one {
            left: 0;
          }

          .mini-floating.two {
            right: 0;
          }

          .section {
            margin-top: 65px;
          }

          .cards-grid,
          .process-grid,
          .metrics-grid,
          .responsible-grid {
            grid-template-columns: 1fr;
          }

          .pipeline {
            flex-direction: column;
          }

          .pipeline-arrow {
            transform: rotate(90deg);
          }

          .story-card {
            padding: 25px;
          }

          .cta {
            padding: 40px 25px;
            margin-top: 65px;
          }
        }
      `}</style>

      <main className="about-wrapper">
        <div className="about-container">

          {/* HERO */}
          <section className="hero-about">
            <div className="hero-grid">

              <div>
                <span className="eyebrow">
                  <Sparkles size={14} />
                  AI Insurance Analytics
                </span>

                <h1 className="hero-title">
                  Understanding Claims
                  <br />
                  <span className="gradient-title">
                    Through Machine Learning
                  </span>
                </h1>

                <p className="hero-description">
                  FraudShield AI is an educational machine-learning project
                  that demonstrates how vehicle insurance claim information
                  can be transformed, processed and evaluated through a
                  classification pipeline.
                </p>

                <div className="hero-pills">
                  <div className="hero-pill">
                    <Shield size={14} />
                    Secure Analysis
                  </div>

                  <div className="hero-pill">
                    <Brain size={14} />
                    ML Powered
                  </div>

                  <div className="hero-pill">
                    <Database size={14} />
                    12,002 Records
                  </div>

                  <div className="hero-pill">
                    <Layers size={14} />
                    24 Model Inputs
                  </div>
                </div>
              </div>

              <div className="hero-visual">

                <div className="visual-orbit"></div>

                <div className="mini-floating one">
                  <span className="mini-dot"></span>
                  Model Online
                </div>

                <div className="mini-floating two">
                  <Zap size={14} color="#6366f1" />
                  Fast Inference
                </div>

                <div className="core-card">
                  <div className="core-icon">
                    <Brain size={38} />
                  </div>

                  <h3>FraudShield AI</h3>

                  <p>
                    Machine-learning powered claim analysis and prediction
                    workflow.
                  </p>

                  <div
                    style={{
                      marginTop: 18,
                      display: "flex",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#22c55e",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color: "#64748b",
                        fontWeight: 700,
                      }}
                    >
                      SYSTEM READY
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* PROJECT STORY */}
          <section className="section">
            <div className="section-heading">
              <span className="eyebrow">
                <Sparkles size={13} />
                Project Story
              </span>

              <h2>From Claim Data to Prediction</h2>

              <p>
                The project combines a simple web interface with a machine
                learning pipeline to demonstrate the complete prediction
                workflow.
              </p>
            </div>

            <div className="story-grid">

              <div className="story-card">
                <div className="feature-icon">
                  <Target size={22} />
                </div>

                <h3>What is FraudShield AI?</h3>

                <p>
                  FraudShield AI explores how historical vehicle insurance
                  claim information can be used to discover patterns that may
                  be associated with potentially suspicious claims.
                </p>

                <p>
                  Users provide driver, vehicle, claim and financial
                  information. The application prepares the values and sends
                  them through the machine-learning prediction pipeline.
                </p>

                <div className="badge-row">
                  <div className="soft-badge">
                    <UserCheck size={14} />
                    Driver Data
                  </div>

                  <div className="soft-badge">
                    <Car size={14} />
                    Vehicle Data
                  </div>

                  <div className="soft-badge">
                    <DollarSign size={14} />
                    Financial Data
                  </div>
                </div>
              </div>

              <div className="story-card">
                <div className="feature-icon">
                  <Workflow size={22} />
                </div>

                <h3>Interactive Input Flow</h3>

                <div className="flow-list">

                  <div className="flow-item">
                    <div className="flow-icon">
                      <UserCheck size={18} />
                    </div>

                    <div>
                      <strong>Driver & Vehicle Profile</strong>
                      <span>Personal and vehicle attributes</span>
                    </div>
                  </div>

                  <div className="flow-item">
                    <div className="flow-icon">
                      <FileText size={18} />
                    </div>

                    <div>
                      <strong>Claim & Financial Data</strong>
                      <span>Incident and monetary information</span>
                    </div>
                  </div>

                  <div className="flow-item">
                    <div className="flow-icon">
                      <Cpu size={18} />
                    </div>

                    <div>
                      <strong>Machine Learning Engine</strong>
                      <span>Processes prepared model inputs</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* WHY PROJECT */}
          <section className="section">

            <div className="section-heading">
              <span className="eyebrow">
                <Target size={13} />
                Project Objectives
              </span>

              <h2>Why This Project?</h2>

              <p>
                The application demonstrates the complete journey from raw
                insurance information to an ML-based analytical result.
              </p>
            </div>

            <div className="cards-grid">

              {[
                {
                  icon: <Search size={21} />,
                  title: "Understand Claim Patterns",
                  text: "Explore structural patterns and unusual characteristics across historical claim information.",
                },
                {
                  icon: <Cpu size={21} />,
                  title: "Explore Machine Learning",
                  text: "Apply classification techniques to real-world style insurance claim data.",
                },
                {
                  icon: <Layers size={21} />,
                  title: "Process Multiple Attributes",
                  text: "Combine driver, vehicle, claim and financial variables into model-ready inputs.",
                },
                {
                  icon: <BarChart2 size={21} />,
                  title: "Generate Predictions",
                  text: "Transform submitted claim information into a machine-learning prediction.",
                },
                {
                  icon: <Layout size={21} />,
                  title: "Modern Web Interface",
                  text: "Present complex analytical workflows through an accessible user interface.",
                },
                {
                  icon: <Activity size={21} />,
                  title: "Analyze Model Output",
                  text: "Visualize the result and supporting model information in a clear format.",
                },
              ].map((item, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <ArrowUpRight
                    size={16}
                    style={{
                      position: "absolute",
                      right: 20,
                      bottom: 20,
                      color: "#94a3b8",
                    }}
                  />
                </div>
              ))}

            </div>
          </section>

          {/* PIPELINE */}
          <section className="section">

            <div className="section-heading">
              <span className="eyebrow">
                <Workflow size={13} />
                System Architecture
              </span>

              <h2>How The System Works</h2>

              <p>
                Each stage transforms the information before the final
                prediction is returned to the user.
              </p>
            </div>

            <div className="pipeline">

              {[
                [<UserCheck size={21} />, "USER"],
                [<FileText size={21} />, "CLAIM INFO"],
                [<Sliders size={21} />, "PREPARATION"],
                [<Cpu size={21} />, "ML MODEL"],
                [<Activity size={21} />, "PREDICTION"],
                [<CheckCircle2 size={21} />, "RESULT"],
              ].map((node, index) => (
                <React.Fragment key={index}>

                  <div className="pipeline-node">

                    <div className="pipeline-node-icon">
                      {node[0]}
                    </div>

                    <strong>{node[1]}</strong>

                  </div>

                  {index < 5 && (
                    <ChevronRight
                      className="pipeline-arrow"
                      size={19}
                    />
                  )}

                </React.Fragment>
              ))}

            </div>
          </section>

          {/* ML PROCESS */}
          <section className="section">

            <div className="section-heading">
              <span className="eyebrow">
                <Cpu size={13} />
                Data Pipeline
              </span>

              <h2>Machine Learning Process</h2>

              <p>
                A sequential pipeline takes historical information through
                preparation, feature processing, training and prediction.
              </p>
            </div>

            <div className="process-grid">

              {[
                [
                  "01",
                  "Historical Data",
                  "Historical records provide the foundation for learning claim patterns.",
                ],
                [
                  "02",
                  "Data Preparation",
                  "Missing values, inconsistent entries and numerical distributions are prepared.",
                ],
                [
                  "03",
                  "Feature Processing",
                  "Categorical and numerical attributes are transformed into model-ready values.",
                ],
                [
                  "04",
                  "Train / Test Split",
                  "Records are separated into training and evaluation datasets.",
                ],
                [
                  "05",
                  "Gradient Boosting",
                  "gradient boosting classifier maps these relationships iteratively by training subsequent decision trees on the residual errors of the previous trees, progressively refining the decision boundary between features and the target.",
                ],
                [
                  "06",
                  "Model Evaluation",
                  "Performance is examined using evaluation metrics such as accuracy and log loss.",
                ],
                [
                  "07",
                  "Prediction",
                  "New claim information is passed through the trained model to generate an output.",
                ],
                [
                  "08",
                  "Result Visualization",
                  "The application presents the model result in an easy-to-understand interface.",
                ],
              ].map((item) => (
                <div className="process-card" key={item[0]}>

                  <span className="process-number">
                    {item[0]}
                  </span>

                  <h3>{item[1]}</h3>

                  <p>{item[2]}</p>

                </div>
              ))}

            </div>
          </section>

          {/* METRICS */}
          <section className="section">

            <div className="section-heading">
              <span className="eyebrow">
                <BarChart2 size={13} />
                Model Metrics
              </span>

              <h2>Project Metrics</h2>

              <p>
                Key dataset and model configuration values used throughout
                the project.
              </p>
            </div>

            <div className="metrics-grid">

              {[
                [
                  <Database size={17} />,
                  "Dataset Records",
                  "12,002",
                  "Historical claim records",
                ],
                [
                  <Layers size={17} />,
                  "Original Features",
                  "29",
                  "Collected dataset variables",
                ],
                [
                  <Cpu size={17} />,
                  "Model Inputs",
                  "24",
                  "Processed input variables",
                ],
                [
                  <BarChart2 size={17} />,
                  "Train / Test",
                  "80/20",
                  "Dataset split",
                ],
                [
                  <Target size={17} />,
                  "Accuracy",
                  "77.74%",
                  "Reported model accuracy",
                ],
                [
                  <Activity size={17} />,
                  "Log Loss",
                  "0.63995",
                  "Cross-entropy metric",
                ],
              ].map((metric, index) => (
                <div className="metric-card" key={index}>

                  <div className="metric-top">
                    <span>{metric[1]}</span>

                    <div className="metric-icon">
                      {metric[0]}
                    </div>
                  </div>

                  <div className="metric-value">
                    {metric[2]}
                  </div>

                  <div className="metric-description">
                    {metric[3]}
                  </div>

                </div>
              ))}

            </div>
          </section>

          {/* RESPONSIBLE USE */}
          <section className="section">

            <div className="section-heading">
              <span className="eyebrow">
                <Shield size={13} />
                Responsible Use
              </span>

              <h2>Understanding Model Predictions</h2>

              <p>
                Machine-learning output should be treated as analytical
                information rather than an independent final decision.
              </p>
            </div>

            <div className="responsible-grid">

              <div className="responsible-card">

                <div className="responsible-icon">
                  <Info size={22} />
                </div>

                <div>
                  <h3>Model Performance</h3>

                  <p>
                    Reported accuracy and other metrics describe performance
                    on the project's evaluation data. They do not guarantee
                    that every future claim will be classified correctly.
                  </p>
                </div>

              </div>

              <div className="responsible-card">

                <div className="responsible-icon">
                  <Shield size={22} />
                </div>

                <div>
                  <h3>Prediction ≠ Final Decision</h3>

                  <p>
                    A model prediction is an analytical signal. Claim
                    information should be reviewed alongside the prediction
                    before any real-world decision is made.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* FEATURES */}
          <section className="section">

            <div className="section-heading">
              <span className="eyebrow">
                <Sparkles size={13} />
                Application Capabilities
              </span>

              <h2>Built for the Complete Workflow</h2>

              <p>
                The interface combines claim input, machine-learning
                processing and result visualization in one workspace.
              </p>
            </div>

            <div className="cards-grid">

              {[
                [
                  <Car size={21} />,
                  "Vehicle Claim Analysis",
                  "Processes vehicle characteristics, age, category and valuation information.",
                ],
                [
                  <UserCheck size={21} />,
                  "Driver Analysis",
                  "Handles driver-related attributes such as age, safety rating and income.",
                ],
                [
                  <FileText size={21} />,
                  "Claim Processing",
                  "Captures accident details, claim dates, witnesses and reporting information.",
                ],
                [
                  <DollarSign size={21} />,
                  "Financial Analysis",
                  "Processes claim values, injury amounts, premiums and deductibles.",
                ],
                [
                  <Cpu size={21} />,
                  "ML Prediction",
                  "Connects prepared claim information to the machine-learning API.",
                ],
                [
                  <BarChart2 size={21} />,
                  "Result Visualization",
                  "Displays prediction output through a clear visual result interface.",
                ],
              ].map((item, index) => (
                <div className="feature-card" key={index}>

                  <div className="feature-icon">
                    {item[0]}
                  </div>

                  <h3>{item[1]}</h3>

                  <p>{item[2]}</p>

                </div>
              ))}

            </div>
          </section>

          {/* CTA */}
          <section className="cta">

            <span className="cta-badge">
              <CircleCheck size={13} />
              FraudShield AI
            </span>

            <h2>Explore the Prediction Workflow</h2>

            <p>
              Enter claim information, process the data through the
              machine-learning pipeline and inspect the generated prediction.
            </p>

          </section>

        </div>
      </main>
    </div>
  );
}

