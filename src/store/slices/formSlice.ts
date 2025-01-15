// src/slices/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormUserData {
  id: string;
  firstName: string;
  lastName: number;
  birthday: string;
  gender: string;
  prefix: string;
  mobilePhone: string;
  nation: string;
}

interface FormState {
  data: FormUserData[];
}

// Initialize state with Local Storage data
const initialState: FormState = {
  data: [],
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormUserData[]>) => {
      state.data = action.payload;
    },

    addFormData: (state, action: PayloadAction<FormUserData>) => {
      state.data.push(action.payload);
      localStorage.setItem("formData", JSON.stringify(state.data));
    },
    deleteFormData: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      localStorage.setItem("formData", JSON.stringify(state.data));
    },
    updateFormData: (state, action: PayloadAction<FormUserData>) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
        localStorage.setItem("formData", JSON.stringify(state.data));
      }
    },
  },
});

export const { setFormData, addFormData, deleteFormData, updateFormData } =
  formSlice.actions;
export default formSlice.reducer;
