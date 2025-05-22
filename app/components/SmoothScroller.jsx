"use client";
import { ReactLenis } from "lenis/react";
// import {  } from 'lenis'

function SmoothScrolling({ children }) {
    return (
        <ReactLenis root options={{ lerp: 0.08, smoothTouch: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;