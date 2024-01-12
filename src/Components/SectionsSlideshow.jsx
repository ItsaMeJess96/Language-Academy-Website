/* componente slideshow que mostra brevemente as diferentes secções do website
o usuário pode navegar entre os slides através das setas de navegação */

import React, { useState } from "react";
import { Link } from 'react-router-dom';

//informação dos slides
const slides = [
    {
        cardTitle: 'Metodologias',
        title: 'Metodologias de Ensino',
        text: 'Na Culturália, acreditamos que aprender um novo idioma deve ser envolvente, prático e divertido. As nossas metodologias inovadoras são projetadas para garantir que não só compreendes o idioma, mas também o uses com confiança em situações do mundo real.',
        finalMessage: 'Sabe mais sobre as nossas ',
        url: 'src/Assets/Img/pexels-august-de-richelieu-4260477.jpg',
        alt: 'pessoa a trabalhar num computador',
        link: '/methodologies'
    },
    {
        cardTitle: 'Exames',
        title: 'Exames de Proficiência',
        text: 'Desafia-te e prova os teus conhecimentos linguísticos! Oferecemos uma vasta gama de exames de proficiência em diferentes línguas, permitindo-te demonstrar os teus conhecimentos e competências em línguas estrangeiras.',
        finalMessage: 'Vê todos os ',
        url: 'src/Assets/Img/pexels-karolina-grabowska-8106679.jpg',
        alt: 'pessoa a segurar diploma',
        link: '/exams'
    },
    {
        cardTitle: 'Cursos',
        title: 'Os Nossos Cursos',
        text: 'Quer sejas um principiante à procura de construir bases de uma nova língua ou um utilizador avançado que procura melhorar as suas competências, oferecemos uma variedade de cursos de línguas para satisfazer as tuas necessidades.',
        finalMessage: 'Explora os nossos ',
        url: 'src/Assets/Img/pexels-nastyasensei-335393.jpg',
        alt: 'globo',
        link: '/courses'
    }
]

//renderizar os slides
const SectionsSlideshow = () => {

    //UseState para rastrear slide atual, iniciar no primeiro
    const [currentSlide, setCurrentSlide] = useState(0);

    //Funções para navegar entre os slides
    const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    const previousSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);


    return (
        <div className="h-sections">
            {/* Navegar para slide anterior */}
            <i className="fi fi-ss-angle-left arrow-left" onClick={previousSlide}></i>
            {/* Imagem do slide */}
            <div className="h-sections-img-container">
                <img className="h-sections-img" src={slides[currentSlide].url} alt={slides[currentSlide].alt} />
            </div>
            {/* Conteúdo do slide */}
            <div className="h-sections-content">
                <h3 className="h-sections-content-text">{slides[currentSlide].title}</h3>
                <p className="h-sections-content-text">{slides[currentSlide].text}</p>
                <p className="h-sections-content-text">{slides[currentSlide].finalMessage}<Link className="section-link" to={slides[currentSlide].link}>{slides[currentSlide].cardTitle}</Link></p>
            </div>
            {/* Navegar para proximo slide */}
            <i className="fi fi-ss-angle-right arrow-right" onClick={nextSlide}></i>
        </div>
    )
}

export default SectionsSlideshow;