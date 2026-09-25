
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
from pathlib import Path






app = FastAPI(
    title="Vehicle Insurance Fraud Detection API",
    version="1.0.0"
)






app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://vehicle-insurance-fraud-ml-2.onrender.com",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)






BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    BASE_DIR
    / "model"
    / "vehicle_fraud_final_model.pkl"
)






print("========================================")
print("LOADING ML MODEL")
print("========================================")

print("MODEL PATH:")
print(MODEL_PATH)

try:

    model = joblib.load(MODEL_PATH)

    print("MODEL LOADED SUCCESSFULLY")
    print("MODEL TYPE:")
    print(type(model))

    if hasattr(model, "feature_names_in_"):

        print("MODEL FEATURES:")

        print(
            model.feature_names_in_
        )

except Exception as e:

    print("MODEL LOADING ERROR:")
    print(repr(e))

    raise






class VehicleData(BaseModel):

    age_of_driver: int

    safety_rating: int

    annual_income: float

    high_education: int

    address_change: int

    property_status: str

    claim_date: str

    claim_day_of_week: str

    accident_site: str

    past_num_of_claims: int

    witness_present: int

    liab_prct: float

    channel: str

    police_report: int

    age_of_vehicle: int

    vehicle_category: str

    vehicle_price: float

    total_claim: float

    injury_claim: float

    policy_deductible: float

    annual_premium: float

    days_open: float

    form_defects: int






def create_features(df):

    print("========================================")
    print("STARTING FEATURE ENGINEERING")
    print("========================================")


    
    
    

    df["claim_date"] = pd.to_datetime(
        df["claim_date"],
        errors="coerce"
    )


    if df["claim_date"].isna().any():

        raise ValueError(
            "Invalid claim_date format."
        )


    
    
    

    df["claim_year"] = (
        df["claim_date"].dt.year
    )

    df["claim_month"] = (
        df["claim_date"].dt.month
    )

    df["claim_day"] = (
        df["claim_date"].dt.day
    )

    df["claim_day_number"] = (
        df["claim_date"].dt.dayofweek
    )

    df["claim_week"] = (
        df["claim_date"]
        .dt.isocalendar()
        .week
        .astype(float)
    )


    
    
    

    df["claim_vehicle_ratio"] = (
        df["total_claim"]
        / (df["vehicle_price"] + 1)
    )


    df["claim_premium_ratio"] = (
        df["total_claim"]
        / (df["annual_premium"] + 1)
    )


    df["injury_claim_ratio"] = (
        df["injury_claim"]
        / (df["total_claim"] + 1)
    )


    
    
    

    df = df.drop(
        columns=["claim_date"]
    )


    print("FEATURE ENGINEERING COMPLETED")

    print("ENGINEERED FEATURES:")

    print(
        [
            "claim_year",
            "claim_month",
            "claim_day",
            "claim_day_number",
            "claim_week",
            "claim_vehicle_ratio",
            "claim_premium_ratio",
            "injury_claim_ratio"
        ]
    )


    return df






@app.get("/")
def home():

    return {
        "message":
        "Vehicle Fraud Detection API is running"
    }






@app.get("/health")
def health():

    return {

        "status":
        "healthy",

        "model_loaded":
        model is not None
    }







@app.post("/predict")
def predict(data: VehicleData):

    try:

        print("========================================")
        print("PREDICT REQUEST RECEIVED")
        print("========================================")


        # =================================================
        # CREATE ORIGINAL DATAFRAME
        # =================================================

        input_data = pd.DataFrame([
            {
                "age_of_driver": data.age_of_driver,
                "safety_rating": data.safety_rating,
                "annual_income": data.annual_income,
                "high_education": data.high_education,
                "address_change": data.address_change,
                "property_status": data.property_status,
                "claim_date": data.claim_date,
                "claim_day_of_week": data.claim_day_of_week,
                "accident_site": data.accident_site,
                "past_num_of_claims": data.past_num_of_claims,
                "witness_present": data.witness_present,
                "liab_prct": data.liab_prct,
                "channel": data.channel,
                "police_report": data.police_report,
                "age_of_vehicle": data.age_of_vehicle,
                "vehicle_category": data.vehicle_category,
                "vehicle_price": data.vehicle_price,
                "total_claim": data.total_claim,
                "injury_claim": data.injury_claim,
                "policy deductible": data.policy_deductible,
                "annual premium": data.annual_premium,
                "days open": data.days_open,
                "form defects": data.form_defects
            }
        ])


        print("ORIGINAL COLUMNS:")
        print(input_data.columns.tolist())


        # =================================================
        # FEATURE ENGINEERING
        # =================================================

        input_data["claim_date"] = pd.to_datetime(
            input_data["claim_date"],
            errors="coerce"
        )


        if input_data["claim_date"].isna().any():

            raise ValueError(
                "Invalid claim_date"
            )


        # =================================================
        # DATE FEATURES
        # =================================================

        input_data["claim_year"] = (
            input_data["claim_date"].dt.year
        )

        input_data["claim_month"] = (
            input_data["claim_date"].dt.month
        )

        input_data["claim_day"] = (
            input_data["claim_date"].dt.day
        )

        input_data["claim_day_number"] = (
            input_data["claim_date"].dt.dayofweek
        )

        input_data["claim_week"] = (
            input_data["claim_date"]
            .dt.isocalendar()
            .week
            .astype(float)
        )


        # =================================================
        # RATIO FEATURES
        # =================================================

        input_data["claim_vehicle_ratio"] = (
            input_data["total_claim"]
            /
            (input_data["vehicle_price"] + 1)
        )


        input_data["claim_premium_ratio"] = (
            input_data["total_claim"]
            /
            (input_data["annual premium"] + 1)
        )


        input_data["injury_claim_ratio"] = (
            input_data["injury_claim"]
            /
            (input_data["total_claim"] + 1)
        )


        # =================================================
        # REMOVE ORIGINAL CLAIM DATE
        # =================================================

        input_data = input_data.drop(
            columns=["claim_date"]
        )


        print("========================================")
        print("FEATURE ENGINEERING COMPLETED")
        print("========================================")

        print(
            input_data.columns.tolist()
        )


        # =================================================
        # CHECK REQUIRED FEATURES
        # =================================================

        required_features = [
            "claim_year",
            "claim_month",
            "claim_day",
            "claim_day_number",
            "claim_week",
            "claim_vehicle_ratio",
            "claim_premium_ratio",
            "injury_claim_ratio"
        ]


        missing_features = [
            feature
            for feature in required_features
            if feature not in input_data.columns
        ]


        if missing_features:

            raise ValueError(
                f"Feature engineering failed. "
                f"Missing: {missing_features}"
            )


        # =================================================
        # MODEL PREDICTION
        # =================================================

        print("========================================")
        print("CALLING ML MODEL")
        print("========================================")


        prediction = model.predict(
            input_data
        )[0]


        # =================================================
        # RESULT
        # =================================================

        if prediction == 1:

            result = "Fraud"

        else:

            result = "Not Fraud"


        print("========================================")
        print("PREDICTION SUCCESS")
        print("Prediction:", prediction)
        print("Result:", result)
        print("========================================")


        return {
            "prediction": int(prediction),
            "result": result
        }


    except Exception as e:

        print("========================================")
        print("PREDICTION ERROR")
        print("========================================")

        print(str(e))

        print("========================================")


        return {
            "error": "Prediction failed",
            "details": str(e)
        }

     

    except Exception as e:

        print("========================================")
        print("PREDICTION ERROR")
        print("========================================")

        print(
            repr(e)
        )

        print("========================================")


        return {

            "error":
            "Prediction failed",

            "details":
            str(e)

        }
