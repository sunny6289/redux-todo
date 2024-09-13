import { todoActionTypes } from "./todoActionTypes"

const initialTodoState = {
    todo: []
}

export const todoReducer = (state = initialTodoState, action)=>{
    switch(action.type){
        case todoActionTypes.TODO_ADD: return{
            ...state,
            todo: [ ...state.todo,...action.payload]
        }
        case todoActionTypes.TODO_DONE: return{
            todo: state.todo.filter((task)=> task.id !== action.payload)
        }
        case todoActionTypes.TODO_EDIT: return{
            ...state,
            todo: state.todo.map((task)=> (task.id === action.payload.id) ? {...task, task: action.payload.task}  : task)
        }
        default : return state;
    }
}