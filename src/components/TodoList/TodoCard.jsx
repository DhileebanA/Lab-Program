import { useState } from "react"

export default function TodoCard() {
    const [task,setTask] = useState();
    return (
        <div className="bg-white p-5">
            <h2 
                className="text-[2em]">
            To-Do List</h2>
            <input 
                className="border mr-1" 
                type="text" 
                placeholder="Enter new Task" 
                onKeyUp={(event)=>{setTask(event.target.value)}}
            />
            <button 
                className="bg-[#775dc5]! text-white" 
                onClick={()=>{console.log(task)}}>
            Add</button>
            <div>
                <i>No tasks yet</i>
            </div>
        </div>
    )
}