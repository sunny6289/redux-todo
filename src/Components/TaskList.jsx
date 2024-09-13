import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import { selectTodo } from '../redux/todo/todoSelector';

const TaskList = () => {
    const taskList = useSelector(selectTodo)
    return (
        <div className='px-3 py-2 flex flex-col gap-3 bg-slate-50 rounded-md'>
            {
                taskList && taskList.length ? taskList.map((task)=> <Task key={task.id} id={task.id} task={task.task}/>) :
                <div className='text-neutral-700 font-bold text-2xl'>There is no task</div>
            }
        </div>
    );
}

export default TaskList;
