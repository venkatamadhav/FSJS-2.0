import React from 'react'
import Checkbox from './Checkbox'

function Tasks({name,done}) {
  return (
    <div className='tasks'>
        <Checkbox defaultChecked={done}/>
        {name}
    </div>
  )
}

export default Tasks