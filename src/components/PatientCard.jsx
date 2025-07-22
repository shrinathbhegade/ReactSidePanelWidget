// src/components/PatientCard.jsx
import React from "react";
import PatientInfo from "./PatientInfo";
import Diagnosis from "./Diagnosis";
import Precautions from "./Precautions";
import Consent from "./Consent";

const PatientCard = () => {
    return (
        <div className="px-5 pt-3 bg-[#ffffff] border border-[#c4dc8f] mx-4 mt-3 rounded-xl text-sm text-gray-700">
            <PatientInfo />
            <Precautions />
        </div>
    );
};

export default PatientCard;
