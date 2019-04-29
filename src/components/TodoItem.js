import React from 'react';
import { Segment, Checkbox } from 'semantic-ui-react';


const TodoItem = (props) => {

const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "#ff0000"
    
}

    return (
        <>
            <Segment>
                <Checkbox 
                    label={props.item.text} 
                    checked={props.item.completed} 
                    onChange={ () => {props.handleChange(props.item.id)} }
                    style={props.item.completed ? completedStyle: null}
                 />
            </Segment>
        
        </>
    )
}

export default TodoItem