// src/components/Diagnosis.jsx
import React, { useState } from "react";

const Diagnosis = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="px-6 py-5 border-b border-gray-200 bg-white">
            <div
                className="flex items-center justify-between cursor-pointer mb-1"
                onClick={() => setCollapsed(!collapsed)}
            >
                <h3 className="text-base font-semibold text-gray-800">Diagnosis</h3>
                <button className="text-gray-500 text-lg focus:outline-none">
                    {collapsed ? "▾" : "▴"}
                </button>
            </div>
            {!collapsed && (
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                    <p>Type 2 Diabetes Mellitus</p>
                    <p>Hypertension</p>
                </div>
            )}
        </div>
    );
};

export default Diagnosis;
