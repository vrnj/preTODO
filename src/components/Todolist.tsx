import internal from "stream"

type PropsType = {
    hat?: string,
    cuteHat?: string,
    tasks: Array<TaskType>
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <div>
                <h3>{props.hat}</h3>
                <h4>{props.cuteHat}</h4>
                
                <div>
                    <input/>
                    <button>+</button>
                </div>

                {props.tasks 
                    ?
                    <ul>                  
                    {props.tasks.map(task => {
                        return (
                             <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>
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
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

        </div>
    );
}

//export default Todolist;
