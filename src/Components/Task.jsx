import React, { useState } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDone } from "react-icons/io5";
import { doneTodo, editTodo } from '../redux/todo/todoAction';
import { useDispatch } from 'react-redux';
import { ImCancelCircle } from "react-icons/im";

const Task = ({id, task}) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState('');
    const dispatch = useDispatch();
    const completeTodo = ()=>{
        dispatch(doneTodo(id));
    }
    
    const startEditing = ()=>{
        setEditedTodo(task);
        setIsDropDownOpen(false);
        setIsEditing(true);
        
    }
    const cancelEditing = ()=>{
        setEditedTodo('');
        setIsEditing(false);
        setIsDropDownOpen(false);
    }
    const todoEdit = ()=>{
        if(editedTodo === ''){
            dispatch(doneTodo(id))
        }else if(editedTodo !== task){
            dispatch(editTodo(id, editedTodo));
        }
        setEditedTodo('');
        setIsEditing(false);
    }
    const todoEnterEdit = (e)=>{
        if(e.key === 'Enter'){
            if(editedTodo === ''){
                dispatch(doneTodo(id))
            }else if(editedTodo !== task){
                dispatch(editTodo(id, editedTodo));
            }
            setEditedTodo('');
            setIsEditing(false);
        }
    }
    return (
        <div id={id} className='flex items-center gap-2 w-[400px] rounded-md shadow-inner relative shadow-slate-600 h-12 text-ellipsis'>
            <div className='flex items-center'>
                <CiMenuKebab className='text-neutral-900 text-xl font-semibold cursor-pointer' onClick={()=>setIsDropDownOpen(!isDropDownOpen)}/>
            </div>
                {
                    isDropDownOpen ? (
                    <div className='flex flex-col divide-y-2 divide-slate-200 border-2 border-slate-200 px-3 py-2 absolute left-[-105px] top-0 items-center bg-slate-100 text-neutral-900 z-20'>
                        {
                            isEditing ? '': <span className='flex gap-3 items-center cursor-pointer py-1 w-full text-green-500 font-medium' onClick={completeTodo}>
                            <IoCheckmarkDone/>
                            <span>Done</span>
                        </span>
                        }
                        <span className='flex gap-3 items-center cursor-pointer py-1 w-full text-yellow-500 font-medium' onClick={isEditing ? cancelEditing:startEditing}>
                            {
                                isEditing ? <><ImCancelCircle className='text-red-500 font-medium'/><span className='text-red-500 font-medium'>Cancel</span></> : <><CiEdit/>
                            <span>Edit</span></>
                            }
                            
                        </span>
                    </div>) : ''
                }
                {
                    isEditing ? <div className='flex w-full pr-1'><input type="text" className='text-slate-600 font-medium overflow-y-auto py-1 w-full outline-none bg-transparent' value={editedTodo} onKeyDown={(e)=>todoEnterEdit(e)} onChange={(e)=>setEditedTodo(e.target.value)}/><span className='bg-black rounded-md text-white p-2 cursor-pointer active:shadow-md active:shadow-slate-400' onClick={todoEdit}><IoCheckmarkDone/></span></div> : <p className='text-slate-600 overflow-y-auto py-1 w-full'>{task}</p>
                }
        </div>
    );
}

export default Task;
