import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [showAdd,setShowAdd]=useState(false);
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Meet mahmoud',
        day:'Jan 7th at 6:00PM',
        reminder: true,

    },
    {
        id:2,
        text:'Meet omar',
        day:'Feb 5th at 2:00PM',
        reminder: true,

    },
    {
        id:3,
        text:'Meet ali',
        day:'Feb 1st at 2:50PM',
        reminder: true,

    }
])
const  addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  const newTask={id,...task}

  setTasks([...tasks,newTask])
}
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=> task.id===id? {...task,reminder:!task.reminder}: task))
}
  return (
    
    <div className="container">
     <Header title="Task Tracker" onShowAdd={()=>setShowAdd(!showAdd)} isShowing={showAdd}/>
     {showAdd && <AddTask onAdd={addTask}/>}
     { tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'no tasks to show'}
    </div>
  );
}

export default App;
