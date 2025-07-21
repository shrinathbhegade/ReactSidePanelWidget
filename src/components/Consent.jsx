// src/components/Consent.jsx
import React, { useState } from "react";
import { useAppStore } from "../store/useAppStore";

const Consent = () => {
    const [decisionMade, setDecisionMade] = useState(false);
    const setPanelVisible = useAppStore((s) => s.setPanelVisible);
    const setRecordingState = useAppStore((s) => s.setRecordingState);

    if (decisionMade) return null;

    return (
        <div className="bg-[#f6f9ec] p-4 border border-[#c4dc8f] rounded-lg mx-4 my-3">
            <div className="flex items-center gap-2 mb-2">
                <i className="fa-regular fa-file-lines text-orange-500"></i>
                <span className="font-semibold text-gray-800 text-sm">Consent</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
                Your participation is voluntary, and all information will be kept confidential.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => {
                        setPanelVisible(false);
                    }}
                    className="border border-orange-400 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2"
                >
                    <i className="fa-regular fa-circle-xmark"></i> Deny
                </button>
                <button
                    onClick={() => {
                        setRecordingState("recording");
                        setDecisionMade(true);
                    }}
                    className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow"
                >
                    <i className="fa-regular fa-circle-check"></i> Approve
                </button>
            </div>
        </div>
    );
};



export default Consent;
