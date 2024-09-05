import { useState } from "react";
import "./Todo.css";


function Todo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDate, setNewDate] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleDescriptionChange(event) {
        setNewDescription(event.target.value);
    }

    function handleDateChange(event) {
        setNewDate(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { title: newTask, description: newDescription, date: newDate ,newStatus: false}]);
            console.log('Tasks after adding:', tasks);
            setNewTask("");
            setNewDescription("");
        }
    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function completeTask(index) {
        const updatedTasks = tasks.map((task,i) => 
        i == index ? {...task, newStatus: !task.newStatus} : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do">
            <h1>To-Do</h1>
            <div className="form-input">
                <form onSubmit={addTask}>
                    <div className="task-display">
                        
                        <input
                            type="text"
                            placeholder="Enter a task"
                            value={newTask}
                            onChange={handleInputChange}
                        />
    
                        <input
                            type="text"
                            placeholder="Description"
                            value={newDescription}
                            onChange={handleDescriptionChange}
                        />
    
                    </div>
                    <input
                        type="date"
                        placeholder="Select a Date"
                        value={newDate}
                        onChange={handleDateChange}
                    />

                    <button
                        className="add-btn"
                        type="submit">
                        Add
                    </button>
                </form>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>

                        <div className="first">
                            <span className={task.newStatus ? "text completed":"text"}>{task.title}</span>
                            <p className="description">{task.description}</p>
                        </div>
                        <div className="second">
                        <p className="date">{task.date}</p>

                        <button
                            className="complete-button"
                            onClick={() => completeTask(index)}>
                            {task.newStatus ? "Undo":"Complete"}
                        </button>

                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        </div>

                    </li>
                )}
            </ol>

        </div>
    );
}

export default Todo