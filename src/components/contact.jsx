import React from 'react';
import PropTypes from 'prop-types';
import { ContactClass } from './contact.class';


const Contact = ({ contact }) => {
    return (
        <div>
            <ul>
                <li>Nombre: { contact.name }</li>
                <li>Apellido: { contact.lastname }</li>
                <li>Email: { contact.email }</li>
                <li>Conectado: { contact.online === true ? 'Conectado' : 'Desconectado' }</li>
            </ul>
        </div>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf(ContactClass)
};


export default Contact;
