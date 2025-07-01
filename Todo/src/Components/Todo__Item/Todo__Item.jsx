import "./Todo__Item.css";

function Todo__Item({todo, onChange, onDelete}) {
    const changeInput = (e) => {
        onChange({
            ...todo,
            isCompleted: e.target.checked
        });
    };

    const changeDelete = () => {
        onDelete(todo);
    };

    return (
        <div className="todo__list">
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={changeInput}/>
                {todo.text}
                <button className="todo__btn__delete" onClick={changeDelete}>X</button>
            </label>
        </div>
    );
};

export default Todo__Item;