import PropTypes from 'prop-types';
import '../screens/Todo.css';

const TodoList = ({filteredTasks, editTask, completeTask, deleteTask}) => {
    return (
        <>
            <ol>
                {filteredTasks.map((task, index) => <li key={index}>

                    <div className="first">
                        <span className={task.newStatus ? "text completed" : "text"}>{task.title}</span>
                        <p className="description">{task.description}</p>
                    </div>
                    <div className="second">
                        <p className="date">{task.date}</p>

                        <button
                            className="complete-button"
                            onClick={() => editTask(index)}>
                            Edit
                        </button>

                        <button
                            className="complete-button"
                            onClick={() => completeTask(index)}>
                            {task.newStatus ? "Undo" : "Complete"}
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
        </>
    )
}

TodoList.propTypes = {
    filteredTasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        date: PropTypes.string.isRequired,
        newStatus: PropTypes.bool.isRequired,
    })).isRequired,
    editTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TodoList