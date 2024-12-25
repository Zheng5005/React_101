import { useTaskContext } from "./Task";
import React, {useContext} from "react";

function CompletedTask() {
    const {completedTasks, setTask, setCompletedTasks} = useTaskContext();

    function addTaskIndex(index){
        const Returning = completedTasks.filter((_,i) => i === index)
        setTask(task => [...task, Returning])

        const DcompletedTask = completedTasks.filter((_,i) => i !== index)
        setCompletedTasks(DcompletedTask)
    }

    function deleteTaskCompleted(index){
        const updateTasks = completedTasks.filter((_,i) => i !== index)
        setCompletedTasks(updateTasks);
    }

    return(<div>
        <h1>Completed Tasks</h1>
        <ol>
            {completedTasks.map((task, index) => <li>
                <span className="text">{task}</span>
                <button
                    className="delete-button"
                    onClick={() => deleteTaskCompleted(index)}>
                         Delete
                </button>
                <button
                    className="move-button"
                    onClick={() => addTaskIndex(index)}>
                         Back
                </button>
            </li>)}
        </ol>
    </div>)
}

export default CompletedTask