import React, { useState } from "react";

const Precautions = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="px-0 py-2 border-gray-200 bg-[#f6f9ec]">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setCollapsed(!collapsed)}
            >
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-notes-medical text-gray-500"></i>
                    <span className="font-medium text-gray-800">Precautions</span>
                </div>
                <button className="text-gray-500 text-lg focus:outline-none">
                    {collapsed ? "▾" : "▴"}
                </button>
            </div>

            {!collapsed && (
                <div
                    className={`overflow-hidden transition-all duration-300 ${collapsed ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'} origin-top`}
                >
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Avoid twisting or pivoting on the operated leg</li>
                        <li>No high-impact activities until cleared by the therapist</li>
                        <li>Use knee brace as recommended</li>
                        <li>Focus on controlled range-of-motion exercises only</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Precautions;