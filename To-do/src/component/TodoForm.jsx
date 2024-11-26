import PropTypes from 'prop-types';
import '../screens/Todo.css';

const TodoForm = ({ newTask, setNewTask, addTask, newDescription, setNewDescription, newDate, setNewDate, editing }) => {
    return (
        <>
            <div className="form-input">
                <form onSubmit={addTask}>
                    <div className="task-display">

                        <input
                            type="text"
                            placeholder="Enter a task"
                            value={newTask}
                            required
                            onChange={(e) => { setNewTask(e.target.value) }} />

                        <input
                            type="text"
                            placeholder="Description"
                            value={newDescription}
                            onChange={(e) => { setNewDescription(e.target.value) }} />

                    </div>
                    <input
                        type="date"
                        placeholder="Select a Date"
                        value={newDate}
                        onChange={(e) => { setNewDate(e.target.value) }} />

                    <button
                        className="add-btn"
                        type="submit">
                        {editing ? "Update" : "Add"}
                    </button>
                </form>
            </div>
        </>
    )
}

TodoForm.propTypes = {
    newTask: PropTypes.string.isRequired,
    newDescription: PropTypes.string.isRequired,
    newDate: PropTypes.string.isRequired,
    setNewTask: PropTypes.string.isRequired,
    addTask: PropTypes.string.isRequired,
    setNewDescription: PropTypes.string.isRequired,
    setNewDate: PropTypes.string.isRequired,
    editing: PropTypes.string.isRequired,
}

export default TodoForm;