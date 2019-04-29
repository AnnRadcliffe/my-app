import React from "react";

function MainContent() {
    const firstName = "Bob";
    const lastName = "Ziroll";


    return (
        <>
        <main>
        <h2>Hello {`${firstName} ${lastName}`}</h2>
        <p>this is where my main content will go.</p>
        </main>
        </>
    )
}

export default MainContent;