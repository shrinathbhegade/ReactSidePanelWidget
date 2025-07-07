// src/components/PatientInfo.jsx
import React from "react";

const PatientInfo = () => {
    // Placeholder values – these can come from props or context
    const name = "John Doe";
    const age = 45;
    const gender = "Male";

    return (
        <div className="flex items-center gap-4 p-4 border-b">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
                👤
            </div>
            <div>
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-gray-600">{age} yrs • {gender}</div>
            </div>
        </div>
    );
};

export default PatientInfo;
