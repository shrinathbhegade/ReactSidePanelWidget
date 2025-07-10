// src/components/Consent.jsx
import React, { useState } from "react";
import { useAppStore } from "../store/useAppStore";

const Consent = () => {
    const [decisionMade, setDecisionMade] = useState(false);
    const setPanelVisible = useAppStore((s) => s.setPanelVisible);
    const setRecordingState = useAppStore((s) => s.setRecordingState);

    if (decisionMade) return null;

    return (
        <div className="px-5 py-4 border-b border-gray-200 bg-white rounded-md shadow-sm">
            <p className="text-sm text-gray-700 mb-4">
                <strong className="text-gray-800">Consent Required:</strong> Do you approve voice recording to proceed with Agile Scribe evaluation?
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => {
                        setRecordingState("recording");
                        setDecisionMade(true);
                    }}
                    className="bg-green-600 text-white px-5 py-2 rounded-md font-medium shadow hover:bg-green-700 transition-colors"
                >
                    Approve
                </button>
                <button
                    onClick={() => {
                        setPanelVisible(false);
                    }}
                    className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md font-medium shadow hover:bg-gray-300 transition-colors"
                >
                    Deny
                </button>
            </div>
        </div>
    );
};

export default Consent;
