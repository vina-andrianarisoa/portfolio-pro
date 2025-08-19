import { create } from "zustand";

interface LoaderState {
    loading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

const useLoaderStore = create<LoaderState>((set) => ({
    loading: true,
    showLoader: () => set({ loading: true }),
    hideLoader: () => set({ loading: false }),
}));

export default useLoaderStore