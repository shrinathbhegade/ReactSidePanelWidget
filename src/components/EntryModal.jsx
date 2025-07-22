// src/components/EntryModal.jsx
import React from "react";
import { useAppStore } from "../store/useAppStore";
import { motion } from 'framer-motion';
import { Icons } from "./ScribeIcons/Icons";

const EntryModal = () => {
    const setPanelVisible = useAppStore((state) => state.setPanelVisible);

    const { entryModalVisible, setEntryModalVisible } = useAppStore();

    if (!entryModalVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-lg font-semibold text-center text-gray-800 mb-6">
                    How do you wish to record observations?
                </h2>
                <div className="grid grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center border rounded-xl p-4 text-center hover:shadow-md hover:border-blue-400 transition cursor-pointer relative"
                        onClick={() => setPanelVisible(true)}
                    >
                        <div className="text-2xl mb-2"><Icons.ContractNote /></div>
                        <div className="font-medium text-gray-700 mb-1">Manual</div>
                        <div className="text-xs text-gray-500 mb-6">Record observations manually</div>
                        <div className="absolute -bottom-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-md">
                                <Icons.ArrowBack className="text-white w-3/4" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="flex flex-col items-center border rounded-xl p-4 text-center bg-lime-50 hover:shadow-md hover:border-lime-400 transition cursor-pointer relative"
                        onClick={() => setPanelVisible(true)}
                    >
                        <div className="text-2xl mb-2"><Icons.WandStars /></div>
                        <div className="font-medium text-gray-700 mb-1">AgileSCRIBE</div>
                        <div className="text-xs text-gray-500 mb-6">Requires patient consent to record by AI</div>
                        <div className="absolute -bottom-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-lime-600 text-white rounded-full shadow-md">
                                <Icons.ArrowForward className="text-white w-3/4" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default EntryModal;

