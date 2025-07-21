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
                    className={`px-6 py-2 rounded-md font-semibold shadow transition-colors text-white ${recordingState === "paused"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-purple-200 cursor-not-allowed"
                        }`}
                >
                    ✨ Generate SOAP
                </button>
            </div>
        </div>
    );
};

export default GenerateSoapAction;
