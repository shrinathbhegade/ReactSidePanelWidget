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
        <div className="absolute bottom-0 left-0 w-full bg-white border-t p-4 shadow-xl z-10">
            <div className="text-sm mb-3">Are you sure you want to generate the SOAP note?</div>
            <div className="flex justify-end gap-4">
                <button
                    className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    onClick={() => setModals({ generateSoap: false })}
                >
                    No
                </button>
                <button
                    className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={confirm}
                >
                    Yes
                </button>
            </div>
        </div>
    );
};

export default GenerateSoapModal;
