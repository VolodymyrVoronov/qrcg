import create from "zustand";
import produce from "immer";

export enum QRCodeSize {
  XS = 128,
  SM = 256,
  MD = 512,
  LG = 1024,
}

export interface IStore {
  value: string;
  size: QRCodeSize;

  setValue: (value: string) => void;
  setSize: (size: number) => void;
}

const useQrGeneratorStore = create<IStore>((set) => ({
  value: "URL",
  size: QRCodeSize.XS,

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
