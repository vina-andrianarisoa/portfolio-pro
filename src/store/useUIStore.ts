import { create } from 'zustand';

interface UIStore {
    active: string;
    setActive: (value: string) => void;
    open: boolean;
    setOpen: (value: boolean) => void;
}

const useUIStore = create<UIStore>((set) => ({
    active: "home",
    setActive: (value : string) => set({ active: value }),

    open: false,
    setOpen: (value : boolean) => set({ open: value })
}));

export default useUIStore;