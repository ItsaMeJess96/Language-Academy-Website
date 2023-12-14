// página em que o usuário faz log in

import iconScrabble from '../Assets/Icons/scrabble.png'
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div className="log-in">
            <div className='l-intro'>
                <h3>Inicio de Sessão</h3>
                <p>
                    É bom ter-te de volta!
                    Faz o log in para continuares a tua experiência de aprendizagem.
                </p>
            </div>
            <div className='l-form'>
                <form>
                    <label htmlFor='username'>Nome de utilizador:</label>
                    <input type='text' id='s-username' name='username' required />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='s-email' name='email' required />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='s-password' name='password' required />
                    <input type="submit" value='Entrar' />
                </form>
                <img src={iconScrabble} alt="scrabble a mostrar a palavra learn" />
            </div>
            <div className='l-sign'>
                <p>
                    Ainda não tens uma conta?  
                    <Link to='/signup'> Regista-te aqui! </Link>
                </p>
            </div>
        </div>
    )
}

export default LogIn;