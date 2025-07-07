// src/components/EntryModal.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";

const EntryModal = () => {
    const setPanelVisible = useAppStore((state) => state.setPanelVisible);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md text-center">
                <h2 className="text-xl font-semibold mb-6">Start Evaluation</h2>
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={() => setPanelVisible(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Agile Scribe
                    </button>
                    <button
                        onClick={() => setPanelVisible(false)}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EntryModal;
