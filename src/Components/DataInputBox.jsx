import React, { useRef, useEffect, useState } from 'react';
import { addTodo } from '../redux/todo/todoAction';
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux';

const DataInputBox = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const addTask = ()=>{
        if(task!==''){
            const id = uuidv4();
            dispatch(addTodo(id, task));
            setTask('');
        }else{
            alert('Task cannot be empty');
        }
    }
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return (
        <div className='bg-slate-50 p-4 rounded-md w-fit flex gap-2'>
            <input ref={inputRef} type="text" placeholder='Enter task' className='w-[250px] px-3 py-1 outline-none shadow-inner shadow-slate-700 rounded-md' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button className='px-2 py-1 bg-neutral-800 text-slate-100 rounded-md active:shadow-md active:shadow-slate-400' onClick={addTask}>Add Task</button>
        </div>
    );
}

export default DataInputBox;
