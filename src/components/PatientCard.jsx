// src/components/PatientCard.jsx
import React from "react";
import PatientInfo from "./PatientInfo";
import Diagnosis from "./Diagnosis";
import Consent from "./Consent";

const PatientCard = () => {
    return (
        <div className="px-6">
            <div className="bg-white border border-gray-200 rounded-t-2xl px-5 pt-6 pb-4">
                <PatientInfo />
                <Diagnosis />
                <Consent />
            </div>
        </div>
    );
};

export default PatientCard;
