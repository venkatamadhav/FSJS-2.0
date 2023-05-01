import './App.css';
import Tasks from './components/Tasks';
import Tasksform from './components/Tasksform';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  useEffect(() => {
    const tasks =JSON.parse(localStorage.getItem('tasks'));
    settasks(tasks);
  }, [])

  function addTask(name){
    settasks(prev => {
      return [...prev, {name:name, done:false}]
    })
  }

  function deleteTask(indexremove){
    settasks(prev => {
      const newTasks = prev.filter((taskss,index) => index !== indexremove)
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    })
  }


  function updateTaskDone(taskIndex, newDone){
    settasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })
  }

  function renameTask(index,newName){
    settasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }


  const completed = tasks ? tasks.filter(t => t.done).length : 0;
  const total = tasks ? tasks.length : 0;
  
  function message(){
    const percentage = (completed/total)*100;
    if (percentage === 0){
      return 'You need to start working!!!';
    }
    else if (percentage > 0 && percentage <30){
      return "Come on.. Try to complete at least half";
    }
    else if (percentage > 50 & percentage <100){
      return "Thats good. You completed more than half!!"
    }
    else if (percentage === 100){
      return 'Great Job!! You completed all.'
    }
    return 'Keep it Going...'
  }


  return (
    <main>
    <h1>ToDo App</h1>
    <h2>{completed}/{total} Completed</h2>
    <h3>{message()}</h3>
    <Tasksform onAdd={addTask}/>
    {tasks && tasks.map((task,index) => (
      <Tasks key={index} {...task}
      onRename={newName => renameTask(index,newName)} 
      onToggle={done => updateTaskDone(index, done)}
      onDelete={() => deleteTask(index)}
      />
    ))}
    
    </main>
  );
}

export default App;
