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

    useEffect(() => {
        // Expose the global function after React mounts
        window.showAgileWidget = () => {
            setEntryModalVisible(true);
            document.body.style.overflow = 'hidden';
        };
    }, [setEntryModalVisible]);

    // return (
    //     <div className="agile-widget-container relative min-h-screen">
    //         {!panelVisible && <EntryModal />}
    //         <SidePanel />
    //     </div>
    // );

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
