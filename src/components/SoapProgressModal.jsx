// src/components/SoapProgressModal.jsx
import React from "react";

const SoapProgressModal = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-200 p-5 shadow-xl z-10">
            <div className="text-sm text-gray-800 font-medium mb-3">SOAP Generation Status</div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div className="bg-green-500 h-3 animate-pulse rounded-full w-3/4 transition-all duration-1000"></div>
            </div>
        </div>
    );
};

export default SoapProgressModal;
