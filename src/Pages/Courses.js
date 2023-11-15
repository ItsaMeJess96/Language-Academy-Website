import React, { useState } from "react";
import { courses } from "../Data/data";
import CoursesCarousel from "../Components/CoursesCarousel";
import { Link } from 'react-router-dom';

function Courses() {
    return (
        <div className="courses">
            <div className="courses-intro">
                <p>Na nossa academia de línguas, oferecemos uma vasta seleção de cursos de línguas, para vários níveis de proficiência.
                    O nosso currículo foi concebido para acomodar alunos em todas as fases do seu percurso de aprendizagem de línguas.
                    Quer sejas um iniciante ou estejas a tentar alcançar uma fluência avançada, encontrarás um curso que se adequa às tuas necessidades.</p>
                <p>Desde línguas globais amplamente faladas até àquelas com significado cultural distinto.
                    Podes explorar uma nova língua, reforçar as tuas competências ou especializares-te num determinado dialeto ou variação regional.</p>
            </div>


            <CoursesCarousel courses={courses} />

            <div className="courses-info">
                <div>
                    <h3>Sem limite de tempo para a conclusão</h3>
                    <p>Compreendemos que a aprendizagem de línguas é uma viagem pessoal e que cada aluno progride ao seu próprio ritmo.
                        É por isso que não há limites de tempo para a conclusão do curso. Quer sejas um aluno rápido ou prefiras um horário de estudo mais descontraído,
                        os nossos cursos adaptam-se às tuas necessidades. Aprende confortavelmente e alcança a proficiência nos teus termos.</p>
                </div>
                <div>
                    <h3>Ganha diplomas para cada nível de proficiência</h3>
                    <p>À medida que avanças nos nossos cursos e completas os módulos necessários, recebes um diploma correspondente ao teu nível de proficiência.
                        Estes diplomas constituem uma prova tangível das tuas competências linguísticas e podem ser um complemento valioso para o teu portefólio.
                        Os nossos cursos de línguas têm como objetivo tornar a aprendizagem de línguas acessível, agradável e gratificante.
                        Embarca na tua viagem linguística connosco, escolhe entre uma vasta gama de línguas e inicia hoje o teu caminho para a proficiência!</p>
                </div>
            </div>

            <div className="courses-invitation">
                <p>Pronto para explorar estes cursos e avançar na tua jornada de aprendizado de idiomas?</p>
                <Link to="/signup">Começa agora e desbloqueia o teu potencial completo!</Link>

            </div>

        </div>
    )
}

export default Courses;