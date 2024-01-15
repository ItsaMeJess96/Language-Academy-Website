// página em que o usuário se pode inscrever na plataforma

import '../Styles/LogIn&SignUp.css'
import iconPC from '../Assets/Icons/online-lesson2.png'

function SignUp() {
    return (
        <div className="sign-up">
            <div className='s-intro'>
                <div>
                    <h3>Resgista-te na nossa plataforma!</h3>
                    <p>
                        Damos-te as boas vindas à Culturália!
                        Regista-te para começares a tua jornada de aprendizagem de línguas.
                    </p>
                </div>
                <img id='icon-signUp' src={iconPC} alt="ecrã a mostrar aula online" />
            </div>
            <div className='s-form-container'>
                <form  className='s-form' onSubmit={validarForm}>
                    <label htmlFor='s-username'>Nome de utilizador:</label>
                    <input type='text' id='s-username' name='username' autoComplete='username' required />
                    <label htmlFor='s-email'>Email:</label>
                    <input type='email' id='s-email' name='email' autoComplete='email' required />
                    <label htmlFor='s-password'>Password:</label>
                    <input type='password' id='s-password' name='password' autoComplete='new-password' required />
                    <label htmlFor='s-password-repeat'>Repetir password:</label>
                    <input type='password' id='s-password-repeat' name='password-repeat' required />
                    <input type="submit" value='Registar' />
                </form>
            </div>
        </div>
    )
}

//função para validar o formulário
function validarForm () {
    var pass = document.getElementById('s-password').value;
    var passRepetida = document.getElementById('s-password-repeat').value;

    if (pass !== passRepetida) {
        document.getElementById('s-password').value = '';
        document.getElementById('s-password-repeat').value = '';
        document.getElementById('s-password').placeholder = 'As passwords não coincidem';
        document.getElementById('s-password-repeat').placeholder = 'As passwords não coincidem';
        return false; //assim impede o envio do formulário se as passwords não coincidirem
    }
    return true;
}

export default SignUp;