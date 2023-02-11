import { useState } from "react"
import internal from "stream"
import { FilterValueType } from "../App"

type PropsType = {
    hat?: string,
    cuteHat?: string,
    tasks: Array<TaskType>,
    deleteTask: (id: string) => void,
    changeFilter: (value: FilterValueType) => void, //instead of Function
    addTask: (value: string) => void
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export const Todolist = (props: PropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    return (
        <div>
            <div>
                <h3>{props.hat}</h3>
                <h4>{props.cuteHat}</h4>
                
                <div>
                    <input value={newTaskTitle} 
                    onChange={(e) => {setNewTaskTitle(e.currentTarget.value)}}
                    onKeyDown={(e) => {
                        if(e.ctrlKey && e.key === 'Enter'){
                            props.addTask(newTaskTitle); setNewTaskTitle("");
                        }

                    }}/>
                    <button onClick={() => {props.addTask(newTaskTitle); setNewTaskTitle("")}}>+</button>
                </div>

                {props.tasks 
                    ?
                    <ul>                  
                    {props.tasks.map(task => {
                        return (
                             <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                                <button onClick={()=> { props.deleteTask(task.id)}}>x</button> 
                             </li>
                        )
                    })}
                   
                </ul>
                :
                <div></div>

                }


                {/* <ul>                  
                    {props.tasks.map(task => {
                        return (
                             <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
                        )
                    })}
                   
                </ul> */}
                <div>
                    <button onClick={()=> {props.changeFilter('all') }}>All</button>
                    <button onClick={()=> {props.changeFilter('active') }}>Active</button>
                    <button onClick={()=> {props.changeFilter('completed') }}>Completed</button>
                </div>
            </div>

        </div>
    );
}

//export default Todolist;
