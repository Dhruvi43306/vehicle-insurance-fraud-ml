import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  ShieldCheck,
  RefreshCw,
  Cpu,
  FileText,
  User,
  Car,
  DollarSign,
  ClipboardList,
  CheckCircle2,
  CalendarDays,
  MapPin,
  Users,
  Building2,
  Radio,
  Siren,
  Gauge,
  WalletCards,
  Clock3,
  AlertTriangle,
  RotateCcw,
  ArrowLeft,
  Sparkles,
  Activity,
  LockKeyhole,
  Brain,
  ChevronRight,
} from "lucide-react";

const BLANK_FORM_VALUES = {
  ageOfDriver: "",
  safetyRating: "",
  annualIncome: "",
  higherEducation: "",
  addressChange: "",
  propertyStatus: "",
  zipCode: "",
  claimDate: "",
  claimDayOfWeek: "",
  accidentSite: "",
  pastClaims: "",
  witnessPresent: "",
  liabilityPercent: "",
  channel: "",
  policeReport: "",
  ageOfVehicle: "",
  vehicleCategory: "",
  vehiclePrice: "",
  totalClaim: "",
  injuryClaim: "",
  policyDeductible: "",
  annualPremium: "",
  daysOpen: "",
  formDefects: "",
};

const styles = `
  * {
    box-sizing: border-box;
  }

  .prediction-root {
    min-height: 100vh;
    background:
      radial-gradient(circle at 10% 5%, rgba(37, 99, 235, 0.08), transparent 28%),
      radial-gradient(circle at 90% 15%, rgba(14, 165, 233, 0.07), transparent 25%),
      #f5f8fc;
    color: #172033;
    padding: 42px 20px 70px;
    font-family:
      Inter,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif;
  }

  .prediction-container {
    width: min(1180px, 100%);
    margin: 0 auto;
  }

  .prediction-header {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
    border: 1px solid #e3eaf3;
    border-radius: 28px;
    padding: 38px 40px;
    margin-bottom: 24px;
    box-shadow: 0 18px 45px rgba(30, 64, 100, 0.08);
  }

  .prediction-header::before {
    content: "";
    position: absolute;
    width: 230px;
    height: 230px;
    right: -90px;
    top: -100px;
    border-radius: 50%;
    background: rgba(37, 99, 235, 0.08);
  }

  .header-top-line {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #2563eb;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    margin-bottom: 13px;
  }

  .header-top-line svg {
    flex-shrink: 0;
  }

  .prediction-title {
    position: relative;
    margin: 0;
    color: #111827;
    font-size: clamp(30px, 4vw, 46px);
    line-height: 1.08;
    font-weight: 850;
    letter-spacing: -0.035em;
  }

  .prediction-title-gradient {
    background: linear-gradient(90deg, #2563eb, #0891b2);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .prediction-subtitle {
    position: relative;
    max-width: 730px;
    margin: 15px 0 0;
    color: #64748b;
    font-size: 15px;
    line-height: 1.7;
  }

  .header-feature-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 25px;
  }

  .header-feature {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 13px;
    border-radius: 999px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    color: #475569;
    font-size: 12px;
    font-weight: 700;
  }

  .header-feature svg {
    color: #2563eb;
  }

  .required-note {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #64748b;
    font-size: 13px;
    margin: 20px 2px 14px;
  }

  .required-star {
    color: #ef4444;
    font-weight: 900;
  }

  .prediction-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .form-section {
    position: relative;
    margin: 0;
    padding: 27px;
    border: 1px solid #e1e8f0;
    border-radius: 23px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 10px 30px rgba(30, 64, 100, 0.055);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      border-color 0.25s ease;
  }

  .form-section:hover {
    transform: translateY(-2px);
    border-color: #cbdcf4;
    box-shadow: 0 18px 40px rgba(30, 64, 100, 0.09);
  }

  .section-legend {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    margin-bottom: 24px;
  }

  .section-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    color: #2563eb;
    background: #eff6ff;
    border: 1px solid #dbeafe;
    flex-shrink: 0;
  }

  .section-title-wrap {
    min-width: 0;
  }

  .section-title {
    margin: 0;
    color: #172033;
    font-size: 18px;
    font-weight: 800;
  }

  .section-description {
    margin: 3px 0 0;
    color: #94a3b8;
    font-size: 12px;
  }

  .section-number {
    margin-left: auto;
    min-width: 34px;
    height: 28px;
    padding: 0 9px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: #f1f5f9;
    color: #64748b;
    font-size: 11px;
    font-weight: 800;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .field {
    min-width: 0;
  }

  .field label {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 8px;
    color: #334155;
    font-size: 12px;
    font-weight: 750;
  }

  .field-required {
    color: #ef4444;
  }

  .input-wrap {
    position: relative;
  }

  .input-icon {
    position: absolute;
    left: 13px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    pointer-events: none;
    z-index: 2;
  }

  .form-input {
    width: 100%;
    height: 47px;
    border: 1px solid #dbe3ed;
    border-radius: 12px;
    background: #fbfdff;
    color: #172033;
    padding: 0 13px;
    font-size: 13px;
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease,
      transform 0.2s ease;
  }

  .form-input.with-icon {
    padding-left: 41px;
  }

  .form-input::placeholder {
    color: #b0bac7;
  }

  .form-input:hover {
    border-color: #b9c9dc;
    background: #ffffff;
  }

  .form-input:focus {
    border-color: #60a5fa;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.09);
  }

  select.form-input {
    cursor: pointer;
    appearance: auto;
  }

  .read-only-input {
    background: #f8fafc;
    color: #64748b;
    cursor: not-allowed;
  }

  .input-error {
    border-color: #f87171 !important;
    background: #fffafa !important;
  }

  .input-error:focus {
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.08) !important;
  }

  .error-message {
    display: block;
    margin-top: 6px;
    color: #dc2626;
    font-size: 11px;
    font-weight: 650;
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 22px 24px;
    border: 1px solid #dce5ef;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 10px 30px rgba(30, 64, 100, 0.06);
  }

  .footer-hint {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #64748b;
    font-size: 12px;
  }

  .footer-hint svg {
    color: #2563eb;
  }

  .action-group {
    display: flex;
    gap: 10px;
  }

  .action-button {
    min-height: 46px;
    border: 0;
    border-radius: 12px;
    padding: 0 19px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      background 0.2s ease;
  }

  .action-button:hover {
    transform: translateY(-2px);
  }

  .primary-button {
    color: #ffffff;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    box-shadow: 0 10px 22px rgba(37, 99, 235, 0.22);
  }

  .primary-button:hover {
    box-shadow: 0 14px 28px rgba(37, 99, 235, 0.3);
  }

  .secondary-button {
    color: #475569;
    background: #f8fafc;
    border: 1px solid #dce4ed;
  }

  .secondary-button:hover {
    background: #ffffff;
    border-color: #cbd5e1;
  }

  .danger-button {
    color: #b91c1c;
    background: #fff7f7;
    border: 1px solid #fecaca;
  }

  .loading-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: 20px;
    background: rgba(15, 23, 42, 0.32);
    backdrop-filter: blur(8px);
  }

  .loading-card {
    width: min(440px, 100%);
    padding: 34px;
    text-align: center;
    border-radius: 24px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.2);
    animation: cardAppear 0.3s ease;
  }

  .loading-icon-wrap {
    width: 72px;
    height: 72px;
    margin: 0 auto 18px;
    display: grid;
    place-items: center;
    border-radius: 22px;
    color: #2563eb;
    background: #eff6ff;
  }

  .loading-card h3 {
    margin: 0;
    color: #172033;
    font-size: 20px;
  }

  .loading-stage {
    margin: 9px 0 22px;
    color: #64748b;
    font-size: 13px;
  }

  .progress-track {
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: #e8eef5;
  }

  .progress-fill {
    width: 45%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #2563eb, #06b6d4);
    animation: loadingProgress 1.4s ease-in-out infinite;
  }

  .result-card {
    overflow: hidden;
    margin-bottom: 24px;
    border-radius: 25px;
    background: #ffffff;
    border: 1px solid #dfe7f0;
    box-shadow: 0 20px 50px rgba(30, 64, 100, 0.1);
    animation: cardAppear 0.4s ease;
  }

  .result-top {
    padding: 22px 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border-bottom: 1px solid #e8edf3;
  }

  .result-heading {
    margin: 0;
    color: #172033;
    font-size: 19px;
    font-weight: 850;
  }

  .live-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 10px;
    border-radius: 999px;
    background: #f0fdf4;
    color: #15803d;
    font-size: 11px;
    font-weight: 750;
  }

  .live-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.1);
  }

  .result-body {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 35px;
    align-items: center;
    padding: 30px;
  }

  .gauge-area {
    display: grid;
    place-items: center;
  }

  .gauge {
    position: relative;
    width: 175px;
    height: 175px;
  }

  .gauge svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }

  .gauge-bg {
    fill: none;
    stroke: #edf2f7;
    stroke-width: 9;
  }

  .gauge-fill {
    fill: none;
    stroke-width: 9;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.8s ease;
  }

  .gauge-center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .gauge-value {
    color: #172033;
    font-size: 31px;
    font-weight: 900;
  }

  .gauge-label {
    margin-top: 2px;
    color: #94a3b8;
    font-size: 11px;
    font-weight: 700;
  }

  .result-details {
    min-width: 0;
  }

  .result-status {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 850;
    margin-bottom: 20px;
  }

  .result-status.fraud {
    color: #b91c1c;
    background: #fef2f2;
    border: 1px solid #fecaca;
  }

  .result-status.clean {
    color: #15803d;
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
  }

  .result-info {
    display: grid;
    gap: 1px;
    overflow: hidden;
    border: 1px solid #e5ebf2;
    border-radius: 13px;
  }

  .result-row {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 15px;
    padding: 12px 14px;
    background: #fbfdff;
  }

  .result-row:nth-child(even) {
    background: #f8fafc;
  }

  .result-label {
    color: #64748b;
    font-size: 12px;
    font-weight: 650;
  }

  .result-value {
    color: #172033;
    font-size: 12px;
    font-weight: 750;
  }

  .result-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 20px 27px;
    border-top: 1px solid #e8edf3;
  }

  @keyframes loadingProgress {
    0% {
      transform: translateX(-110%);
    }
    100% {
      transform: translateX(230%);
    }
  }

  @keyframes cardAppear {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.985);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 900px) {
    .form-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .result-body {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .result-status {
      justify-content: center;
    }

    .result-actions {
      justify-content: center;
    }
  }

  @media (max-width: 650px) {
    .prediction-root {
      padding: 20px 12px 45px;
    }

    .prediction-header {
      padding: 27px 22px;
      border-radius: 21px;
    }

    .prediction-title {
      font-size: 30px;
    }

    .form-section {
      padding: 20px 16px;
      border-radius: 18px;
    }

    .form-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .section-number {
      display: none;
    }

    .form-footer {
      flex-direction: column;
      align-items: stretch;
    }

    .action-group {
      width: 100%;
      flex-direction: column;
    }

    .action-button {
      width: 100%;
    }

    .result-top {
      flex-direction: column;
      align-items: flex-start;
    }

    .result-body {
      padding: 24px 16px;
    }

    .result-row {
      grid-template-columns: 1fr;
      gap: 4px;
    }

    .result-actions {
      flex-direction: column;
      padding: 18px 16px;
    }

    .result-actions .action-button {
      width: 100%;
    }
  }
`;
const Field = ({
  label,
  name,
  icon: Icon,
  type = "text",
  placeholder,
  options,
  min,
  max,
  step,
  readOnly = false,
  value,
  error,
  onChange,
}) => {
  const hasError = Boolean(error);

  return (
    <div className="field">
      <label htmlFor={name}>
        {label}

        {!readOnly && <span className="field-required">*</span>}
      </label>

      <div className="input-wrap">
        {Icon && <Icon className="input-icon" size={16} strokeWidth={1.8} />}

        {options ? (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={`form-input ${
              Icon ? "with-icon" : ""
            } ${hasError ? "input-error" : ""}`}
          >
            <option value="">{placeholder || "Select option"}</option>

            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            className={`form-input ${Icon ? "with-icon" : ""} ${
              readOnly ? "read-only-input" : ""
            } ${hasError ? "input-error" : ""}`}
          />
        )}
      </div>

      {hasError && <span className="error-message">{error}</span>}
    </div>
  );
};

export default function Prediction() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(BLANK_FORM_VALUES);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingStage, setLoadingStage] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (formData.claimDate) {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const date = new Date(formData.claimDate);

      if (!isNaN(date.getTime())) {
        const dayName = days[date.getDay()];

        setFormData((prev) => ({
          ...prev,
          claimDayOfWeek: dayName,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          claimDayOfWeek: "",
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        claimDayOfWeek: "",
      }));
    }
  }, [formData.claimDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};

    const requiredFields = [
      "ageOfDriver",
      "safetyRating",
      "annualIncome",
      "higherEducation",
      "addressChange",
      "propertyStatus",
      "claimDate",
      "accidentSite",
      "pastClaims",
      "witnessPresent",
      "liabilityPercent",
      "channel",
      "policeReport",
      "ageOfVehicle",
      "vehicleCategory",
      "vehiclePrice",
      "totalClaim",
      "injuryClaim",
      "policyDeductible",
      "annualPremium",
      "daysOpen",
      "formDefects",
    ];

    requiredFields.forEach((field) => {
      if (
        formData[field] === "" ||
        formData[field] === undefined ||
        formData[field] === null
      ) {
        tempErrors[field] = "This field is required.";
      }
    });

    const nonNegativeFields = [
      "ageOfDriver",
      "safetyRating",
      "annualIncome",
      "pastClaims",
      "liabilityPercent",
      "ageOfVehicle",
      "vehiclePrice",
      "totalClaim",
      "injuryClaim",
      "policyDeductible",
      "annualPremium",
      "daysOpen",
      "formDefects",
    ];

    nonNegativeFields.forEach((field) => {
      if (formData[field] !== "" && Number(formData[field]) < 0) {
        tempErrors[field] = "Value cannot be negative.";
      }
    });

    if (
      formData.liabilityPercent !== "" &&
      (Number(formData.liabilityPercent) < 0 ||
        Number(formData.liabilityPercent) > 100)
    ) {
      tempErrors.liabilityPercent = "Percentage must be between 0 and 100.";
    }

    if (
      formData.safetyRating !== "" &&
      (Number(formData.safetyRating) < 0 || Number(formData.safetyRating) > 100)
    ) {
      tempErrors.safetyRating = "Safety rating must be between 0 and 100.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setLoadingStage("Sending claim data to the ML model...");
    setResult(null);

    const payload = {
      age_of_driver: Number(formData.ageOfDriver),
      safety_rating: Number(formData.safetyRating),
      annual_income: Number(formData.annualIncome),

      high_education: formData.higherEducation === "Yes" ? 1 : 0,

      address_change: formData.addressChange === "Yes" ? 1 : 0,

      property_status: formData.propertyStatus,

      claim_date: formData.claimDate
        ? (() => {
            const [year, month, day] = formData.claimDate.split("-");

            return `${Number(month)}/${Number(day)}/${year}`;
          })()
        : "",

      claim_day_of_week: formData.claimDayOfWeek,

      accident_site: formData.accidentSite,

      past_num_of_claims: Number(formData.pastClaims),

      witness_present: formData.witnessPresent === "Yes" ? 1 : 0,

      liab_prct: Number(formData.liabilityPercent),

      channel: formData.channel,

      police_report: formData.policeReport === "Yes" ? 1 : 0,

      age_of_vehicle: Number(formData.ageOfVehicle),

      vehicle_category: formData.vehicleCategory,

      vehicle_price: Number(formData.vehiclePrice),

      total_claim: Number(formData.totalClaim),

      injury_claim: Number(formData.injuryClaim),

      policy_deductible: Number(formData.policyDeductible),

      annual_premium: Number(formData.annualPremium),

      days_open: Number(formData.daysOpen),

      form_defects: Number(formData.formDefects),
    };

    console.log("Sending payload to ML backend:");
    console.log(payload);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Backend status:", response.status);

      const responseText = await response.text();

      console.log("Backend response:", responseText);

      if (!response.ok) {
        throw new Error(`Backend returned ${response.status}: ${responseText}`);
      }

      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error("Backend response is not valid JSON.");
      }

      console.log("Prediction result:", data);

      const isFraud = Number(data.prediction) === 1;

      setResult({
        isFraud,

        probability: isFraud ? 100 : 0,

        modelUsed: "Decision Tree",

        recommendation: isFraud
          ? "Review Recommended"
          : "Standard Claims Processing",

        status:
          data.result || data.message || "Prediction completed successfully.",
      });
    } catch (error) {
      console.error("Prediction error:", error);

      let errorMessage = "Unable to get prediction from the backend.";

      if (error instanceof TypeError) {
        errorMessage =
          "Cannot connect to the ML backend. Make sure your Python/FastAPI server is running on http://127.0.0.1:8000.";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      alert(errorMessage);
    } finally {
      setLoading(false);
      setLoadingStage("");
    }
  };

  const handleReset = () => {
    setFormData(BLANK_FORM_VALUES);
    setErrors({});
    setResult(null);
  };

  return (
    <>
      <style>{styles}</style>

      <main className="prediction-root">
        <div className="prediction-container">
          {/* HEADER */}
          <header className="prediction-header">
            <div className="header-top-line">
              <Sparkles size={15} />
              AI CLAIM ANALYSIS
            </div>

            <h1 className="prediction-title">
              Vehicle Insurance{" "}
              <span className="prediction-title-gradient">Fraud Detection</span>
            </h1>

            <p className="prediction-subtitle">
              Enter the claim information below to evaluate potential fraud risk
              using our machine learning model.
            </p>

            <div className="header-feature-row">
              <div className="header-feature">
                <ShieldCheck size={16} />
                Secure Analysis
              </div>

              <div className="header-feature">
                <Brain size={16} />
                ML Powered
              </div>

              <div className="header-feature">
                <Activity size={16} />
                24 Model Inputs
              </div>

              <div className="header-feature">
                <LockKeyhole size={16} />
                Protected Data
              </div>
            </div>
          </header>

          {/* LOADING */}
          {loading && (
            <div className="loading-overlay">
              <div className="loading-card">
                <div className="loading-icon-wrap">
                  <RefreshCw size={34} className="loading-spinner" />
                </div>

                <h3>Analyzing Claim Data</h3>

                <p className="loading-stage">{loadingStage}</p>

                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>
              </div>
            </div>
          )}

          {/* RESULT */}
          {result && (
            <section className="result-card">
              <div className="result-top">
                <div>
                  <h2 className="result-heading">Claim Analysis Result</h2>

                  <p
                    style={{
                      margin: "5px 0 0",
                      color: "#94a3b8",
                      fontSize: "12px",
                    }}
                  >
                    Machine learning prediction completed
                  </p>
                </div>

                <div className="live-badge">
                  <span className="live-dot"></span>
                  Live Prediction
                </div>
              </div>

              <div className="result-body">
                <div className="gauge-area">
                  <div className="gauge">
                    <svg viewBox="0 0 120 120">
                      <circle className="gauge-bg" cx="60" cy="60" r="50" />

                      <circle
                        className="gauge-fill"
                        cx="60"
                        cy="60"
                        r="50"
                        style={{
                          stroke: result.isFraud ? "#ef4444" : "#22c55e",
                          strokeDasharray: "314.16",
                          strokeDashoffset: (
                            314.16 -
                            (314.16 * result.probability) / 100
                          ).toString(),
                        }}
                      />
                    </svg>

                    <div className="gauge-center">
                      <span className="gauge-value">{result.probability}%</span>

                      <span className="gauge-label">Probability</span>
                    </div>
                  </div>
                </div>

                <div className="result-details">
                  <div
                    className={`result-status ${
                      result.isFraud ? "fraud" : "clean"
                    }`}
                  >
                    {result.isFraud ? (
                      <>
                        <ShieldAlert size={19} />
                        Potential Fraud Detected
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={19} />
                        No Fraud Detected
                      </>
                    )}
                  </div>

                  <div className="result-info">
                    <div className="result-row">
                      <span className="result-label">Model Engine</span>

                      <span className="result-value">{result.modelUsed}</span>
                    </div>

                    <div className="result-row">
                      <span className="result-label">
                        System Recommendation
                      </span>

                      <span className="result-value">
                        {result.recommendation}
                      </span>
                    </div>

                    <div className="result-row">
                      <span className="result-label">Details</span>

                      <span className="result-value">{result.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="result-actions">
                <button
                  className="action-button primary-button"
                  onClick={() => setResult(null)}
                >
                  <Activity size={16} />
                  Analyze Another Claim
                </button>

                <button
                  className="action-button secondary-button"
                  onClick={handleReset}
                >
                  <RotateCcw size={16} />
                  Reset Form
                </button>

                <button
                  className="action-button secondary-button"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft size={16} />
                  Back to Home
                </button>
              </div>
            </section>
          )}

          {/* FORM */}
          {!result && (
            <>
              <div className="required-note">
                <span className="required-star">*</span>
                Required fields
              </div>

              <form
                onSubmit={handleAnalyze}
                noValidate
                className="prediction-form"
              >
                {/* DRIVER PROFILE */}
                <fieldset className="form-section">
                  <div className="section-legend">
                    <div className="section-icon">
                      <User size={20} />
                    </div>

                    <div className="section-title-wrap">
                      <h2 className="section-title">Driver Profile</h2>

                      <p className="section-description">
                        Basic driver and personal information
                      </p>
                    </div>

                    <span className="section-number">01</span>
                  </div>

                  <div className="form-grid">
                    <Field
                      label="Age of Driver"
                      name="ageOfDriver"
                      icon={User}
                      type="number"
                      min="0"
                      placeholder="35"
                      value={formData.ageOfDriver}
                      error={errors.ageOfDriver}
                      onChange={handleChange}
                    />

                    <Field
                      label="Safety Rating (0-100)"
                      name="safetyRating"
                      icon={Gauge}
                      type="number"
                      min="0"
                      max="100"
                      placeholder="73"
                      value={formData.safetyRating}
                      error={errors.safetyRating}
                      onChange={handleChange}
                    />

                    <Field
                      label="Annual Income ($)"
                      name="annualIncome"
                      icon={DollarSign}
                      type="number"
                      min="0"
                      step="any"
                      placeholder="65000"
                      value={formData.annualIncome}
                      error={errors.annualIncome}
                      onChange={handleChange}
                    />

                    <Field
                      label="Higher Education Completed"
                      name="higherEducation"
                      icon={FileText}
                      placeholder="Select option"
                      options={[
                        { value: "Yes", label: "Yes" },
                        { value: "No", label: "No" },
                      ]}
                      value={formData.higherEducation}
                      error={errors.higherEducation}
                      onChange={handleChange}
                    />

                    <Field
                      label="Recent Address Change"
                      name="addressChange"
                      icon={MapPin}
                      placeholder="Select option"
                      options={[
                        { value: "Yes", label: "Yes" },
                        { value: "No", label: "No" },
                      ]}
                      value={formData.addressChange}
                      error={errors.addressChange}
                      onChange={handleChange}
                    />

                    <Field
                      label="Property Status"
                      name="propertyStatus"
                      icon={Building2}
                      placeholder="Select option"
                      options={[
                        { value: "Own", label: "Own" },
                        { value: "Rent", label: "Rent" },
                        {
                          value: "Mortgaged",
                          label: "Mortgaged",
                        },
                      ]}
                      value={formData.propertyStatus}
                      error={errors.propertyStatus}
                      onChange={handleChange}
                    />
                  </div>
                </fieldset>

                {/* CLAIM INFORMATION */}
                <fieldset className="form-section">
                  <div className="section-legend">
                    <div className="section-icon">
                      <FileText size={20} />
                    </div>

                    <div className="section-title-wrap">
                      <h2 className="section-title">Claim Information</h2>

                      <p className="section-description">
                        Accident, filing and claim details
                      </p>
                    </div>

                    <span className="section-number">02</span>
                  </div>

                  <div className="form-grid">
                    <Field
                      label="Claim Date"
                      name="claimDate"
                      icon={CalendarDays}
                      type="date"
                      value={formData.claimDate}
                      error={errors.claimDate}
                      onChange={handleChange}
                    />

                    <Field
                      label="Claim Day of Week"
                      name="claimDayOfWeek"
                      icon={CalendarDays}
                      placeholder="Calculated automatically"
                      readOnly
                      value={formData.claimDayOfWeek}
                      error={errors.claimDayOfWeek}
                      onChange={handleChange}
                    />

                    <Field
                      label="Accident Site"
                      name="accidentSite"
                      icon={MapPin}
                      placeholder="Select site"
                      options={[
                        { value: "Urban", label: "Urban" },
                        { value: "Rural", label: "Rural" },
                        {
                          value: "Highway",
                          label: "Highway",
                        },
                        { value: "local", label: "Local" },
                      ]}
                      value={formData.accidentSite}
                      error={errors.accidentSite}
                      onChange={handleChange}
                    />

                    <Field
                      label="Past Number of Claims"
                      name="pastClaims"
                      icon={FileText}
                      type="number"
                      min="0"
                      placeholder="1"
                      value={formData.pastClaims}
                      error={errors.pastClaims}
                      onChange={handleChange}
                    />

                    <Field
                      label="Witness Present"
                      name="witnessPresent"
                      icon={Users}
                      placeholder="Select option"
                      options={[
                        { value: "Yes", label: "Yes" },
                        { value: "No", label: "No" },
                      ]}
                      value={formData.witnessPresent}
                      error={errors.witnessPresent}
                      onChange={handleChange}
                    />

                    <Field
                      label="Liability Percentage (0-100)"
                      name="liabilityPercent"
                      icon={Gauge}
                      type="number"
                      min="0"
                      max="100"
                      placeholder="70"
                      value={formData.liabilityPercent}
                      error={errors.liabilityPercent}
                      onChange={handleChange}
                    />

                    <Field
                      label="Filing Channel"
                      name="channel"
                      icon={Radio}
                      placeholder="Select channel"
                      options={[
                        {
                          value: "Online",
                          label: "Online",
                        },
                        {
                          value: "Agent",
                          label: "Agent",
                        },
                        {
                          value: "Broker",
                          label: "Broker",
                        },
                        {
                          value: "Phone",
                          label: "Phone",
                        },
                      ]}
                      value={formData.channel}
                      error={errors.channel}
                      onChange={handleChange}
                    />

                    <Field
                      label="Police Report Filed"
                      name="policeReport"
                      icon={Siren}
                      placeholder="Select option"
                      options={[
                        { value: "Yes", label: "Yes" },
                        { value: "No", label: "No" },
                      ]}
                      value={formData.policeReport}
                      error={errors.policeReport}
                      onChange={handleChange}
                    />
                  </div>
                </fieldset>

                {/* VEHICLE */}
                <fieldset className="form-section">
                  <div className="section-legend">
                    <div className="section-icon">
                      <Car size={20} />
                    </div>

                    <div className="section-title-wrap">
                      <h2 className="section-title">Vehicle Information</h2>

                      <p className="section-description">
                        Vehicle age, category and valuation
                      </p>
                    </div>

                    <span className="section-number">03</span>
                  </div>

                  <div className="form-grid">
                    <Field
                      label="Age of Vehicle (years)"
                      name="ageOfVehicle"
                      icon={Car}
                      type="number"
                      min="0"
                      placeholder="5"
                      value={formData.ageOfVehicle}
                      error={errors.ageOfVehicle}
                      onChange={handleChange}
                    />

                    <Field
                      label="Vehicle Category"
                      name="vehicleCategory"
                      icon={Car}
                      placeholder="Select category"
                      options={[
                        {
                          value: "Small",
                          label: "Small",
                        },
                        {
                          value: "Medium",
                          label: "Medium",
                        },
                        {
                          value: "Large",
                          label: "Large",
                        },
                        {
                          value: "Luxury",
                          label: "Luxury",
                        },
                      ]}
                      value={formData.vehicleCategory}
                      error={errors.vehicleCategory}
                      onChange={handleChange}
                    />

                    <Field
                      label="Vehicle Price ($)"
                      name="vehiclePrice"
                      icon={DollarSign}
                      type="number"
                      min="0"
                      placeholder="28000"
                      value={formData.vehiclePrice}
                      error={errors.vehiclePrice}
                      onChange={handleChange}
                    />
                  </div>
                </fieldset>

                {/* FINANCIAL */}
                <fieldset className="form-section">
                  <div className="section-legend">
                    <div className="section-icon">
                      <DollarSign size={20} />
                    </div>

                    <div className="section-title-wrap">
                      <h2 className="section-title">Financial Information</h2>

                      <p className="section-description">
                        Claim values, deductible and premium
                      </p>
                    </div>

                    <span className="section-number">04</span>
                  </div>

                  <div className="form-grid">
                    <Field
                      label="Total Claim Value ($)"
                      name="totalClaim"
                      icon={WalletCards}
                      type="number"
                      min="0"
                      step="any"
                      placeholder="12500"
                      value={formData.totalClaim}
                      error={errors.totalClaim}
                      onChange={handleChange}
                    />

                    <Field
                      label="Injury Claim Portion ($)"
                      name="injuryClaim"
                      icon={DollarSign}
                      type="number"
                      min="0"
                      step="any"
                      placeholder="3500"
                      value={formData.injuryClaim}
                      error={errors.injuryClaim}
                      onChange={handleChange}
                    />

                    <Field
                      label="Policy Deductible ($)"
                      name="policyDeductible"
                      icon={WalletCards}
                      placeholder="Select deductible"
                      options={[
                        { value: "500", label: "$500" },
                        {
                          value: "1000",
                          label: "$1,000",
                        },
                        {
                          value: "1500",
                          label: "$1,500",
                        },
                        {
                          value: "2000",
                          label: "$2,000",
                        },
                        {
                          value: "2500",
                          label: "$2,500",
                        },
                      ]}
                      value={formData.policyDeductible}
                      error={errors.policyDeductible}
                      onChange={handleChange}
                    />

                    <Field
                      label="Annual Premium ($)"
                      name="annualPremium"
                      icon={DollarSign}
                      type="number"
                      min="0"
                      step="any"
                      placeholder="1450"
                      value={formData.annualPremium}
                      error={errors.annualPremium}
                      onChange={handleChange}
                    />
                  </div>
                </fieldset>

                {/* CLAIM PROCESS */}
                <fieldset className="form-section">
                  <div className="section-legend">
                    <div className="section-icon">
                      <ClipboardList size={20} />
                    </div>

                    <div className="section-title-wrap">
                      <h2 className="section-title">Claim Process</h2>

                      <p className="section-description">
                        Processing duration and form quality
                      </p>
                    </div>

                    <span className="section-number">05</span>
                  </div>

                  <div className="form-grid">
                    <Field
                      label="Days Open"
                      name="daysOpen"
                      icon={Clock3}
                      type="number"
                      min="0"
                      placeholder="18"
                      value={formData.daysOpen}
                      error={errors.daysOpen}
                      onChange={handleChange}
                    />

                    <Field
                      label="Form Defects Counter"
                      name="formDefects"
                      icon={AlertTriangle}
                      type="number"
                      min="0"
                      placeholder="1"
                      value={formData.formDefects}
                      error={errors.formDefects}
                      onChange={handleChange}
                    />
                  </div>
                </fieldset>

                {/* FOOTER */}
                <div className="form-footer">
                  <div className="footer-hint">
                    <LockKeyhole size={16} />
                    Your claim information is processed securely.
                  </div>

                  <div className="action-group">
                    <button
                      type="button"
                      className="action-button secondary-button"
                      onClick={handleReset}
                    >
                      <RotateCcw size={16} />
                      Reset Form
                    </button>

                    <button
                      type="submit"
                      className="action-button primary-button"
                    >
                      <Cpu size={17} />
                      Analyze Claim
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
}
