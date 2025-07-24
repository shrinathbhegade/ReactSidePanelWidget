// src/components/RecorderControls.jsx
import React, { useEffect, useState } from "react";
import { useAppStore } from "../store/useAppStore";
import MicVisualizer from "./MicVisualizer";
import { Icons } from "./ScribeIcons/Icons";

const RecorderControls = () => {
    const { recordingState, setRecordingState, setModals, isEditing, setIsEditing } = useAppStore();
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (recordingState !== "recording") return;
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, [recordingState]);

    if (recordingState === "idle") return null;

    const toggleRecording = () => {
        if (recordingState === "recording") {
            setRecordingState("paused");
        } else if (recordingState === "paused") {
            setIsEditing(false); // ← exit editing mode if active
            setRecordingState("recording");
        }
    };

    const formatTime = (s) => {
        const mins = String(Math.floor(s / 60)).padStart(2, "0");
        const secs = String(s % 60).padStart(2, "0");
        return `${mins}:${secs}`;
    };

    return (
        <div className="px-5 py-2 bg-[#b0d06a] border border-[#c4dc8f] shadow-lg shadow-[#b0d06a] rounded-full text-sm text-gray-700">
            <div className="flex items-center gap-4">
                <div className="text-2xl text-blue-600">
                    {recordingState === "paused" ? (<Icons.MicOff />) : (<Icons.Mic />)}
                </div>
                <MicVisualizer recordingState={recordingState} />
                <div className="text-sm text-gray-700">
                    {recordingState === "paused" && <span className="text-red-600 mr-1">Paused</span>}
                    {formatTime(seconds)}
                </div>
                <button
                    className="ml-auto px-4 py-2 rounded-full text-[#586835] font-semibold shadow transition-colors bg-white hover:border-[#3d4c1c] hover:ring-4 hover:ring-[#687a42] hover:ring-opacity-20"
                    onClick={toggleRecording}
                >
                    {recordingState === "recording" ? "PAUSE" : "RESUME"}
                </button>
            </div>
        </div>
    );
};

export default RecorderControls;