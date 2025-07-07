// src/components/RecorderControls.jsx
import React, { useEffect, useState } from "react";
import { useAppStore } from "../store/useAppStore";

const RecorderControls = () => {
    const { recordingState, setRecordingState, setModals } = useAppStore();
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (recordingState !== "recording") return;
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, [recordingState]);

    if (recordingState === "idle") return null;

    const toggleRecording = () => {
        setRecordingState(recordingState === "paused" ? "recording" : "paused");
    };

    const formatTime = (s) => {
        const mins = String(Math.floor(s / 60)).padStart(2, "0");
        const secs = String(s % 60).padStart(2, "0");
        return `${mins}:${secs}`;
    };

    return (
        <div className="p-4 border-b space-y-3">
            <div className="flex items-center gap-4">
                <div className="text-2xl">
                    {recordingState === "paused" ? "🎙️❌" : "🎙️"}
                </div>
                <div className="flex gap-1 h-5">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-1 bg-blue-500 rounded ${recordingState === "recording"
                                ? `animate-pulse delay-[${i * 100}ms]`
                                : "opacity-30"
                                }`}
                            style={{ height: `${10 + (i % 3) * 5}px` }}
                        ></div>
                    ))}
                </div>
                <div className="text-sm text-gray-700">
                    {recordingState === "paused" && <span className="text-red-600 mr-1">Paused</span>}
                    {formatTime(seconds)}
                </div>
                <button
                    className="ml-auto px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={toggleRecording}
                >
                    {recordingState === "paused" ? "Resume" : "Pause"}
                </button>
            </div>

            <div className="text-right">
                <button
                    disabled={recordingState !== "paused"}
                    onClick={() => setModals({ generateSoap: true })}
                    className={`px-4 py-1 rounded text-white ${recordingState === "paused"
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-purple-300 cursor-not-allowed"
                        }`}
                >
                    Generate SOAP
                </button>
            </div>
        </div>
    );
};

export default RecorderControls;
