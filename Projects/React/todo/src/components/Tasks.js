import React from 'react'
import Checkbox from './Checkbox'

function Tasks({name,done,onToggle}) {
  return (
    <div className={'tasks ' + (done?'done':'notdone')}>
        <Checkbox checked={done} onClick={() => onToggle(!done)}/>
        <span className='tasksss'>{name}</span>
    </div>
  )
}

export default Tasks