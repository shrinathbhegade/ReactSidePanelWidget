// src/components/Consent.jsx
import React, { useState } from "react";
import { useAppStore } from "../store/useAppStore";
import { Icons } from "./ScribeIcons/Icons";

const Consent = () => {
    const [decisionMade, setDecisionMade] = useState(false);
    const setPanelVisible = useAppStore((s) => s.setPanelVisible);
    const setRecordingState = useAppStore((s) => s.setRecordingState);
    const setEntryModalVisible = useAppStore((s) => s.setEntryModalVisible);

    if (decisionMade) return null;

    return (
        <div className="bg-white p-4 border border-orangeBorder shadow-md shadow-orangeBorder rounded-lg mx-4 my-4">
            <div className="flex items-center gap-2 mb-2">
                <Icons.ListAltCheck className="text-orangeText h-6 w-8" />
                <span className="font-semibold text-gray-800 text-sm">Consent</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
                Your participation is voluntary and all information will be kept confidential.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => {
                        document.body.style.overflow = 'auto';
                        setPanelVisible(false);
                        setEntryModalVisible(false);
                    }}
                    className="border border-orangeBorder text-orangeText px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-xl hover:brightness-75"
                >
                    <Icons.Cancel className="text-orangeText h-6 w-6" /> Deny
                </button>
                <button
                    onClick={() => {
                        setRecordingState("recording");
                        setDecisionMade(true);
                    }}
                    className="bg-orangeButton text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow hover:shadow-xl hover:brightness-110"
                >
                    <Icons.CheckCircle className="text-white h-6 w-6" /> Approve
                </button>
            </div>
        </div>
    );
};



export default Consent;
