//Componente que irá renderizar a página que apresenta os cursos disponíveis

import '../Styles/Courses.css'
import { Link } from 'react-router-dom';
//import icon
import iconPoliglota from '/Assets/Icons/bilingual.png';
//import dos cursos disponíveis e sua informação
import CoursesInfo from '../Components/CoursesInfo';

function Courses() {
    return (
        <div className="courses">
            <div className="c-intro">
                <p>
                    Damos-te as boas vindas à nossa variedade de cursos multilíngues 
                    projetados para enriquecer as tuas habilidades linguísticas 
                    e abrir portas para oportunidades de carreira emocionantes.
                    Abeixo apresentamos uma visão geral dos cursos oferecidos em diferentes idiomas,
                    carrega na bandeira para saberes mais!
                </p>
            </div>
            <CoursesInfo />
            <div className="c-opportunities-container">
                <h3>Oportunidades de Carreira</h3>
                <div className='c-opportunitie'>
                    <h4>Tradução e Interpretação</h4>
                    <p>Explora oportunidades como tradutor ou intérprete em ambientes multilíngues</p>
                </div>
                <div className='c-opportunitie'>
                    <h4>Relações Internacionais</h4>
                    <p>Desenvolve uma carreira em organizações globais, aproveitando as tuas habilidades linguísticas</p>
                </div>
                <div className='c-opportunitie'>
                    <h4>Turismos e Hospitalidade</h4>
                    <p>Utiliza as tuas habilidades para trabalhar em setores turísticos e de hospitalidade em todo o mundo</p>
                </div>
                <div className='c-opportunitie'>
                    <h4>Ensino de Idiomas</h4>
                    <p>Torna-te um educador de idiomas e compartilha o teu conhecimento com outros aprendizes</p>
                </div>
            </div>
            <div className="c-invite">
                <img id='icon-poliglota' src={iconPoliglota} alt='pessoa a falar várias línguas' />
                <div>
                <p>
                    Para saberes mais sobre cada curso, detalhes específicos, 
                    e como essas habilidades podem impulsionar a tua carreira, 
                    <Link id='courses-link' to='/contact'> entra em contacto conosco! </Link>
                    Estamos prontos para te guiar em direção a um futuro 
                    linguístico e profissional brilhante!
                </p>

                </div>
            </div>
        </div>
    )
}

export default Courses;