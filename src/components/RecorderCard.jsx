import React from "react";
import RecorderControls from "./RecorderControls";
import Transcript from "./Transcript";

const RecorderCard = () => {
    return (
        <div className="px-5 py-3 bg-[#f6f9ec] border border-[#c4dc8f] mx-4 mt-3 rounded-xl text-sm text-gray-700">
            <RecorderControls />
            <Transcript />
        </div>
    );
}

export default RecorderCard;