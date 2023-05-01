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

  function updateTaskDone(taskIndex, newDone){
    settasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })
  }
  const completed = tasks.filter(t => t.done).length;
  const total = tasks.length

  return (
    <main>
    <h1>ToDo App</h1>
    <h2>{completed}/{total} Completed</h2>
    <Tasksform onAdd={addTask}/>
    {tasks.map((task,index) => (
      <Tasks {...task} onToggle={done => updateTaskDone(index, done)}/>
    ))}
    
    </main>
  );
}

export default App;
