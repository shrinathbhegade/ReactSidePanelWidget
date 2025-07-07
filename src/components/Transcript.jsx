// src/components/Transcript.jsx
import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../store/useAppStore";

const Transcript = () => {
    const { transcript, recordingState, setTranscript, appendTranscript, setRecordingState } = useAppStore();
    const [editHistory, setEditHistory] = useState([""]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const transcriptRef = useRef(null);

    // Scroll to bottom on new transcript
    useEffect(() => {
        if (recordingState === "recording") {
            const interval = setInterval(() => {
                // Mock stream
                appendTranscript(" This is a streamed phrase.");
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [recordingState]);

    useEffect(() => {
        if (transcriptRef.current && recordingState === "recording") {
            transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
        }
    }, [transcript]);

    const handleEdit = (e) => {
        const value = e.target.value;
        setTranscript(value);
        const newHistory = [...editHistory.slice(0, historyIndex + 1), value];
        setEditHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    };

    const undo = () => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setTranscript(editHistory[newIndex]);
            setHistoryIndex(newIndex);
        }
    };

    const redo = () => {
        if (historyIndex < editHistory.length - 1) {
            const newIndex = historyIndex + 1;
            setTranscript(editHistory[newIndex]);
            setHistoryIndex(newIndex);
        }
    };

    const editable = recordingState === "editing";

    return (
        <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">
                    Transcript - {recordingState === "paused" ? "Paused" : recordingState === "editing" ? "Edit" : "Recording"}
                </h4>
                {recordingState === "paused" && (
                    <button
                        onClick={() => {
                            setRecordingState("editing");
                            setEditHistory([transcript]);
                            setHistoryIndex(0);
                        }}
                        className="text-blue-600 text-sm hover:underline"
                    >
                        Edit
                    </button>
                )}
                {recordingState === "editing" && (
                    <div className="flex gap-2">
                        <button onClick={undo} className="text-gray-600 text-sm hover:underline">Undo</button>
                        <button onClick={redo} className="text-gray-600 text-sm hover:underline">Redo</button>
                    </div>
                )}
            </div>

            {editable ? (
                <textarea
                    className="w-full h-40 p-2 border rounded resize-none text-sm"
                    value={transcript}
                    onChange={handleEdit}
                />
            ) : (
                <div
                    ref={transcriptRef}
                    className="h-40 overflow-y-auto p-2 bg-gray-50 border text-sm rounded"
                >
                    {transcript || <span className="text-gray-400">Streaming transcript will appear here...</span>}
                </div>
            )}
        </div>
    );
};

export default Transcript;
