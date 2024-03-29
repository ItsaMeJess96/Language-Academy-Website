// página de contacto

import '../Styles/Contact.css'
//import do mapa
import MapContainer from "../Components/Map";

function Contact() {
    return (
        <div className="contact">
            <div className="c-message">
                <h3>Tens alguma dúvida?</h3>
                <h3>Entra em contacto connosco!</h3>
                <form>
                    <input type="text" name="name" placeholder="nome" id="c-name" autoComplete='name' required />
                    <input type="email" name="email" placeholder="e-mail" id="c-email" autoComplete='email' required />
                    <textarea name="message" id="c-message" required ></textarea>
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


