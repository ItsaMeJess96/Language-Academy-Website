// página em que o usuário se pode inscrever na plataforma

import iconPC from '../Assets/Icons/online-lesson2.png'

function SignUp() {
    return (
        <div className="sign-up">
            <div className='s-intro'>
                <h3>Resgista-te na nossa plataforma!</h3>
                <p>
                    Damos-te as boas vindas à Culturália!
                    Regista-te para começares a tua jornada de aprendizagem de línguas.
                </p>
            </div>
            <div className='s-form'>
                <form>
                    <label htmlFor='username'>Nome de utilizador:</label>
                    <input type='text' id='s-username' name='username' required />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='s-email' name='email' required />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='s-password' name='password' required />
                    <label htmlFor='password-repeat'>Repetir password:</label>
                    <input type='password' id='s-password-repeat' name='password-repeat' required />
                    <input type="submit" value='Registar' />
                </form>
                <img src={iconPC} alt="ecrã a mostrar aula online" />
            </div>
        </div>
    )
}

export default SignUp;