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
import GenerateSoapAction from "./GenerateSoapAction";


const SidePanel = () => {

    const { panelVisible, resetAll, modals, recordingState } = useAppStore();
    if (!panelVisible) return null;

    return (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[40%] max-w-[500px] bg-white shadow-2xl z-50 flex flex-col overflow-hidden rounded-l-2xl border-l border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-50">
                <img src="/src/assets/brand-logo.png" alt="Brand Logo" className="h-8" />
                <button
                    className="text-gray-400 hover:text-red-500 text-xl font-bold"
                    onClick={() => useAppStore.getState().setModals({ exitConfirmation: true })}
                >
                    &times;
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-white">
                <PatientInfo />
                <Diagnosis />
                <Consent />
                <RecorderControls />
                {recordingState !== "idle" && (
                    <>
                        <Transcript />
                        <GenerateSoapAction />
                    </>
                )}
            </div>

            {/* Modals */}
            {modals.generateSoap && <GenerateSoapModal />}
            {modals.soapProgress && <SoapProgressModal />}
            {modals.exitConfirmation && <ExitConfirmationModal onConfirm={resetAll} />}
        </div>
    );
};

export default SidePanel;
