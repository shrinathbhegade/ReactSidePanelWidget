// src/components/EntryModal.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";

const EntryModal = () => {
    const setPanelVisible = useAppStore((state) => state.setPanelVisible);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-lg font-semibold text-center text-gray-800 mb-6">
                    How do you wish to record observations?
                </h2>
                <div className="grid grid-cols-2 gap-6">
                    {/* Manual Option */}
                    <div className="flex flex-col items-center border rounded-xl p-4 text-center hover:shadow-md hover:border-blue-400 hover:scale-105 transition-transform duration-200">
                        <div className="text-2xl mb-2">📝</div>
                        <div className="font-medium text-gray-700 mb-1">Manual</div>
                        <div className="text-xs text-gray-500 mb-4">Record observations manually</div>
                        <button
                            onClick={() => setPanelVisible(true)}
                            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
                        >
                            ➝
                        </button>
                    </div>

                    {/* AgileSCRIBE Option */}
                    <div className="flex flex-col items-center border rounded-xl p-4 text-center bg-lime-50 hover:shadow-md hover:border-lime-400 hover:scale-105 transition-transform duration-200">
                        <div className="text-2xl mb-2">✨</div>
                        <div className="font-medium text-gray-700 mb-1">AgileSCRIBE</div>
                        <div className="text-xs text-gray-500 mb-4">Requires patient consent to record by AI</div>
                        <button
                            onClick={() => setPanelVisible(true)}
                            className="w-8 h-8 rounded-full bg-lime-600 text-white flex items-center justify-center hover:bg-lime-700"
                        >
                            ➝
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryModal;
