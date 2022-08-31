import create from "zustand";
import produce from "immer";

export interface IStore {
  value: string;
  size: 128 | 256 | 512 | 1024;
  bgColor: string;
  fgColor: string;

  setValue: (value: string) => void;
  setSize: (size: number) => void;
  setBgColor: (bgColor: string) => void;
  setFgColor: (fgColor: string) => void;
}

const useQrGeneratorStore = create<IStore>((set) => ({
  value: "Hi there!",
  size: 128,
  bgColor: "#FFFFFF",
  fgColor: "#000000",

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

  setBgColor(bgColor: string): void {
    set(
      produce((state) => {
        state.bgColor = bgColor;
      })
    );
  },

  setFgColor(fgColor: string): void {
    set(
      produce((state) => {
        state.fgColor = fgColor;
      })
    );
  },
}));

export default useQrGeneratorStore;
