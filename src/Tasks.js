import React, {useState,useEffect} from 'react'
import uuid from "uuid"
const TASKS_STORAGE_KEY ='TASKS_STORAGE_KEY';
const storeTasks = (taskMap)=>{
 localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(taskMap)
 );
}

const readStoredTasks = ()=>{
    const taskMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
    return taskMap? taskMap:{task:[],completedTasks:[]}
}

 function Tasks() {
    const [taskText,setTaskText] =useState('');
    const storedTasks = readStoredTasks();
    const [tasks,setTasks] =useState(storedTasks.tasks);
    const [completedTasks,setCompletedTasks] =useState(storedTasks.completedTasks);

    useEffect(() => {
      storeTasks({tasks,completedTasks})
    });

    const  updateTaskText = ({target})=>{
        setTaskText(target.value)
    }
    const  addTask = ()=>{
        setTasks([...tasks,taskText])
    }
    const handleOnkeyPress = (event)=>{
        if(event.key==="Enter"){
            setTasks([...tasks,{taskText,id:uuid()}])
        }
        
    }
    const completeTask = completedTask=>{
        setCompletedTasks([...completedTasks,completedTask]);
        setTasks(tasks.filter(task=>task.id!==completedTask.id))
    }

    const deleteTask = task =>{
      setCompletedTasks(completedTasks.filter(t=>t.id!==task.id))
    }

    console.log({tasks})
    console.log({completedTasks})
    return (
        <div>
            <h3>Tasks</h3>
            <div className="from">
                <input value={taskText} 
                onChange={updateTaskText}
                    onKeyPress={handleOnkeyPress}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="task-list">
            {
            tasks.reverse().map((task)=>{
                const {taskText,id}=task;
                {/* calling right away is not allow so you need to 
                make the function call as a callback function
                as shown below */}
                return (<div key={id} onClick={()=>completeTask(task)}>
                {taskText}
                </div>)
            })
            }
            </div>

            <div className="completed-list">
            {
            completedTasks.map((task)=>{
                const {taskText,id}=task;
                return (<div key={id} >
                {taskText}{' '} <span className="delete-task" 
                onClick={()=>deleteTask(task)}
                >x</span>
                </div>)
            })
            }
            </div>
           
        </div>
    )
}

export default Tasks;
