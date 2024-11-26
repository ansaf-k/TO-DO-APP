import { useState } from "react";
import "./Todo.css";
import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";


function Todo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDate, setNewDate] = useState("");
    const [editing, setEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [filter, setFilter] = useState("Full");

    function addTask(event) {
        event.preventDefault();

        if (editing) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = {
                title: newTask,
                description: newDescription,
                date: newDate,
                newStatus: false
            };
            setTasks(updatedTasks);
            setNewTask("");
            setNewDescription("");
            setNewDate("");
            setEditing(false);
        } else {
            if (newTask.trim()) {
                setTasks(t => [...t, { title: newTask, description: newDescription, date: newDate, newStatus: false }]);
                console.log('Tasks after adding:', tasks);
                setNewTask("");
                setNewDescription("");
                setNewDate("");
            }
        }
    }

    function deleteTask(index) {
        const updatedTasks = filteredTasks.filter((item, i) => i !== index);
        setTasks(updatedTasks);
    }

    function completeTask(index) {
        const updatedTasks = filteredTasks.map((task, i) =>
            i == index ? { ...task, newStatus: !task.newStatus } : task
        );
        setTasks(updatedTasks);
    }

    function editTask(index) {
        setEditIndex(index);
        setNewTask(tasks[index].title);
        setNewDescription(tasks[index].description);
        setNewDate(tasks[index].date);
        setEditing(true);
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === "Completed") return task.newStatus;
        if (filter === "Uncompleted") return !task.newStatus;
        return true;
    })

    return (
        <>
            <div className="to-do">
                <h1>To-Do</h1>
                <TodoForm
                newTask = {newTask}
                newDescription = {newDescription}
                newDate = {newDate}
                setNewTask = {setNewTask}
                setNewDescription = {setNewDescription}
                setNewDate = {setNewDate}
                addTask = {addTask}
                editing = {editing}
                />

                <form>
                    <select name="tasks" id="tasks" onChange={(e) => setFilter(e.target.value)}>
                        <option value="Full">Full Todo</option>
                        <option value="Completed">Completed</option>
                        <option value="Uncompleted">Uncompleted</option>
                    </select>
                </form>
                <TodoList
                filteredTasks = {filteredTasks}
                editIndex = {editIndex}
                deleteTask = {deleteTask}
                completeTask = {completeTask}
                editTask={editTask}
                />
            </div>
        </>
    );
}

export default Todo