import React, { useState } from 'react'

function Tasksform({onAdd}) {
    const [TaskName, setTaskName] = useState([]);
    function submithandler(ev){
        ev.preventDefault();
        onAdd(TaskName);
        setTaskName("");
    }
  return (
    <form onSubmit={submithandler}>
        <input type="text" 
        placeholder='Your Task' 
        value={TaskName}
            onChange={e => setTaskName(e.target.value)}
        />
        <button>Add</button>
    </form>
  )
}

export default Tasksform