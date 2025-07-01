import Todo__Item from "../Todo__Item/Todo__Item";

function Todo__List({todos, onChange, onDelete}) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <Todo__Item 
                            key={todo.id} 
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    );
};

export default Todo__List;