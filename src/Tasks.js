import React, {useState} from 'react'
import uuid from "uuid"

 function Tasks() {
    const [taskText,setTaskText] =useState('')
    const [tasks,setTasks] =useState([])
    const [completedTasks,setCompletedTasks] =useState([])

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
