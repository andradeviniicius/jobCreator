import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface initialState {
  jobTitle: string | ArrayBuffer | null;
  benefits: string | ArrayBuffer | null;
  coreCompetence: string[] | string | ArrayBuffer | null;
  specificCompetence: string[] | string | ArrayBuffer | null;
  aboutValtech: string | ArrayBuffer | null;
}

const initialState: initialState = {
  jobTitle: "",
  benefits: "",
  coreCompetence: "",
  specificCompetence: "",
  aboutValtech: "",
};

export const jobDescriptionSlice = createSlice({
  name: "jobDescriptionSlice",
  initialState,
  reducers: {
    setBenefits: (
      state,
      action: PayloadAction<string | ArrayBuffer | null>
    ) => {
      state.benefits = action.payload;
    },
    setCoreCompetence: (
      state,
      action: PayloadAction<string | ArrayBuffer | null>
    ) => {
      state.coreCompetence = action.payload;
    },
    setSpecificCompetence: (
      state,
      action: PayloadAction<string | ArrayBuffer | null>
    ) => {
      state.specificCompetence = action.payload;
    },
    setAboutValtech: (
      state,
      action: PayloadAction<string | ArrayBuffer | null>
    ) => {
      state.aboutValtech = action.payload;
    },
    setJobTitle: (state, action: PayloadAction<string>) => {
      state.jobTitle = action.payload;
    },
  },
});

export const {
  setJobTitle,
  setBenefits,
  setAboutValtech,
  setCoreCompetence,
  setSpecificCompetence,
} = jobDescriptionSlice.actions;
export default jobDescriptionSlice.reducer;
