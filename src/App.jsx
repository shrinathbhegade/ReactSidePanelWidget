// src/App.jsx
import React from "react";
import EntryModal from "./components/EntryModal";
import SidePanel from "./components/SidePanel";
import { useAppStore } from "./store/useAppStore";

const App = () => {
    const panelVisible = useAppStore((s) => s.panelVisible);

    return (
        <div className="relative min-h-screen">
            {!panelVisible && <EntryModal />}
            <SidePanel />
        </div>
    );
};

export default App;