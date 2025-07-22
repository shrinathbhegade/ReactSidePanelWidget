// src/components/GenerateSoapAction.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";

const GenerateSoapAction = () => {
    const { recordingState, setModals } = useAppStore();

    if (recordingState === "idle") return null;

    return (
        <div className="px-4 py-2 bg-white border-gray-200">
            <div className="text-right">
                <button
                    disabled={recordingState !== "paused"}
                    onClick={() => setModals({ generateSoap: true })}
                    className={`px-6 py-2 rounded-full font-semibold shadow transition-colors text-white ${recordingState === "paused"
                        ? "bg-[#586835] hover:brightness-125"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    ✨ GENERATE SOAP
                </button>
            </div>
        </div>
    );
};

export default GenerateSoapAction;
