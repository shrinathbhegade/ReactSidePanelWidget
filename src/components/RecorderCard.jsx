import React from "react";
import RecorderControls from "./RecorderControls";
import Transcript from "./Transcript";

const RecorderCard = () => {
    return (
        <div className="px-5 py-3 bg-[#ffffff] border border-[#c4dc8f] mx-4 mt-5 rounded-4xl text-sm text-gray-700 h-2/3">
            <RecorderControls />
            <Transcript />
        </div>
    );
}

export default RecorderCard;