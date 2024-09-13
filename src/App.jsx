import React from 'react';
import DataInputBox from './Components/DataInputBox';
import TaskList from './Components/TaskList';

const App = () => {
  return (
    <div className='h-screen w-screen bg-slate-500 flex flex-col gap-3 items-center pt-5'>
      <DataInputBox/>
      <TaskList/>
    </div>
  );
}

export default App;
