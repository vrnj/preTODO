import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

function App() {

    const hat1 = 'What to learn 1';
    const hat2 = 'What to learn 2';
    const hat3 = 'Foo';
    const cuteLittleHat = 'My cute little hat';

    let tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Redux", isDone: false }
    ];

    function deleteTask(id: number) {
        tasks1 = tasks1.filter(task => task.id !== id
            // if(task.id !== id) return true; //adding the element to the updatedTasks array
            // else return false //omitting the element
        );
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
                tasks={tasks1}          
                deleteTask={deleteTask}
            />
            {/* <Todolist hat={hat2} cuteHat={cuteLittleHat} tasks={tasks2}/> */}
            
            
        </div>
    );
}

export default App;
