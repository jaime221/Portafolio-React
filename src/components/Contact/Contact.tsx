import React from 'react';
import '../css/Contact.css';


function Contact() {
    return (
        <div id = "Contacto" className="contact-container">
            
            <div className="center-text-contact">
                <h1>Contacto</h1>
            </div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="contact-form">

                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows={4}></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}


export default Contact;
