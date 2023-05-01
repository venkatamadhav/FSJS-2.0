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
  return (
    <main>
    <Tasksform onAdd={addTask}/>
    {tasks.map(task => (
      <Tasks {...task}/>
    ))}
    
    </main>
  );
}

export default App;
