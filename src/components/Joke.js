import React from "react";
import { Header } from "semantic-ui-react";

const Jokes = (props) => {
    return (
        <>
            <Header as="h3" style={{display: props.joke.question ? "block" : "none"}}>Joke Q1:{props.joke.question}</Header>
            <Header as="h4" style={{color: !props.joke.question && "#666666"}}>Joke A1: {props.joke.answer}</Header>
            <hr></hr>
        </>
    )
}

export default Jokes;