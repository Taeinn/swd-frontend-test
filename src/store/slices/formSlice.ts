// src/slices/formSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  [key: string]: string | number; // Adjust this type based on your form data
}

const initialState: FormState = {};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormField: (state, action: PayloadAction<{ field: string; value: string | number }>) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => {
      return initialState; // Reset form to initial state
    },
  },
});

export const { setFormField, resetForm } = formSlice.actions;
export default formSlice.reducer;