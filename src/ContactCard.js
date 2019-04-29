import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";

const ContactCard = (props) => {
    return (
    <>
        <Segment compact>
            <Image src={props.contact.imgUrl}></Image>
            <Header as='h3'>{props.contact.name}</Header>
            <p>Phone: {props.contact.phone} </p>
            <p>Email: {props.contact.email} </p>
        </Segment>
    </>
    )
}

export default ContactCard;
