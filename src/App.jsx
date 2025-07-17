// src/App.jsx
// import React from "react";
// import EntryModal from "./components/EntryModal";
// import SidePanel from "./components/SidePanel";
// import { useAppStore } from "./store/useAppStore";

// const App = () => {
//     const panelVisible = useAppStore((s) => s.panelVisible);

//     return (
//         <div className="relative min-h-screen">
//             {!panelVisible && <EntryModal />}
//             <SidePanel />
//         </div>
//     );
// };

// export default App;


// src/App.jsx
import React, { useEffect } from 'react';
import EntryModal from './components/EntryModal';
import SidePanel from './components/SidePanel';
import { useAppStore } from './store/useAppStore';

const App = () => {
    const setEntryModalVisible = useAppStore((state) => state.setEntryModalVisible);
    const panelVisible = useAppStore((s) => s.panelVisible);
    const setPanelVisible = useAppStore((state) => state.setPanelVisible);

    // useEffect(() => {
    //     // Expose the global function after React mounts
    //     window.showAgileWidget = () => {
    //         setEntryModalVisible(true);
    //         document.body.style.overflow = 'hidden';
    //     };
    // }, [setEntryModalVisible]);

    useEffect(() => {
        window.showAgileWidget = () => {
            setPanelVisible(false);           // ensure panel is hidden
            setEntryModalVisible(true);       // show entry modal
            document.body.style.overflow = 'hidden';
        };
    }, [setPanelVisible, setEntryModalVisible]);

    return (
        <div className="agile-widget-container relative min-h-screen">
            {panelVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            )}
            {!panelVisible && <EntryModal />}
            <SidePanel />
        </div>
    );
};

export default App;
