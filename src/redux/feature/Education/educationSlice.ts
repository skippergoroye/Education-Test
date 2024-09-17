// src/educationSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EducationState } from '@/types';



const initialState: EducationState = {
  educations: [
    {
      institution: '',
      fieldOfStudy: '',
      degree: '',
      endDate: '',
      location: '',
      isStudent: false,
    },
  ],
  message: '',
  dateErrors: [''],
};

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    addEducation(state) {
      const firstEntry = state.educations[0];
      if (
        !firstEntry.institution ||
        !firstEntry.fieldOfStudy ||
        !firstEntry.degree ||
        !firstEntry.endDate ||
        !firstEntry.location
      ) {
        state.message = 'Please fill out the first education entry before adding another.';
        return;
      }

      if (state.educations.length >= 3) {
        state.message = "You can't add more than 3 entries.";
        return;
      }

      state.educations.push({
        institution: '',
        fieldOfStudy: '',
        degree: '',
        endDate: '',
        location: '',
        isStudent: false,
      });
      state.message = '';
    },
    removeEducation(state, action: PayloadAction<number>) {
      state.educations = state.educations.filter((_, index) => index !== action.payload);
      if (state.message) state.message = '';
    },
    handleChange(state, action: PayloadAction<{ index: number; field: string; value: string | boolean }>) {
      const { index, field, value } = action.payload;
      state.educations[index] = { ...state.educations[index], [field]: value };

      if (field === 'endDate') {
        const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const isValidDate = regex.test(value as string);
        state.dateErrors[index] = isValidDate ? '' : 'Invalid date format. Use MM/YY.';
      }
    },
  },
});

export const { addEducation, removeEducation, handleChange } = educationSlice.actions;

export default educationSlice.reducer;
