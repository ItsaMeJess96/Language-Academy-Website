// página de contacto

import '../Styles/Contact.css'
import { useState } from "react";
//import do mapa
import MapContainer from "../Components/Map";

function Contact() {

    // iniciar o useState
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // função a ser chamada quando ocorre uma mudança
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /* função a ser chamada quando o formulário é enviado
     previne o comportamento padrão e faz solicitação POST para o <servidor></servidor> */ 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/enviar-email', {
                method: 'POST',
                hearders: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Email enviado com sucesso!');
            } else {
                console.error('Erro ao enviar o email.');
            }
        } catch (error) {
            console.error('Erro inesperado: ', error)
        } 
    };
    

    return (
        <div className="contact">
            <div className="c-message">
                <h3>Tens alguma dúvida?</h3> 
                <h3>Entra em contacto connosco!</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="nome" id="c-name" required onChange={handleChange}/>
                    <input type="email" name="email" placeholder="e-mail" id="c-email" required onChange={handleChange}/>
                    <textarea name="message" id="c-message" required onChange={handleChange}></textarea>
                    <input type="submit" value="submeter" />
                </form>
            </div>
            <div className="c-location">
                <p>Podes encontrar-nos em:</p>
                <address> Rua da Amostra, 123; 1234-567 Lisboa, Portugal</address>
                <MapContainer />
                <p>Para mais informações, entra em contacto através do formulário ou visita-nos presencialmente</p>
            </div>
        </div>
    )
}

export default Contact;


