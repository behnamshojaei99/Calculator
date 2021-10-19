import React from "react";

const Todo = ({todos}) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li>
                    {todo}
                    <i></i>
                    <i></i>
                </li>
            ))}
        </ul>
        
    );
}

export default Todo;