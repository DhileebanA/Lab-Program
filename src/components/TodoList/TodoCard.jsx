import { useState } from "react"

export default function TodoCard() {
    const [text, setText] = useState({});
    const [task, setTask] = useState([]);

    const addTask = () => {
        const newTask = {
            id:Date.now(),
            text,
            completed:false,
        }
        setTask([newTask, ...task])
    }

    const toggle = (id)=>{
        console.log(id)
        setTask(task.map(val=>val.id==id?{...val,completed:!val.completed}:val))
    }

    const deleteFun = (id)=>{
        setTask(task.filter(val=>val.id!=id))
    }

    return (
        <div className="bg-white p-5">
            <h2
                className="text-[2em] text-indigo-800 ">
                To-Do List</h2>
            <input
                className="border-2 border-indigo-400 outline-indigo-600 mr-1 p-2 rounded-lg"
                type="text"
                placeholder="Enter new Task"
                onKeyUp={(ev) => { setText(ev.target.value) }}
            />
            <button
                className="bg-indigo-400! "
                onClick={addTask}>
                Add</button>
            <div className="mt-2">
                <ul className="decoration-0">
                    {!task.length && <p className="italic text-gray-500">No tasks yet</p>}
                    {task.map((val) => (
                        <>
                            <input 
                                type="checkbox" 
                                checked={val.completed} 
                                onChange={()=>toggle(val.id)}/>
                            <li 
                                className={val.completed?"line-through":""} 
                                key={val.id} 
                                onClick={()=>toggle(val.id)}>{val.text}</li>
                            <button 
                                onClick={()=>setTask(task.filter(t=>t.id!=val.id))}>Del</button>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}