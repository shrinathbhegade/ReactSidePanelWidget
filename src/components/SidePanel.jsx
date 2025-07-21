// src/components/SidePanel.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";
import RecorderControls from "./RecorderControls";
import Transcript from "./Transcript";
import GenerateSoapAction from "./GenerateSoapAction";
import PatientInfo from "./PatientInfo";
import Diagnosis from "./Diagnosis";
import Consent from "./Consent";
import GenerateSoapModal from "./GenerateSoapModal";
import SoapProgressModal from "./SoapProgressModal";
import ExitConfirmationModal from "./ExitConfirmationModal";
import Precautions from "./Precautions";
import PatientCard from "./PatientCard";
import RecorderCard from "./RecorderCard";



const SidePanel = () => {

    const { panelVisible, resetAll, modals, recordingState } = useAppStore();
    if (!panelVisible) return null;

    return (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[50%] max-w-[640px] bg-[#f6f9ec] shadow-2xl z-50 flex flex-col overflow-hidden rounded-l-xl border-l border-gray-200">
            <div className="flex items-center justify-between px-2 py-2 border-b border-gray-200 bg-[#b0d06a]">
                <img src="/Content/Images/brand-logo.png" alt="Brand Logo" className="h-8" />
                <button
                    className="text-gray-400 hover:text-red-500 text-xl font-bold"
                    onClick={() => useAppStore.getState().setModals({ exitConfirmation: true })}
                >
                    &times;
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-white">
                <PatientCard />
                <Consent />
                {/* <RecorderControls /> */}
                {recordingState !== "idle" && (
                    <>
                        {/* <Transcript /> */}
                        <RecorderCard />
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
