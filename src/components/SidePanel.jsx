// src/components/SidePanel.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";
import PatientInfo from "./PatientInfo";
import Diagnosis from "./Diagnosis";
import Consent from "./Consent";
import RecorderControls from "./RecorderControls";
import Transcript from "./Transcript";
import GenerateSoapModal from "./GenerateSoapModal";
import SoapProgressModal from "./SoapProgressModal";
import ExitConfirmationModal from "./ExitConfirmationModal";

const SidePanel = () => {
    const { panelVisible, resetAll, modals } = useAppStore();

    if (!panelVisible) return null;

    return (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-xl z-50 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <img src="/src/assets/brand-logo.png" alt="Brand Logo" className="h-8" />
                <button
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => useAppStore.getState().setModals({ exitConfirmation: true })}
                >
                    ✕
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <PatientInfo />
                <Diagnosis />
                <Consent />
                <RecorderControls />
                <Transcript />
            </div>

            {/* Modals */}
            {modals.generateSoap && <GenerateSoapModal />}
            {modals.soapProgress && <SoapProgressModal />}
            {modals.exitConfirmation && <ExitConfirmationModal onConfirm={resetAll} />}
        </div>
    );
};

export default SidePanel;
