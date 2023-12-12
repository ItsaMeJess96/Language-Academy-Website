// página de contacto

function Contact() {
    return (
        <div className="contact">
            <div className="c-message">
                <h3>Tens alguma dúvida? Entra em contacto connosco!</h3>
                <from>
                    <input type="text" name="name" placeholder="nome" />
                    <input type="email" name="name" placeholder="e-mail" />
                    <textarea name="message"></textarea>
                    <input type="submit" value="submeter" />
                </from>
            </div>
            <div className="c-location">
                <p>Podes encontrar-nos em:</p>
                <address> Rua da Amostra, 123; 1234-567 Lisboa, Portugal</address>
                <p>Para mais informações, entra em contacto através do formulário acima ou visita-nos presencialmente</p>
            </div>
        </div>
    )
}

export default Contact;


// AIzaSyBuCjayOslvEKH5T74yVawhhU5pEQG8I0s