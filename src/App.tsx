import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { TaskType, Todolist } from './components/Todolist';

export type FilterValueType = "all"| "active" | "completed" ;

function App() {

    const hat1 = 'What to learn 1';
    const hat2 = 'What to learn 2';
    const hat3 = 'Foo';
    const cuteLittleHat = 'My cute little hat';

    let [tasks, setTasks] = useState< Array<TaskType> >([
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Redux", isDone: false }
        ]);

    console.log(tasks);

    let [filter, setFilter] = useState<FilterValueType>('all');

    let tasksForToDoList = tasks;//originally we assign the value stored in the tasks array - row 22

    if(filter === 'completed'){
        tasksForToDoList = tasks.filter(task => task.isDone === true);
    }

    if(filter === 'active'){
        tasksForToDoList = tasks.filter(task => task.isDone === false);
    }



    function deleteTask(id: string) {
            let filteredTasks = tasks.filter(task => task.id !== id
        );
        setTasks(filteredTasks); //we are passing the filteredTasks array to the setTasks function, which re-write the tasks array at stateArray[0]
    }

    function addTask(taskFromInput: string){
        let newTask = {id: v1(), title: taskFromInput, isDone: false};
        let newTasks = [newTask, ...tasks];

        setTasks(newTasks);
    }

    function ChangeFilter(value: FilterValueType){
        setFilter(value);
    }



    return (
        <div className="App">

            
            <Todolist 
                hat={hat1} 
                cuteHat={cuteLittleHat} 
                tasks={tasksForToDoList}          
                deleteTask={deleteTask}
                changeFilter={ChangeFilter}
                addTask={addTask}
            />
            {/* <Todolist hat={hat2} cuteHat={cuteLittleHat} tasks={tasks2}/> */}
            
            
        </div>
    );
}

export default App;
