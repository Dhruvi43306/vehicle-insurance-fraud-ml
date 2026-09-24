import { useNavigate } from 'react-router-dom';
import {
  Shield,
  Brain,
  FileText,
  CheckCircle2,
  ChevronRight,
  Play,
  Database,
  Cpu,
  Activity,
  AlertTriangle,
  TrendingUp,
  Sliders,
  GitBranch,
  UserCheck,
  ArrowUpRight,
  Sparkles,
  Car,
  DollarSign,
  Zap,
  ShieldCheck,
  BarChart3,
  CircleCheck,
  ScanLine,
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    {
      value: '12,002',
      label: 'Dataset Records',
      desc: 'Historical claim records',
      icon: <Database size={21} />,
    },
    {
      value: '29',
      label: 'Original Features',
      desc: 'Collected variables',
      icon: <Sliders size={21} />,
    },
    {
      value: '24',
      label: 'Model Inputs',
      desc: 'Processed features',
      icon: <Cpu size={21} />,
    },
    {
      value: '80/20',
      label: 'Train / Test',
      desc: 'Data distribution',
      icon: <GitBranch size={21} />,
    },
    {
      value: '57.14%',
      label: 'Training Accuracy',
      desc: 'Training performance',
      icon: <UserCheck size={21} />,
    },
    {
      value: '53.56%',
      label: 'Testing Accuracy',
      desc: 'Testing performance',
      icon: <TrendingUp size={21} />,
    },
    {
      value: '0.63995',
      label: 'Log Loss',
      desc: 'Cross-entropy metric',
      icon: <Activity size={21} />,
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Claim Data Intake',
      desc: 'Enter driver, vehicle, accident and financial information into the claim analysis form.',
      icon: <FileText size={23} />,
    },
    {
      number: '02',
      title: 'Feature Processing',
      desc: 'The system prepares dates, categorical values and numerical claim parameters.',
      icon: <Sliders size={23} />,
    },
    {
      number: '03',
      title: 'ML Evaluation',
      desc: 'The trained machine-learning model evaluates the submitted claim features.',
      icon: <Cpu size={23} />,
    },
    {
      number: '04',
      title: 'Risk Result',
      desc: 'Receive the model prediction and review the generated claim risk information.',
      icon: <ShieldCheck size={23} />,
    },
  ];

  const featuresOverview = [
    {
      category: 'Driver Profile',
      desc: 'Personal & safety indicators',
      icon: <UserCheck size={20} />,
      color: 'blue',
      examples: [
        'Age of Driver',
        'Safety Rating',
        'Annual Income',
        'Higher Education',
      ],
    },
    {
      category: 'Claim Information',
      desc: 'Incident & filing details',
      icon: <FileText size={20} />,
      color: 'cyan',
      examples: [
        'Claim Date',
        'Accident Site',
        'Witness Present',
        'Liability %',
      ],
    },
    {
      category: 'Vehicle Information',
      desc: 'Vehicle specifications',
      icon: <Car size={20} />,
      color: 'purple',
      examples: [
        'Age of Vehicle',
        'Vehicle Category',
        'Vehicle Price',
      ],
    },
    {
      category: 'Financial Information',
      desc: 'Claim & policy values',
      icon: <DollarSign size={20} />,
      color: 'green',
      examples: [
        'Total Claim Value',
        'Injury Claim',
        'Policy Deductible',
      ],
    },
    {
      category: 'Claim Process',
      desc: 'Administrative information',
      icon: <Sliders size={20} />,
      color: 'orange',
      examples: [
        'Days Open',
        'Form Defects Counter',
      ],
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .home-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 10%, rgba(37, 99, 235, 0.06), transparent 28%),
            radial-gradient(circle at 90% 15%, rgba(6, 182, 212, 0.06), transparent 25%),
            #f8fafc;
          color: #172033;
          overflow: hidden;
        }

        .home-container {
          width: min(1220px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================================
           GLOBAL BUTTONS
        ========================================= */

        .home-btn {
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 20px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .home-btn:hover {
          transform: translateY(-2px);
        }

        .home-btn-primary {
          color: white;
          background: linear-gradient(135deg, #2563eb, #06b6d4);
          box-shadow: 0 12px 25px rgba(37, 99, 235, 0.22);
        }

        .home-btn-primary:hover {
          box-shadow: 0 16px 32px rgba(37, 99, 235, 0.3);
        }

        .home-btn-secondary {
          color: #334155;
          background: white;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
        }

        .home-btn-secondary:hover {
          border-color: #bfdbfe;
          background: #f8fbff;
        }

        /* =========================================
           HERO
        ========================================= */

        .hero-section {
          position: relative;
          padding: 78px 0 70px;
          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f8fbff 72%,
              #f8fafc 100%
            );
          border-bottom: 1px solid #e8eef7;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.55;
          background-image:
            linear-gradient(rgba(37, 99, 235, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .hero-container {
          position: relative;
          z-index: 2;
          width: min(1220px, calc(100% - 40px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.03fr 0.97fr;
          gap: 65px;
          align-items: center;
        }

        .hero-content {
          animation: heroFadeUp 0.75s ease both;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.12);
          animation: pulseDot 2s infinite;
        }

        .hero-title {
          margin: 20px 0 18px;
          max-width: 680px;
          font-size: clamp(42px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -0.045em;
          font-weight: 850;
          color: #172033;
        }

        .hero-gradient {
          background: linear-gradient(90deg, #2563eb, #0891b2, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 610px;
          margin: 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .hero-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 25px;
          color: #64748b;
          font-size: 12px;
          font-weight: 600;
        }

        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .hero-trust-item svg {
          color: #16a34a;
        }

        /* =========================================
           TELEMETRY
        ========================================= */

        .telemetry-card {
          margin-top: 34px;
          max-width: 670px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid #e2e8f0;
          border-radius: 17px;
          padding: 17px;
          box-shadow:
            0 12px 35px rgba(15, 23, 42, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(14px);
        }

        .telemetry-header {
          display: flex;
          align-items: center;
          gap: 9px;
          padding-bottom: 14px;
          border-bottom: 1px solid #eef2f7;
          font-size: 12px;
          font-weight: 800;
          color: #334155;
        }

        .telemetry-live {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.1);
          animation: pulseDot 2s infinite;
        }

        .telemetry-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding-top: 15px;
        }

        .telemetry-cell {
          padding: 8px 10px;
          border-radius: 10px;
          background: #f8fafc;
        }

        .telemetry-label {
          display: block;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .telemetry-value {
          color: #334155;
          font-size: 12px;
          font-weight: 800;
        }

        .telemetry-success {
          color: #16a34a;
        }

        /* =========================================
           HERO DASHBOARD
        ========================================= */

        .hero-visual {
          position: relative;
          min-height: 510px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: heroFadeUp 0.9s ease 0.12s both;
        }

        .visual-glow {
          position: absolute;
          width: 370px;
          height: 370px;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.23;
        }

        .visual-glow-blue {
          background: #38bdf8;
          top: 5%;
          right: 5%;
        }

        .visual-glow-purple {
          background: #818cf8;
          bottom: 5%;
          left: 5%;
        }

        .dashboard {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 540px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #dbe5f0;
          border-radius: 24px;
          box-shadow:
            0 35px 80px rgba(30, 64, 175, 0.14),
            0 10px 25px rgba(15, 23, 42, 0.07);
          overflow: hidden;
          transform: perspective(1200px) rotateY(-4deg) rotateX(2deg);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .dashboard:hover {
          transform: perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(-6px);
          box-shadow:
            0 45px 95px rgba(30, 64, 175, 0.18),
            0 15px 30px rgba(15, 23, 42, 0.08);
        }

        .dashboard-topbar {
          height: 48px;
          display: flex;
          align-items: center;
          padding: 0 17px;
          border-bottom: 1px solid #edf2f7;
          background: #fbfdff;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .window-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot-red {
          background: #f87171;
        }

        .dot-yellow {
          background: #fbbf24;
        }

        .dot-green {
          background: #34d399;
        }

        .dashboard-title {
          margin-left: 15px;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
        }

        .dashboard-body {
          padding: 18px;
          background: #f8fafc;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 13px;
        }

        .dashboard-card {
          background: white;
          border: 1px solid #e7edf5;
          border-radius: 15px;
          padding: 15px;
          box-shadow: 0 7px 18px rgba(15, 23, 42, 0.035);
        }

        .risk-card {
          grid-row: span 2;
          min-height: 250px;
        }

        .mini-label {
          color: #94a3b8;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .risk-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding-top: 12px;
        }

        .risk-gauge {
          position: relative;
          width: 150px;
          height: 150px;
        }

        .risk-gauge svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .gauge-bg {
          fill: none;
          stroke: #e8eef5;
          stroke-width: 3;
        }

        .gauge-fill {
          fill: none;
          stroke: url(#riskGradient);
          stroke-width: 3;
          stroke-linecap: round;
          stroke-dasharray: 72.4 100;
          animation: gaugeLoad 1.5s ease forwards;
        }

        .risk-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .risk-number {
          color: #172033;
          font-size: 34px;
          font-weight: 850;
          line-height: 1;
        }

        .risk-word {
          margin-top: 5px;
          color: #f59e0b;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .risk-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 4px;
          padding: 6px 9px;
          border-radius: 999px;
          color: #b45309;
          background: #fffbeb;
          border: 1px solid #fde68a;
          font-size: 9px;
          font-weight: 800;
        }

        .bars {
          height: 90px;
          display: flex;
          align-items: end;
          justify-content: space-around;
          gap: 7px;
          padding: 12px 4px 2px;
        }

        .bar {
          width: 15%;
          border-radius: 5px 5px 2px 2px;
          background: linear-gradient(to top, #93c5fd, #38bdf8);
          animation: barGrow 0.8s ease both;
        }

        .bar.active {
          background: linear-gradient(to top, #2563eb, #06b6d4);
          box-shadow: 0 5px 14px rgba(37, 99, 235, 0.2);
        }

        .scan-log {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 13px;
        }

        .scan-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #475569;
          font-size: 10px;
          font-weight: 700;
        }

        .scan-item.success svg {
          color: #22c55e;
        }

        .scan-item.warning svg {
          color: #f59e0b;
        }

        .floating-ai {
          position: absolute;
          z-index: 5;
          right: -23px;
          top: 75px;
          width: 66px;
          height: 66px;
          border-radius: 19px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #2563eb, #06b6d4);
          color: white;
          box-shadow: 0 16px 30px rgba(37, 99, 235, 0.28);
          animation: floatBadge 3s ease-in-out infinite;
        }

        .floating-ai svg:last-child {
          position: absolute;
          right: 9px;
          bottom: 9px;
        }

        /* =========================================
           SECTION HEADERS
        ========================================= */

        .section {
          padding: 90px 0;
        }

        .section-header {
          max-width: 720px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #2563eb;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .section-title {
          margin: 10px 0 12px;
          color: #172033;
          font-size: clamp(30px, 4vw, 42px);
          line-height: 1.12;
          letter-spacing: -0.035em;
          font-weight: 850;
        }

        .section-description {
          margin: 0 auto;
          max-width: 650px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.75;
        }

        /* =========================================
           STATS
        ========================================= */

        .stats-section {
          background: #ffffff;
          border-bottom: 1px solid #edf2f7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .stat-card {
          position: relative;
          padding: 21px;
          min-height: 170px;
          border: 1px solid #e5ebf3;
          border-radius: 17px;
          background: linear-gradient(145deg, #ffffff, #f9fbfe);
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.045);
          overflow: hidden;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.06);
          right: -45px;
          top: -45px;
          transition: transform 0.4s ease;
        }

        .stat-card:hover {
          transform: translateY(-7px);
          border-color: #bfdbfe;
          box-shadow: 0 18px 35px rgba(30, 64, 175, 0.1);
        }

        .stat-card:hover::after {
          transform: scale(1.5);
        }

        .stat-icon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #eff6ff;
          color: #2563eb;
          margin-bottom: 19px;
        }

        .stat-value {
          display: block;
          color: #172033;
          font-size: 25px;
          font-weight: 850;
          letter-spacing: -0.025em;
        }

        .stat-label {
          display: block;
          margin-top: 4px;
          color: #334155;
          font-size: 12px;
          font-weight: 800;
        }

        .stat-desc {
          margin: 5px 0 0;
          color: #94a3b8;
          font-size: 10px;
        }

        /* =========================================
           WORKFLOW
        ========================================= */

        .workflow-section {
          background: #f8fafc;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 17px;
        }

        .step-card {
          position: relative;
          padding: 27px 22px;
          background: white;
          border: 1px solid #e5ebf3;
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.04);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-8px);
          border-color: #bfdbfe;
          box-shadow: 0 20px 38px rgba(30, 64, 175, 0.1);
        }

        .step-number {
          position: absolute;
          top: 17px;
          right: 17px;
          color: #cbd5e1;
          font-size: 12px;
          font-weight: 900;
        }

        .step-icon {
          width: 49px;
          height: 49px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: #2563eb;
          background: linear-gradient(145deg, #eff6ff, #ecfeff);
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .step-card:hover .step-icon {
          transform: scale(1.08) rotate(-4deg);
        }

        .step-title {
          margin: 0 0 9px;
          color: #1e293b;
          font-size: 16px;
          font-weight: 850;
        }

        .step-description {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =========================================
           FEATURES
        ========================================= */

        .features-section {
          background: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
        }

        .feature-card {
          position: relative;
          padding: 22px;
          min-height: 245px;
          background: #ffffff;
          border: 1px solid #e5ebf3;
          border-radius: 18px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-7px);
          border-color: #bfdbfe;
          box-shadow: 0 18px 35px rgba(30, 64, 175, 0.1);
        }

        .feature-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          margin-bottom: 18px;
        }

        .feature-icon.blue {
          color: #2563eb;
          background: #eff6ff;
        }

        .feature-icon.cyan {
          color: #0891b2;
          background: #ecfeff;
        }

        .feature-icon.purple {
          color: #7c3aed;
          background: #f5f3ff;
        }

        .feature-icon.green {
          color: #059669;
          background: #ecfdf5;
        }

        .feature-icon.orange {
          color: #ea580c;
          background: #fff7ed;
        }

        .feature-title {
          margin: 0 0 5px;
          color: #1e293b;
          font-size: 14px;
          font-weight: 850;
        }

        .feature-subtitle {
          color: #94a3b8;
          font-size: 10px;
          font-weight: 700;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .feature-bullet {
          width: 5px;
          height: 5px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #60a5fa;
        }

        .features-action {
          text-align: center;
          margin-top: 34px;
        }

        /* =========================================
           CTA
        ========================================= */

        .cta-section {
          padding: 75px 0;
          background: #f8fafc;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          padding: 58px 35px;
          text-align: center;
          border-radius: 27px;
          background:
            radial-gradient(circle at 15% 10%, rgba(56, 189, 248, 0.18), transparent 30%),
            radial-gradient(circle at 90% 90%, rgba(99, 102, 241, 0.15), transparent 30%),
            linear-gradient(135deg, #eff6ff, #f0fdfa);
          border: 1px solid #dbeafe;
          box-shadow: 0 25px 55px rgba(30, 64, 175, 0.08);
        }

        .cta-box::before {
          content: '';
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          border: 1px solid rgba(37, 99, 235, 0.08);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .cta-icon {
          position: relative;
          z-index: 1;
          width: 52px;
          height: 52px;
          margin: 0 auto 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.1);
        }

        .cta-title {
          position: relative;
          z-index: 1;
          margin: 0 0 10px;
          color: #172033;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 850;
          letter-spacing: -0.035em;
        }

        .cta-description {
          position: relative;
          z-index: 1;
          max-width: 610px;
          margin: 0 auto 25px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
        }

        .cta-button {
          position: relative;
          z-index: 1;
        }

        /* =========================================
           ANIMATIONS
        ========================================= */

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseDot {
          0%,
          100% {
            box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1);
          }

          50% {
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0.04);
          }
        }

        @keyframes floatBadge {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gaugeLoad {
          from {
            stroke-dasharray: 0 100;
          }

          to {
            stroke-dasharray: 72.4 100;
          }
        }

        @keyframes barGrow {
          from {
            transform: scaleY(0);
            transform-origin: bottom;
          }

          to {
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }

        /* =========================================
           RESPONSIVE
        ========================================= */

        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .hero-content {
            text-align: center;
          }

          .hero-title,
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions,
          .hero-trust-row {
            justify-content: center;
          }

          .telemetry-card {
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .hero-visual {
            min-height: 460px;
          }

          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 760px) {
          .home-container,
          .hero-container {
            width: min(100% - 28px, 1220px);
          }

          .hero-section {
            padding: 55px 0 45px;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-description {
            font-size: 14px;
          }

          .telemetry-details {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: 380px;
          }

          .dashboard {
            transform: none;
          }

          .floating-ai {
            right: -5px;
            top: 50px;
            width: 55px;
            height: 55px;
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .risk-card {
            grid-row: auto;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section {
            padding: 65px 0;
          }
        }

        @media (max-width: 520px) {
          .hero-title {
            font-size: 34px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .home-btn {
            width: 100%;
          }

          .hero-trust-row {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .stats-grid,
          .steps-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            min-height: auto;
          }

          .dashboard-body {
            padding: 11px;
          }

          .dashboard-card {
            padding: 12px;
          }

          .risk-gauge {
            width: 130px;
            height: 130px;
          }

          .cta-box {
            padding: 45px 20px;
          }
        }

      `}</style>

      <div className="home-page">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="hero-section">
          <div className="hero-grid"></div>

          <div className="hero-container">

            {/* LEFT CONTENT */}
            <div className="hero-content">

              <span className="hero-badge">
                <span className="hero-badge-dot"></span>
                AI-POWERED CLAIM ANALYSIS
              </span>

              <h1 className="hero-title">
                Smarter Detection for{' '}
                <span className="hero-gradient">
                  Suspicious Claims
                </span>
              </h1>

              <p className="hero-description">
                FraudShield AI analyzes driver, vehicle, claim and financial
                information through a machine-learning pipeline to identify
                potentially suspicious insurance claim patterns.
              </p>

              <div className="hero-actions">

                <button
                  className="home-btn home-btn-primary"
                  onClick={() => navigate('/prediction')}
                >
                  Analyze a Claim
                  <ChevronRight size={17} />
                </button>

                <button
                  className="home-btn home-btn-secondary"
                  onClick={() => navigate('/about')}
                >
                  Explore the Model
                  <ArrowUpRight size={16} />
                </button>

              </div>

              <div className="hero-trust-row">

                <span className="hero-trust-item">
                  <CircleCheck size={14} />
                  24 Model Inputs
                </span>

                <span className="hero-trust-item">
                  <CircleCheck size={14} />
                  ML Powered
                </span>

                <span className="hero-trust-item">
                  <CircleCheck size={14} />
                  Secure Analysis
                </span>

              </div>

              {/* TELEMETRY */}

              <div className="telemetry-card">

                <div className="telemetry-header">
                  <span className="telemetry-live"></span>
                  Detection Engine Live
                </div>

                <div className="telemetry-details">

                  <div className="telemetry-cell">
                    <span className="telemetry-label">
                      Classifier
                    </span>

                    <span className="telemetry-value">
                      Logistic Regression
                    </span>
                  </div>

                  <div className="telemetry-cell">
                    <span className="telemetry-label">
                      Model Status
                    </span>

                    <span className="telemetry-value telemetry-success">
                      Online & Operational
                    </span>
                  </div>

                  <div className="telemetry-cell">
                    <span className="telemetry-label">
                      Dataset
                    </span>

                    <span className="telemetry-value">
                      12,002 Records
                    </span>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT DASHBOARD */}

            <div className="hero-visual">

              <div className="visual-glow visual-glow-blue"></div>
              <div className="visual-glow visual-glow-purple"></div>

              <div className="dashboard">

                <div className="dashboard-topbar">

                  <div className="window-dots">
                    <span className="window-dot dot-red"></span>
                    <span className="window-dot dot-yellow"></span>
                    <span className="window-dot dot-green"></span>
                  </div>

                  <span className="dashboard-title">
                    fraudshield.ai / analysis
                  </span>

                </div>

                <div className="dashboard-body">

                  <div className="dashboard-grid">

                    {/* RISK */}

                    <div className="dashboard-card risk-card">

                      <span className="mini-label">
                        Overall Evaluation Risk
                      </span>

                      <div className="risk-content">

                        <div className="risk-gauge">

                          <svg viewBox="0 0 36 36">

                            <defs>
                              <linearGradient
                                id="riskGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#f59e0b"
                                />

                                <stop
                                  offset="100%"
                                  stopColor="#ef4444"
                                />
                              </linearGradient>
                            </defs>

                            <circle
                              className="gauge-bg"
                              cx="18"
                              cy="18"
                              r="15.915"
                            />

                            <circle
                              className="gauge-fill"
                              cx="18"
                              cy="18"
                              r="15.915"
                            />

                          </svg>

                          <div className="risk-center">
                            <span className="risk-number">
                              72%
                            </span>

                            <span className="risk-word">
                              RISK
                            </span>
                          </div>

                        </div>

                        <span className="risk-status">
                          <AlertTriangle size={11} />
                          Review Flags Active
                        </span>

                      </div>

                    </div>

                    {/* BAR GRAPH */}

                    <div className="dashboard-card">

                      <span className="mini-label">
                        Anomalies / Day
                      </span>

                      <div className="bars">

                        <div
                          className="bar"
                          style={{ height: '30%' }}
                        />

                        <div
                          className="bar"
                          style={{ height: '48%' }}
                        />

                        <div
                          className="bar"
                          style={{ height: '72%' }}
                        />

                        <div
                          className="bar active"
                          style={{ height: '95%' }}
                        />

                        <div
                          className="bar"
                          style={{ height: '55%' }}
                        />

                      </div>

                    </div>

                    {/* SCAN LOG */}

                    <div className="dashboard-card">

                      <span className="mini-label">
                        Latest Scan
                      </span>

                      <div className="scan-log">

                        <div className="scan-item success">
                          <CheckCircle2 size={13} />
                          Claim #1209 passed
                        </div>

                        <div className="scan-item warning">
                          <AlertTriangle size={13} />
                          Claim #1210 flagged
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* FLOATING AI */}

                <div className="floating-ai">
                  <Shield size={29} />
                  <Brain size={15} />
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <section className="section stats-section">

          <div className="home-container">

            <div className="section-header">

              <span className="section-kicker">
                <BarChart3 size={14} />
                Model Attributes
              </span>

              <h2 className="section-title">
                Project Metrics at a Glance
              </h2>

              <p className="section-description">
                Key dataset and model configuration values used throughout
                the FraudShield AI project.
              </p>

            </div>

            <div className="stats-grid">

              {stats.map((stat, index) => (
                <div
                  className="stat-card"
                  key={index}
                >

                  <div className="stat-icon">
                    {stat.icon}
                  </div>

                  <span className="stat-value">
                    {stat.value}
                  </span>

                  <span className="stat-label">
                    {stat.label}
                  </span>

                  <p className="stat-desc">
                    {stat.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            WORKFLOW
        ===================================================== */}

        <section className="section workflow-section">

          <div className="home-container">

            <div className="section-header">

              <span className="section-kicker">
                <Zap size={14} />
                System Workflow
              </span>

              <h2 className="section-title">
                From Claim Input to Prediction
              </h2>

              <p className="section-description">
                A simple four-stage workflow transforms submitted claim
                information into a machine-learning prediction.
              </p>

            </div>

            <div className="steps-grid">

              {steps.map((step) => (
                <div
                  className="step-card"
                  key={step.number}
                >

                  <span className="step-number">
                    {step.number}
                  </span>

                  <div className="step-icon">
                    {step.icon}
                  </div>

                  <h3 className="step-title">
                    {step.title}
                  </h3>

                  <p className="step-description">
                    {step.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            FEATURE DOMAINS
        ===================================================== */}

        <section className="section features-section">

          <div className="home-container">

            <div className="section-header">

              <span className="section-kicker">
                <ScanLine size={14} />
                Statistical Dimensions
              </span>

              <h2 className="section-title">
                What Does the Model Analyze?
              </h2>

              <p className="section-description">
                The prediction pipeline works with 24 model input variables
                organized across five major information domains.
              </p>

            </div>

            <div className="features-grid">

              {featuresOverview.map((item, index) => (
                <div
                  className="feature-card"
                  key={index}
                >

                  <div
                    className={`feature-icon ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="feature-title">
                    {item.category}
                  </h3>

                  <span className="feature-subtitle">
                    {item.desc}
                  </span>

                  <ul className="feature-list">

                    {item.examples.map(
                      (example, featureIndex) => (
                        <li key={featureIndex}>
                          <span className="feature-bullet"></span>
                          {example}
                        </li>
                      )
                    )}

                  </ul>

                </div>
              ))}

            </div>

            <div className="features-action">

              <button
                className="home-btn home-btn-secondary"
                onClick={() => navigate('/prediction')}
              >
                View All 24 Inputs
                <ChevronRight size={16} />
              </button>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="cta-section">

          <div className="home-container">

            <div className="cta-box">

              <div className="cta-icon">
                <Shield size={25} />
              </div>

              <h2 className="cta-title">
                Ready to Analyze a Claim?
              </h2>

              <p className="cta-description">
                Enter driver, vehicle, claim and financial information
                to run your claim through the FraudShield AI prediction
                pipeline.
              </p>

              <button
                className="home-btn home-btn-primary cta-button"
                onClick={() => navigate('/prediction')}
              >
                Start Risk Evaluation
                <Play size={15} />
              </button>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}