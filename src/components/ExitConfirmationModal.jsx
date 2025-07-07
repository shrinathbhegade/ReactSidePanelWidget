// src/components/ExitConfirmationModal.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";

const ExitConfirmationModal = ({ onConfirm }) => {
    const setModals = useAppStore((s) => s.setModals);

    return (
        <div className="absolute top-16 left-4 right-4 bg-white shadow-xl border rounded p-4 z-50 mx-4">
            <div className="text-sm mb-4">
                <strong>Record information will be lost.</strong> Would you like to proceed?
            </div>
            <div className="flex justify-end gap-3">
                <button
                    className="px-4 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
                    onClick={() => setModals({ exitConfirmation: false })}
                >
                    No
                </button>
                <button
                    className="px-4 py-1 rounded bg-red-600 text-white hover:bg-red-700"
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
