// src/components/Diagnosis.jsx
import React, { useState } from "react";

const Diagnosis = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="px-4 py-2 border-b border-gray-200 bg-white">
            <div
                className="flex items-center justify-between cursor-pointer mb-1"
                onClick={() => setCollapsed(!collapsed)}
            >
                <h3 className="text-base font-semibold text-gray-800"><strong>Precautions</strong></h3>
                <button className="text-gray-500 text-lg focus:outline-none">
                    {collapsed ? "▾" : "▴"}
                </button>
            </div>

            {!collapsed && (
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                    <ul>
                        <li>● Avoid twisting or pivoting on the operated leg</li>

                        <li>● No high-impact activities until cleared by the therapist</li>

                        <li>● Use knee brace as recommended</li>

                        <li>● Focus on controlled range-of-motion exercises only</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

// const Diagnosis = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     return (
//         <div className="px-5 py-3 bg-white border-b border-gray-200 flex items-start gap-2 text-sm text-gray-700">
//             <i className="fa-solid fa-stethoscope text-gray-500 mt-1"></i>
//             <div>
//                 <span className="font-medium text-gray-800">Diagnosis:</span> Back pain due to slipping and falling on hip.
//             </div>
//         </div>
//     );
// };

export default Diagnosis;
