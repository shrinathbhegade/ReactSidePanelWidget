// src/components/GenerateSoapModal.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";

const GenerateSoapModal = () => {
    const setModals = useAppStore((s) => s.setModals);

    const confirm = () => {
        setModals({ generateSoap: false, soapProgress: true });
        setTimeout(() => {
            setModals({ soapProgress: false });
        }, 4000); // simulate generation
    };

    return (
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-200 p-5 shadow-xl z-10">
            <div className="text-sm text-gray-800 mb-4">
                Are you sure you want to generate the SOAP note?
            </div>
            <div className="flex justify-end gap-4">
                <button
                    className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md font-medium shadow hover:bg-gray-300 transition-colors"
                    onClick={() => setModals({ generateSoap: false })}
                >
                    No
                </button>
                <button
                    className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-700 transition-colors"
                    onClick={confirm}
                >
                    Yes
                </button>
            </div>
        </div>
    );
};

export default GenerateSoapModal;
