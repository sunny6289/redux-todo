import { todoActionTypes } from "./todoActionTypes"

export const addTodo = (id, task)=>{
    return{
        type: todoActionTypes.TODO_ADD, 
        payload: [{id: id, task: task}]
    }
}

export const doneTodo = (id)=>{
    return{
        type: todoActionTypes.TODO_DONE,
        payload: id
    }
}

export const editTodo = (id, task)=>{
    return{
        type: todoActionTypes.TODO_EDIT,
        payload: {
            id: id,
            task: task
        }
    }
}