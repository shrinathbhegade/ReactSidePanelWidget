import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const barCount = 10; // Number of bars

const MicVisualizer = ({ recordingState }) => {
    // State to hold the heights of the bars (initializing to 5px)
    const [barHeights, setBarHeights] = useState(
        Array(barCount).fill(5) // Initial height of all bars as 5px
    );

    useEffect(() => {

        if (recordingState === "paused") {
            return;
        }

        // Simulate microphone input by randomizing heights every 1 second
        const interval = setInterval(() => {
            const newHeights = barHeights.map(() => {
                // Randomize height between 5px to 10px
                return Math.floor(Math.random() * 11) + 5; // Random height between 5px and 10px
            });

            setBarHeights(newHeights); // Update the bar heights with new values

            // Reset after 500ms (simulating the end of input)
            setTimeout(() => {
                setBarHeights(Array(barCount).fill(5)); // Reset to initial height (5px)
            }, 250); // Reset after 500ms
        }, 500); // Trigger every 1 second

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, [barHeights, recordingState]); // Runs whenever barHeights is updated

    return (
        <div className="flex items-end h-10 p-4 rounded-lg">
            {barHeights.map((height, index) => (
                <motion.div
                    key={index}
                    className="w-[3px] bg-gray-700 rounded-sm mx-[2px]" // Margin between bars
                    animate={{
                        height: recordingState === "paused" ? `${5}px` : `${height}px`, // If paused, set height to 5px
                        scaleY: recordingState === "paused" ? 1 : 1 + (height - 5) / 15, // If paused, scale to 1
                    }}
                    transition={{
                        duration: 0.3, // Transition duration for smooth scaling and height change
                        ease: "easeOut", // Easing function for smooth effect
                    }}
                />
            ))}
        </div>
    );
};

export default MicVisualizer;



