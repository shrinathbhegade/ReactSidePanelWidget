// src/components/PatientInfo.jsx
import React from "react";

const PatientInfo = () => {
    const name = "John Doe";
    const age = 45;
    const gender = "Male";

    return (
        <div className="px-6 py-5 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl shadow">
                    👤
                </div>
                <div>
                    <div className="text-base font-semibold text-gray-800">{name}</div>
                    <div className="text-sm text-gray-500">{age} yrs • {gender}</div>
                </div>
            </div>
        </div>
    );
};

export default PatientInfo;
