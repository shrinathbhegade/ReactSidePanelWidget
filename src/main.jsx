// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { useAppStore } from "./store/useAppStore";
import StylesUrl from '../dist/style.css?url';

// ReactDOM.createRoot(document.getElementById("agile-scribe-root")).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// window.renderAgileWidget = function (containerId) {
//     ReactDOM.createRoot(document.getElementById(containerId)).render(<App />);
// };

// window.renderAgileWidget = function (containerId) {
//     ReactDOM.createRoot(document.getElementById(containerId)).render(<App />);

//     window.showAgileWidget = function () {
//         useAppStore.getState().setEntryModalVisible(true);
//         document.body.style.overflow = 'hidden';
//     };
// };

// Define a method to render the widget in a given container
// window.renderAgileWidget = function (containerId = 'agile-widget-root') {
//     const container = document.getElementById(containerId);
//     if (container) {
//         ReactDOM.createRoot(container).render(<App />);
//     } else {
//         console.error(`Container with id '${containerId}' not found.`);
//     }
// };


window.renderAgileWidget = function (containerId = 'agile-widget-root') {
    const container = document.getElementById(containerId);

    if (container) {
        if (!container.shadowRoot) {
            const shadowRoot = container.attachShadow({ mode: 'open' });

            // Inject styles into shadow root
            const styleLink = document.createElement('link');
            styleLink.setAttribute('rel', 'stylesheet');
            //styleLink.setAttribute('href', '../dist/style.css');
            styleLink.setAttribute('href', '/Content/Css/style.css');
            shadowRoot.appendChild(styleLink);

            ReactDOM.createRoot(shadowRoot).render(<App />);
        }
    }
};
