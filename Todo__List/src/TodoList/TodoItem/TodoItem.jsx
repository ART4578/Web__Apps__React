export default function TodoItem({todo, onChange, onDelete}) {
    return (
        <div className="item-div">
            <label className="item-label">
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }} className="item-input"/>
                {todo.text}
                <button onClick={() => {
                    onDelete(todo);
                }}  className="item-button">X</button>
            </label>
        </div>
    );
};