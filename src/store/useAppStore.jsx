// src/store/useAppStore.js
import { create } from 'zustand';

export const useAppStore = create((set) => ({
    panelVisible: false,
    recordingState: 'idle', // 'recording' | 'paused' | 'editing'
    transcript: '',
    modals: {
        generateSoap: false,
        soapProgress: false,
        exitConfirmation: false,
    },
    isMinimized: false,
    entryModalVisible: false,
    isEditing: false,
    setIsEditing: (flag) => set({ isEditing: flag }),
    setEntryModalVisible: (value) => set({ entryModalVisible: value }),
    setIsMinimized: (value) => set({ isMinimized: value }),
    setPanelVisible: (visible) => set({ panelVisible: visible }),
    setRecordingState: (state) => set({ recordingState: state }),
    setTranscript: (text) => set({ transcript: text }),
    appendTranscript: (text) =>
        set((state) => ({ transcript: state.transcript + text })),
    setModals: (modals) => set((state) => ({ modals: { ...state.modals, ...modals } })),
    resetAll: () => {
        set({
            panelVisible: false,
            entryModalVisible: false,
            recordingState: 'idle',
            transcript: '',
            modals: {
                generateSoap: false,
                soapProgress: false,
                exitConfirmation: false,
            },
        });

        document.body.style.overflow = 'auto';
    }
}));
