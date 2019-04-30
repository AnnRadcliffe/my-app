import React from 'react';
import { Header, Image } from "semantic-ui-react";

// function Header() {
//     return (
//     <>
//     <h1>This is my header</h1>
//     </>
//     )
// }

const MyHeader = () => {
    return (
    <> 

        <Header as='h1' color='red' textAlign='center' style={{paddingTop:".75em",marginBottom: "2px"}}>
            <Image circular src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png' alt="Problem?"/>  Meme Generator

        </Header>
        
    </>
    )
}

export default MyHeader;