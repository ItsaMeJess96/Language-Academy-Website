import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main>
            <div className="welcome-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="577" viewBox="0 0 1440 577" fill="none">
                    <path d="M0 436.374V0H1440V577L0 436.374Z" fill="#355C7D" />
                </svg>
                <div>
                    <h2>Explora novas Culturas.</h2>
                    <h2>Comunica com o Mundo.</h2>
                    <h2>Amplia os teus Horizontes.</h2>
                </div>
                <p>Na Culturália, estamos empenhados em fornecer uma experiência de aprendizagem de idiomas excepcional, adaptada às tuas necessidades.</p>
                <img />
                <Link to="/signup">Começa Agora!</Link>

            </div>

            <div className="up-next-container">
                <img />
                <div className="up-next">
                    <h3>Não percas os nossos próximos exames!</h3>
                    <div className="exam-card">
                        <p>5 de dezembro</p>
                        <p>Inglês C2</p>
                    </div>
                    <div className="exam-card">
                        <p>12 de dezembro</p>
                        <p>Francês B1</p>
                    </div>
                </div>

            </div>
            <div className="info-cards-container">
                <div className="methodology-card">
                    <h4>As Nossas Metodologias de Ensino</h4>
                    <p>Na Culturália, acreditamos que aprender um novo idioma deve ser envolvente,
                        prático e divertido. As nossas metodologias inovadoras são projetadas para garantir que não só
                        compreendes o idioma, mas também o uses com confiança em situações do mundo real.</p>
                    <p>Sabe mais sobre nossas <Link to="/methodologies">Metodologias</Link>!</p>
                    <img />
                </div>
                <div className="exams-card">
                    <h4>Exames de Proficiência</h4>
                    <p>Desafia-te e prova os teus conhecimentos linguísticos!
                        Oferecemos uma vasta gama de exames de proficiência em diferentes línguas,
                        permitindo-te demonstrar os teus conhecimentos e competências em línguas estrangeiras.</p>
                    <p>Vê todos os <Link to="/exams">Exames</Link>!</p>
                    <img />
                </div>
                <div className="courses-card">
                    <h4>Nossos Cursos</h4>
                    <p>Oferecemos uma variedade de cursos de línguas para satisfazer as tuas necessidades específicas.
                        Quer sejas um principiante à procura de construir as bases de uma nova língua ou um
                        utilizador avançado que procura melhorar as suas competências, temos o curso perfeito para ti.</p>
                    <p>Explora os nossos <Link to="/courses">Cursos</Link>!</p>
                    <img />
                </div>
            </div>

            <div className="join-invitation">
                <h3>Junta-te a Nós!</h3>
                <p>Não esperes mais para embarcar nesta emocionante jornada de aprendizagem de línguas. 
                    Inscreve-te hoje na Culturália e começa a transformar as tuas competências linguísticas. Estamos ansiosos por o receber na nossa comunidade de alunos dedicados e entusiastas.</p>
                <Link to="/contact">Contacta-nos para obter mais informações sobre como te inscreveres</Link>
            </div>

        </main>
    )
}

export default Home;