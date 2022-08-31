import create from "zustand";
import produce from "immer";

export interface IStore {
  value: string;
  size: 128 | 256 | 512 | 1024;

  setValue: (value: string) => void;
  setSize: (size: number) => void;
}

const useQrGeneratorStore = create<IStore>((set) => ({
  value: "Hi there!",
  size: 128,

  setValue: (value: string): void => {
    set(
      produce((state) => {
        state.value = value;
      })
    );
  },

  setSize(size: number): void {
    set(
      produce((state) => {
        state.size = size;
      })
    );
  },
}));

export default useQrGeneratorStore;
