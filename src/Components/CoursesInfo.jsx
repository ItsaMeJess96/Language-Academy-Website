/* Componente para mostrar os diferentes cursos e informação acerca destes
Irão aparecer as bandeiras relativas ao curso, e o nome por baixo
Quando o usuário carregar na bandeira irá mostar informações à cerca desse curso */

import React, { useState } from "react";

// dados a serem usados

const coursesData = [
    {
        img: '/Assets/Icons/united-kingdom.png',
        alt: 'bandeira do Reino Unido',
        title: 'Inglês',
        description: [
            'Inglês Básico:', ' Desenvolve habilidades fundamentais de gramática, vocabulário e comunicação;', ' Ideal para iniciantes que desejam uma base sólida.',
            'Inglês Intermédio:', ' Aprofunda as tuas habilidades de conversação, leitura e escrita;', ' Prepara-te para situações práticas do dia-a-dia.',
            'Inglês Avançado:', ' Refina a tua fluência e domina nuances avançadas do idioma;', ' Prepara-te para desafios profissionais e académicos.'
        ]
    },
    {
        img: '/Assets/Icons/france.png',
        alt: 'bandeira da França',
        title: 'Francês',
        description: [
            'Francês Básico:', ' Aprende o essencial para interações cotidianas;', ' Explora a cultura francófona de maneira envolvente.',
            'Francês Intermédio:', ' Desenvolve habilidades de comunicação mais complexas;', ' Conecta-te com a riqueza literária e cultural do francês.',
            'Francês Avançado:', ' Aperfeiçoa a tua proficiência para contextos académicos e profissionais;', ' Explora oportunidades de trabalho em ambientes francófonos.'
        ]
    },
    {
        img: '/Assets/Icons/spain.png',
        alt: 'bandeira de Espanha',
        title: 'Espanhol',
        description: [
            'Espanhol Básico:', ' Adquire as bases essenciais para a comunicação;', ' Explora a diversidade cultural dos países de língua espanhola.',
            'Espanhol Intermédio:', ' Aprimora as tuas habilidades linguísticas para conversações mais complexas;', ' Prepara-te para viagens e interações sociais.',
            'Espanhol Avançado:', ' Domina a língua para ambientes profissionais e académicos;', ' Abre portas para oportunidades de carreira global.'
        ]
    },
    {
        img: '/Assets/Icons/italy.png',
        alt: 'bandeira de Itália',
        title: 'Italiano',
        description: [
            'Italiano Básico:', ' Introdução à língua e cultura italiana;', ' Desenvolve habilidades práticas para viagens e comunicação simples.',
            'Italiano Intermédio:', ' Aprofunda-te na gramática e expansão do vocabulário;', ' Explora a riqueza artística e histórica da itália.',
            'Italiano Avançado:', ' Desenvolve proficiência para interações sofisticadas;', ' Abre portas para oportunidades de trabalho relacionadas à itália.'
        ]
    },
    {
        img: '/Assets/Icons/germany.png',
        alt: 'bandeira da Alemanha',
        title: 'Alemão',
        description: [
            'Alemão Básico:', ' Constroi uma base sólida em gramática e vocabulário;', ' Ideal para iniciantes que buscam compreensão básica.',
            'Alemão Intermédio:', ' Desenvolve habilidades mais avançadas em conversação e escrita;', ' Explora oportunidades de estudo e trabalho na Alemanha.',
            'Alemão Avançado:', ' Refine as tuas habilidades para situações profissionais e académicas;', ' Abre portas para carreiras em empresas alemãs e organizações internacionais.'
        ]
    },
    {
        img: '/Assets/Icons/portugal.png',
        alt: 'bandeira de Portugal',
        title: 'Português',
        description: [
            'Português para estrangeiros:', 'Adquere habilidades necessárias para comunicares eficazmente em português', ' Explora a cultura portuguesa de maneira envolvente.',
        ]
    },
    {
        img: '/Assets/Icons/china.png',
        alt: 'bandeira da China',
        title: 'Chinês',
        description: [
            'Chinês Básico:', ' Introdução à escrita, pronúncia e gramática;', ' Prepara-te para interações básicas e viagens.'
        ]
    },
    {
        img: '/Assets/Icons/japan.png',
        alt: 'bandeira do Japão',
        title: 'Japonês',
        description: [
            'Japonês Básico:', ' Introdução à escrita, pronúncia e gramática;', ' Prepara-te para interações básicas e viagens.'
        ]
    },
    {
        img: '/Assets/Icons/india.png',
        alt: 'bandeira da India',
        title: 'Hindi',
        description: [
            'Hindi Básico:', ' Introdução à escrita, pronúncia e gramática;', ' Prepara-te para interações básicas e viagens.'
        ]
    },
    {
        img: '/Assets/Icons/united-arab-emirates.png',
        alt: 'bandeira dos emirados árabes unidos',
        title: 'Árabe',
        description: [
            'Árabe Básico:', ' Introdução à escrita, pronúncia e gramática;', ' Prepara-te para interações básicas e viagens.'
        ]
    },
    {
        img: '/Assets/Icons/russia.png',
        alt: 'bandeira da Russia',
        title: 'Russo',
        description: [
            'Russo Básico:', ' Introdução à escrita, pronúncia e gramática;', ' Prepara-te para interações básicas e viagens.'
        ]
    },

]

// componente que irá mostrar os cursos 

function CoursesInfo() {

    //UseState para rastrear o curso selecionado, inicia vazio
    const [currentCourse, setCurrentCourse] = useState();

    //Função para mostrar o curso quando o utilizador carrega na imagem
    const handleCourseClick = (index) => setCurrentCourse(index);

    //Função para organizar as descrições 
    const renderDescription = () => {
        //se o currentCourse estiver definido, ou seja, se o utilizador carregou no curso:
        if (currentCourse !== undefined) {
            //buscar as descrições e iniciar o grupo vazio
            const descriptionItems = coursesData[currentCourse].description;
            const groupedDescription = [];

            //organizar as descrições 3 a 3
            for (let i = 0; i < descriptionItems.length; i += 3) {
                groupedDescription.push(
                    <div key={i / 3}>
                        <p>
                            <strong>{descriptionItems[i]}</strong>{' '}
                            {descriptionItems[i + 1]}{' '}
                            {descriptionItems[i + 2]}
                        </p>
                    </div>
                )
            }
            return groupedDescription;
        }
        return null;
    }

    return (
        <div className="c-info">
            <div className="c-info-flags">
                {/* Vai mapear pelo array e renderiza um bloco para cada elemento */}
                {coursesData.map((course, index) => (
                    // usamos a propriedade key para ajudar o react a identificar cada elemento durante as atualizações
                    <div className="c-flag-container" style={{cursor: "pointer"}} key={index} onClick={() => handleCourseClick(index)}>
                        <img className="c-flag-img" src={course.img} alt={course.alt} />
                        <p className="c-flag-text">{course.title}</p>
                    </div>
                ))}
            </div>
            {/*Renderizar o div apenas quando o usuário clica na bandeira*/}
            {currentCourse !== undefined && (
                <div className="c-info-body">
                    {renderDescription()}
                </div>
            )}
        </div>
    )
};

export default CoursesInfo;