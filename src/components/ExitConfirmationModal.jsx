// src/components/ExitConfirmationModal.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";

const ExitConfirmationModal = ({ onConfirm }) => {
    const setModals = useAppStore((s) => s.setModals);

    return (
        <div className="absolute top-20 left-0 right-0 mx-6 bg-white shadow-2xl border border-gray-200 rounded-xl px-6 py-6 z-50">
            <div className="text-sm text-gray-800 mb-4">
                <strong className="font-semibold">Record information will be lost.</strong><br />
                Would you like to proceed?
            </div>
            <div className="flex justify-end gap-4">
                <button
                    className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md font-medium shadow hover:bg-gray-300 transition-colors"
                    onClick={() => setModals({ exitConfirmation: false })}
                >
                    No
                </button>
                <button
                    className="px-5 py-2 bg-red-600 text-white rounded-md font-medium shadow hover:bg-red-700 transition-colors"
                    onClick={() => {
                        setModals({ exitConfirmation: false });
                        onConfirm();
                    }}
                >
                    Yes
                </button>
            </div>
        </div>
    );
};

export default ExitConfirmationModal;
