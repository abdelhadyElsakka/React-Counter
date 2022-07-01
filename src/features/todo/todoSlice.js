import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks:[
        {
          title: "learn node js",
          content: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "go to the sea",
          content: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "walk the dog",
          content: "Lorem ipsum dolor sit amet.",
        },
      ]
}

export const tasksSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addTask: (state,action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state,action) => {
      state.todos = state.todos.filter(
        (item, index) => index !== action.payload
      );
    },
  },
})

export const { addTask, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer