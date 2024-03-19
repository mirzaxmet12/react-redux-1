import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { text } from "node:stream/consumers";
const todos = [
    {
        id: 'dsfgd',
        text: 'Learn javascript',
        completed: false,
    },
    {
        id: 'fdgfh',
        text: 'React',
        completed: false,
    },
    {
        id: 'dsvbgd',
        text: 'Redux',
        completed: false,
    },
]

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: todos,
        
    },
    reducers: {
        addText(state, action: PayloadAction<{ id:string,text: string }>) {
            console.log(action);

            const todoList = state.todos.find(todo => todo.id === action.payload.id);
            if (todoList) todoList.text=action.payload.text;
            // state.todos.push({
            // })
        },
        addTodo(state) {
            state.todos.push({
                id: new Date().toISOString(),
                text: '',
                completed: false,
            })
        },

        removeTodo(state, action: PayloadAction<{ id: string }>) {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id)
        },
        
        toggleTodoCompleted(state, action: PayloadAction<{ id: string }>) {
            const todoCompleted = state.todos.find(todo => todo.id === action.payload.id);
            if (todoCompleted) todoCompleted.completed = !todoCompleted.completed;
        },
        removeDone(state){
            state.todos = state.todos.filter(todo => !todo.completed)
        }
    }
})

export const {addText, addTodo, removeTodo, toggleTodoCompleted ,removeDone} = todoSlice.actions;

export default todoSlice.reducer