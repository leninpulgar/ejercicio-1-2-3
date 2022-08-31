import React, { Component } from 'react';
import Contact from './contact';
import { ContactClass } from './contact.class';


class ContactList extends Component {

    render() {
        
        const defaultContact = new ContactClass('Lenin', 'Pulgar', 'lenindpulgar@gmail.com', false)

        return (
            <div>
                <h2>Tus contactos:</h2>

                <Contact contact={defaultContact} />
            </div>
        );
    }
}

export default ContactList;
