import React, { Component } from 'react';
import './App.css';
import TodoItem from "./components/TodoItem";
import { Segment, SegmentGroup, Divider } from "semantic-ui-react";
import ContactCard from './ContactCard';
import Joke from './components/Joke';
import jokesData from './components/jokesData';
import ProductsData from "./ProductsData";
import Product from "./Product";
import todosData from "./components/todosData";


const productComponents = ProductsData.map(item => <Product key={item.id} product={item} />)

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const toDoComponents = this.state.todos.map(item => <TodoItem key={item.id} toDo={item.text} />)

    return (
      <>
        <Segment.Group compact stacked>
           {toDoComponents}
        </Segment.Group>
        <Divider />

        
        <Segment compact>
        {productComponents}
        </Segment>
        <Divider />

       

        <ContactCard 
          contact={{
            name: "Mr. Whiskerson", 
            imgUrl:"http://placekitten.com/300/200", 
            phone: "(360) 777-1234", 
            email:"whiskaz@catnip.meow" 
          }}
        
          />

        <ContactCard 
          contact={{
            name: "Mrs. Fluffypants", 
            imgUrl:"http://placekitten.com/400/200", 
            phone: "(360) 777-5678", 
            email:"fluffypants@catnip.meow" 
          }}
          />
              <Divider />
        <Joke 
          joke={{
            question: "Why did the chicken cross the road?",
            answer: "To get to the other side."
          }}
        />
        <Joke 
          joke={{
            answer: "It’s hard to explain puns to kleptomaniacs because they always take things, literally."
          }}
        />
      
      
      </>
    );
  }
}



export default App;
