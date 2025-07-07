// src/components/SoapProgressModal.jsx
import React from "react";

const SoapProgressModal = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full bg-white border-t p-4 shadow-xl z-10">
            <div className="mb-2 text-sm font-medium">SOAP Generation Status</div>
            <div className="w-full bg-gray-200 h-3 rounded">
                <div className="bg-green-500 h-3 animate-pulse rounded w-3/4"></div>
            </div>
        </div>
    );
};

export default SoapProgressModal;
