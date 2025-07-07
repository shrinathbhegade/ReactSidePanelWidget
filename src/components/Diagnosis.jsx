// src/components/Diagnosis.jsx
import React, { useState } from "react";

const Diagnosis = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="p-4 border-b">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
                <h3 className="font-semibold text-lg">Diagnosis</h3>
                <button className="text-gray-600 text-xl">{collapsed ? "▾" : "▴"}</button>
            </div>
            {!collapsed && (
                <div className="mt-2 text-sm text-gray-700">
                    <p>Type 2 Diabetes Mellitus</p>
                    <p>Hypertension</p>
                </div>
            )}
        </div>
    );
};

export default Diagnosis;
