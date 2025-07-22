import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Precautions = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="-mx-5 border-gray-200 bg-[#f6f9ec] pb-2 rounded-bl-xl rounded-br-xl">
            <div
                className="flex items-center justify-between cursor-pointer px-4 py-2"
                onClick={() => setCollapsed(!collapsed)}
            >
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-notes-medical text-gray-500"></i>
                    <span className="font-medium text-gray-800">Precautions</span>
                </div>
                <button className="text-gray-500 text-lg focus:outline-none">
                    {collapsed ? "▾" : "▴"}
                </button>
            </div>

            <AnimatePresence>
                {!collapsed && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-[#f6f9ec] px-4 pb-2"
                    >
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Avoid twisting or pivoting on the operated leg</li>
                            <li>No high-impact activities until cleared by the therapist</li>
                            <li>Use knee brace as recommended</li>
                            <li>Focus on controlled range-of-motion exercises only</li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Precautions;