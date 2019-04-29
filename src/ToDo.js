import React from "react";
import { Header } from "semantic-ui-react";
import todosData from "./components/todosData";

function ToDoItem(props) {
    return (
        <>
            <div>
                <h2>{props.toDo}</h2>
            </div>
            
        </>
    )
}

export default ToDoItem;