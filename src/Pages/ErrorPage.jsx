//Componente que renderiza a página de erro

import errorGif from '../Assets/Icons/warning.gif'

function ErrorPage() {
    return (
        <div className="error">
            <h3>Ups! Página não encontrada</h3>
            <img src={errorGif} alt='ecran com alerta de erro' />

            <a href="https://www.flaticon.com/free-animated-icons/error" title="error animated icons">Error animated icons created by Freepik - Flaticon</a>
        </div>
    )
}

export default ErrorPage;