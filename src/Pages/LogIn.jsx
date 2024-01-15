// página em que o usuário faz log in

import '../Styles/LogIn&SignUp.css'
import iconScrabble from '../Assets/Icons/scrabble.png'
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div className="log-in">
            <div className='l-intro'>
                <div>
                    <h3>Inicio de Sessão</h3>
                    <p>
                        É bom ter-te de volta!
                        Faz o log in para continuares a tua experiência de aprendizagem.
                    </p>
                </div>
            </div>
            <div  className='l-form-container'>
                <form className='l-form'>
                    <label htmlFor='s-username'>Nome de utilizador:</label>
                    <input type='text' id='s-username' name='username' autoComplete='username' required />
                    <label htmlFor='s-email'>Email:</label>
                    <input type='email' id='s-email' name='email' autoComplete='email' required />
                    <label htmlFor='s-password'>Password:</label>
                    <input type='password' id='s-password' name='password' autoComplete='current-password' required />
                    <input type="submit" value='Entrar' />
                </form>
            </div>
            <div className='l-sign'>
                <img id='icon-logIn' src={iconScrabble} alt="scrabble a mostrar a palavra learn" />
                <p>
                    Ainda não tens uma conta?  
                    <Link to='/signup' id='logIn-link'> Regista-te aqui! </Link>
                </p>
            </div>
        </div>
    )
}

export default LogIn;