// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { useAppStore } from "./store/useAppStore";

window.renderAgileWidget = function (containerId = 'agile-widget-root') {
    console.log("render...")
    const container = document.getElementById(containerId);

    if (container) {
        if (!container.shadowRoot) {
            const shadowRoot = container.attachShadow({ mode: 'open' });

            // Inject styles into shadow root
            const faScript = document.createElement('script');
            faScript.setAttribute('src', 'https://kit.fontawesome.com/a2b4f6ee5e.js');
            faScript.setAttribute('crossorigin', 'anonymous');
            shadowRoot.appendChild(faScript);
            const styleLink = document.createElement('link');
            styleLink.setAttribute('rel', 'stylesheet');
            //styleLink.setAttribute('href', '../dist/style.css');
            styleLink.setAttribute('href', '/Scripts/agility/widgets/style.css');
            shadowRoot.appendChild(styleLink);

            ReactDOM.createRoot(shadowRoot).render(<App />);
        }
    }
};

// window.closeAgileWidget = function (containerId = 'agile-widget-root') {
//     const container = document.getElementById(containerId);
//     if (container && container.shadowRoot) {
//         container.shadowRoot.innerHTML = ''; // clears shadow DOM content
//         container.removeAttribute('shadowRoot');
//         document.body.style.overflow = 'auto'; // re-enable scroll
//     }
// };
