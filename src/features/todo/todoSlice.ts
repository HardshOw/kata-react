import { createSlice } from '@reduxjs/toolkit';

const initialState: ITodoState = {
  todos: [
    {id: '1', content: 'Do a Todo application with Redux', checked: true},
    {id: '2', content: 'Do a Todo application with Hooks', checked: false}
  ]
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const item: ITodo = action.payload
      state.todos.push(item)
    },
    deleteTodo: (state, action) => {
      let target = state.todos.findIndex((todo: ITodo) => todo.id === action.payload.id)
      if (target > -1) {
        state.todos.splice(target, 1)
      }
    },
    toggleTodo: (state, action) => {
      let target: ITodo = state.todos.find((todo: ITodo) => todo.id === action.payload.id)
      if(target) {
        target.checked = !target.checked
      }
    },
    updateTodo: (state, action) => {
      console.log('Update todo')
    },
  },
});
export const selectTodoState = (state: ITodoState) => state;

export const selectTodoList = (state: ITodoState) => state.todos;
export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;