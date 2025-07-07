// src/components/Consent.jsx
import React, { useState } from "react";
import { useAppStore } from "../store/useAppStore";

const Consent = () => {
    const [decisionMade, setDecisionMade] = useState(false);
    const setPanelVisible = useAppStore((s) => s.setPanelVisible);
    const setRecordingState = useAppStore((s) => s.setRecordingState);

    if (decisionMade) return null;

    return (
        <div className="p-4 border-b">
            <p className="text-sm mb-3">Do you approve voice recording to proceed with Agile Scribe evaluation?</p>
            <div className="flex gap-4">
                <button
                    onClick={() => {
                        setRecordingState("recording");
                        setDecisionMade(true);
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Approve
                </button>
                <button
                    onClick={() => {
                        setPanelVisible(false);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Deny
                </button>
            </div>
        </div>
    );
};

export default Consent;
