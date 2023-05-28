import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Course {
  title: string;
  name: string;
}

interface pendedState {
  pendedCourse: Course[];
}

const initialState: pendedState = {
  pendedCourse: []
};

export const pendedSlice = createSlice({
  name: 'pended',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Course>) => {
      state.pendedCourse.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.pendedCourse = state.pendedCourse.filter(course => course.title !== action.payload);
    }
  }
});

export const { add, remove } = pendedSlice.actions;

export default pendedSlice.reducer;