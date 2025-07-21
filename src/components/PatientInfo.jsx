// src/components/PatientInfo.jsx
import React from "react";

const PatientInfo = () => {
    const name = "Penny Johnson";
    const age = 45;
    const gender = "Female";
    const dob = "24 Jan 1980";
    const payer = "United Healthcare";
    const referingProvider = "Sayali N";

    return (
        <div className="px-0 py-2 border-b border-gray-200 bg-[#f6f9ec]">
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
                {/* <div>
                    <div className="text-base font-semibold text-gray-800">Refering Provider</div>
                    <div className="text-sm text-gray-500">{referingProvider}</div>
                </div> */}
            </div>
        </div>
    );
};

export default PatientInfo;
