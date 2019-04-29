import React from 'react';
import './App.css';
import { Segment, Header, Icon } from "semantic-ui-react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todosData";

// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
   // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)

  handleChange(id) { 
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
              todo.completed = !todo.completed
          }
          return todo
      })
      return {
        todos: updatedTodos
      }
  })
  console.log("changed", id)
}

  render() {
    const toDoComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

    return (
      <>
      <Segment compact>
        <Header as='h1' textAlign='center' style={{paddingTop:".75em",marginBottom: "2px"}}> 
        <Icon color='red' name='clipboard check' size='small' style={{marginRight: "2px"}}/>
        My To Do List
        </Header>
       
        <Segment.Group compact stacked >
           {toDoComponents}
        </Segment.Group>
        </Segment>
      
      </>
    );
  }
}

export default App;
