export default function TodoFooter({todos, onClearCompleted}) {
    const completedSize = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="footer-div">
            <span className="footer-span">{completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted} className="footer-button">Clear Completed</button>
        </div>
    );
};