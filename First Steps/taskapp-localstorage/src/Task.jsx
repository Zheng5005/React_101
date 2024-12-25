import React, {useState, createContext, useContext, useEffect} from "react"
import CompletedTask from "./CompletedTask";

export const TaskContext = createContext();

function Task(){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem('task')
        let cData = localStorage.getItem('completedTasks')
        if(data && cData){
            setTask(JSON.parse(data))
            setCompletedTasks(JSON.parse(cData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task))
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks))
    }, [task, completedTasks])

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTasks = task.filter((_,i) => i !== index)
        setTask(updateTasks);

        const completedTask = task.filter((_,i) => i === index)
        setCompletedTasks(ct => [...ct, completedTask])
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask)
        }
    }

    function moveTaskDown(index){
        if(index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask)
        }
    }

    return(<div className="to-do-list">
        <h1>Task Manager</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                        Add
                </button>
        </div>

        <ol>
            {task.map((task, index) => <li key={index}>
                                            <span className="text">{task}</span>
                                            <button
                                                className="delete-button"
                                                onClick={() => deleteTask(index)}>
                                                Done
                                            </button>
                                            <button
                                                className="move-button"
                                                onClick={() => moveTaskUp(index)}>
                                                ⬆️
                                            </button>
                                            <button
                                                className="move-button"
                                                onClick={() => moveTaskDown(index)}>
                                                ⬇️
                                            </button>
                                        </li>)}
        </ol>

        <TaskContext.Provider value={{completedTasks, task, setTask, setCompletedTasks}}>
            <CompletedTask/>
        </TaskContext.Provider>
    </div>)
}

export default Task

export const useTaskContext = () => useContext(TaskContext)