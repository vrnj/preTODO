import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

function App() {

    const hat1 = 'What to learn 1';
    const hat2 = 'What to learn 2';
    const hat3 = 'Foo';
    const cuteLittleHat = 'My cute little hat';

    let initTasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false }
    ];

    //useState(initTasks); //is imported from React

    let stateArray = useState(initTasks);
    let tasks = stateArray[0]; //the copy of the initial array
    let setTasks = stateArray[1]; //the function that is capable of managing the initial array after setTasks was called inside any other function changing the array

    function deleteTask(id: number) {
            let filteredTasks = tasks.filter(task => task.id !== id
        );
        setTasks(filteredTasks); //we are passing the filteredTasks array to the setTasks function, which re-write the tasks array at stateArray[0]
    }

    //this data (tasks1 object can only be managed by a function within the same location)
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ];

    return (
        <div className="App">

            
            <Todolist 
                hat={hat1} 
                cuteHat={cuteLittleHat} 
                tasks={tasks}          
                deleteTask={deleteTask}
            />
            {/* <Todolist hat={hat2} cuteHat={cuteLittleHat} tasks={tasks2}/> */}
            
            
        </div>
    );
}

export default App;
