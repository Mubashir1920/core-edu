"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.05, // Lower value = smoother (0.04–0.06 is usually a good range)
                smooth: true, // Enable smooth scrolling for desktop
                smoothTouch: true, // Enable smooth scrolling for touch devices
                direction: "vertical", // You can change this to "horizontal" if needed
                gestureDirection: "vertical", // Ensures gestures scroll vertically
            }}
        >
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
