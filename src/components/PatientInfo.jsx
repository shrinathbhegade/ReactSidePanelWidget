// src/components/PatientInfo.jsx
import React from "react";
import { Icons } from "./ScribeIcons/Icons";

const PatientInfo = () => {
    const name = "Penny Johnson";
    const age = 45;
    const gender = "Female";
    const dob = "24 Jan 1980";
    const payer = "United Healthcare";
    const referingProvider = "Sayali N";

    return (
        <div className="pb-2">
            <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl shadow">
                    👤
                </div>
                <div>
                    <div className="text-base font-semibold text-gray-800">{name}</div>
                    <div className="text-sm text-gray-500">{age} yrs • {gender}</div>
                </div>
                <div>
                    <div className="text-base font-semibold text-gray-800">Date of Birth</div>
                    <div className="text-sm text-gray-500">{dob}</div>
                </div>
                <div>
                    <div className="text-base font-semibold text-gray-800">Payer</div>
                    <div className="text-sm text-gray-500">{payer}</div>
                </div>
                <div>
                    <div className="text-base font-semibold text-gray-800">Refering Provider</div>
                    <div className="text-sm text-gray-500">{referingProvider}</div>
                </div>
            </div>
            <hr className="mt-2"></hr>
            <div className="mb-2 mt-2 flex gap-2">
                <Icons.Stethoscope /><span>Diagnosis: Back pain due to falling on hip</span>
            </div>
        </div>
    );
};

export default PatientInfo;
