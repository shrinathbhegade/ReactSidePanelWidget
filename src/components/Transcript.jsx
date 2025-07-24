// src/components/Transcript.jsx
import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../store/useAppStore";
import { Icons } from "./ScribeIcons/Icons";

const Transcript = () => {
    const { transcript, recordingState, setTranscript, appendTranscript, setRecordingState, isEditing, setIsEditing } = useAppStore();
    const [editHistory, setEditHistory] = useState([""]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const transcriptRef = useRef(null);
    const editInputRef = useRef(null);

    useEffect(() => {
        if (recordingState === "recording") {
            const interval = setInterval(() => {
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

    useEffect(() => {
        if (isEditing && editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [isEditing]);

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
        <div className="mt-5 border-gray-200">
            <div className="flex justify-between items-center mb-3">
                <h4 className="text-base font-semibold text-gray-800">
                    Transcript - {isEditing ? "Edit" : recordingState === "paused" ? "Paused" : "Recording"}
                </h4>
                {(recordingState === "paused" && !isEditing) && (
                    <button
                        onClick={() => {
                            setRecordingState("paused"); // keep paused
                            setIsEditing(true);
                            setEditHistory([transcript]);
                            setHistoryIndex(0);
                        }}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        {/* <Icons.Edit /> */}Edit
                    </button>
                )}
                {isEditing && (
                    <div className="flex gap-3">
                        <button onClick={undo} className="text-sm text-gray-600 hover:underline">Undo</button>
                        <button onClick={redo} className="text-sm text-gray-600 hover:underline">Redo</button>
                    </div>
                )}
            </div>

            {isEditing ? (
                <textarea
                    ref={editInputRef}
                    className="w-full p-2 h-40 border rounded-md resize-none text-sm text-gray-800 focus:outline-none"
                    value={transcript}
                    onChange={handleEdit}
                />
            ) : (
                <div
                    ref={transcriptRef}
                    className="h-40 overflow-y-auto text-sm text-gray-800 rounded-md whitespace-pre-wrap"
                >
                    {transcript || <span className="text-gray-400">Streaming transcript will appear here...</span>}
                </div>
            )}
        </div>
    );
};

export default Transcript;
