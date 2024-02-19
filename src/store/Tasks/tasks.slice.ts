import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ITasksState {
   id: Date
   title: string
   pomodoroCounter: number
   completed: boolean
}

const initialState: ITasksState[] = []

export const tasksSlice = createSlice({
   name: 'tasks',
   initialState,
   reducers: {
      addTask: (state, action: PayloadAction<ITasksState>) => {
         const task = {
            id: new Date(),
            title: action.payload.title,
            pomodoroCounter: action.payload.pomodoroCounter,
            completed: action.payload.completed,
         };
         state.push(task);
      },

   },
});


export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;