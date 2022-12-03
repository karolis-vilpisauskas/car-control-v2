import create from "zustand";

export const windowsApiUrl = "192.168.0.150";
export const onePlusApiUrl = "192.168.234.96";

export type Mode = "desktop" | "mobile";

export interface ModeState {
  mode: "desktop" | "mobile";
  modeApiUrl: string;
  changeMode: (mode: Mode) => void;
  setModeDesktop: () => void;
  setModeMobile: () => void;
}

export const useModeStore = create<ModeState>((set) => ({
  mode: "mobile",
  modeApiUrl: onePlusApiUrl,
  changeMode: (mode: "mobile" | "desktop") => {
    set(() => ({
      mode,
      modeApiUrl: mode === "mobile" ? onePlusApiUrl : windowsApiUrl,
    }));
  },
  setModeDesktop: () => {
    set(() => ({
      mode: "desktop",
      modeApiUrl: windowsApiUrl,
    }));
  },
  setModeMobile: () => {
    set(() => ({
      mode: "mobile",
      modeApiUrl: onePlusApiUrl,
    }));
  },
}));
