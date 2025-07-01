import { useState } from "react";
import "./Todo__Form.css";

function Todo__Form({onAdd}) {
    const [text, setText] = useState("");

    const handleText = (e) => setText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
    };

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <input className="todo__input" type="text" value={text} onChange={handleText} placeholder="Todo..."/>
            <button className="todo__btn__add">Add</button>
        </form>
    );
};

export default Todo__Form;