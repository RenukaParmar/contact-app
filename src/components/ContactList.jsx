import React from 'react'
import { Container } from 'react-bootstrap';

import ContactCard from './ContactCard'
const ContactList = (props) => {
    return (
            <Container>
                
                {
                    props.contactList.length > 0 ?
                        props.contactList.map((contact, i) =>
               <ContactCard contact={contact}/>
                        ) : <h1>Empty list</h1>
                }
            </Container>
    )
}

export default ContactList
