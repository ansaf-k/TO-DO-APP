import { useState } from "react";


function Todo() {

    const [tasks, setTasks] = useState(["sdcs","dscsa","sdc"]);
    const [newTask, setNewTask] = useState("");
    const [editing, setEditing] = useState(false);

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        setTasks(t => [...t,newTask]);
        setNewTask('');
    }

    function deleteTask(index) {

    }

    function completeTask(index) {

    }

    return (
        <div className="to-do">
            <h1>To-Do</h1>
            <div>
                <form action="">
                    <input
                        type="text"
                        placeholder="Enter a task"
                        value={newTask}
                        onChange={handleInputChange}
                    />

                    <button
                        className="add-btn"
                        onClick={addTask}>
                        Add
                    </button>
                </form>
            </div>  

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>

                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Complete
                        </button>

                        <button
                            className="delete-button"
                            onClick={() => completeTask(index)}>
                            Delete
                        </button>
                        
                    </li>
                )}
            </ol>

        </div>
    );
}

export default Todo