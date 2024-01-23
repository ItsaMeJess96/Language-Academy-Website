//Componente que irá renderizar a home page

import { Link } from 'react-router-dom';
import '../Styles/Home.css'
//import icons
import iconMundo from '../Assets/Icons/languages.png';
import iconMundoTalk from '../Assets/Icons/language.png'
//import slideshow das secções, comentários, mensagem dinâmica e banner para aceitar cookies
import SectionsSlideshow from "../Components/SectionsSlideshow";
import CommentsSlideshow from "../Components/ComentsSlideshow";
import CookieBanner from '../Components/BannerCookies';
import DinamicMessage from '../Components/DinamicMessage';

function Home() {
    return (
        <div className="home">
            <div className="h-intro">
                <div className='h-intro-welcome'>
                    <div className='h-intro-message'>
                        <h2>Explora novas culturas</h2>
                        <h2>Comunica com o mundo</h2>
                        <h2>Amplia os teus horizontes</h2>
                    </div>
                    <img  id='icon-mundo' src={iconMundo} alt='icon do mundo'/>
                </div>
                <div className='h-intro-invitation'>
                    <p>
                        Estamos empenhados em fornecer uma experiência de aprendizagem de idiomas excepcional,
                        adaptada às tuas necessidades!
                    </p>
                    <Link to='/signup' id='h-start-btn'>Começar Agora!</Link>
                </div>
            </div>
            <DinamicMessage />
            <SectionsSlideshow />
            <div className="h-invitation">
                <h3>Junta-te a Nós!</h3>
                <p>
                    Não esperes mais para embarcar nesta emocionante jornada de aprendizagem de línguas.
                    Inscreve-te hoje na Culturália e começa a transformar as tuas competências linguísticas.
                    Estamos ansiosos por te receber na nossa comunidade de alunos dedicados e entusiastas.
                </p>
                <div className='h-i-connect'> 
                    <img id='icon-message-mundo' src={iconMundoTalk} alt='mundo numa caixa de mensagem' />
                    <Link id='home-contact-link' to='/contact'>Contacta-nos para obter mais informações sobre como te inscreveres</Link>
                </div>
            </div>
            <CommentsSlideshow />
            <CookieBanner />
        </div>
    )
}

export default Home;