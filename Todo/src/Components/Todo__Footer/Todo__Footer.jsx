import "./Todo__Footer.css";

function Todo__Footer({todos, onClearCompleted}) {
    const completedSize = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="todo__footer">
            <span>{completedSize}/{todos.length} Completed</span>
            <button className="todo__clear__completed" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    );
};

export default Todo__Footer;