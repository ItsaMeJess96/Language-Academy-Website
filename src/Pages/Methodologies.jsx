import React, { useState } from "react";
import { Link } from "react-router-dom";
import { methodologies, testimonials } from "../Data/data";
import ClassTable from "../Components/ClassTable";

function Methodologies() {

    // Iniciar estado com a primeira metodologia selecionada
    const [activeMethodology, setActiveMethodology] = useState(0);

    // Função para alternar entre metodologias
    const handleClick = (index) => setActiveMethodology(index);

    return (
        <div className="methodologies">

            <div className="m-intro">
                <h3>As Nossas Metodologias de Ensino:</h3>
                <div className="m-titles">

                    {/* Map através das metodologias para originar botões com titulo */}
                    {methodologies.map((methodology, index) => (
                        <button key={index} onClick={() => handleClick(index)}>
                            {methodology.title}
                        </button>
                    ))}
                </div>

                {/* map para mostrar o conteúdo do botão clicado */}
                {methodologies.map((methodology, index) => (
                    <div key={index} className="selected-content">
                        {activeMethodology === index && <p>{methodology.content}</p>}
                    </div>
                ))}
            </div>

            <div className="m-class-table">
                <h3>Ano letivo 2023/2024</h3>
                <ClassTable />
            </div>

            <div className="m-instructors">
                <h3>Suporte acessível para as tuas dúvidas</h3>
                <p>A aprendizagem de uma língua pode trazer questões, e os nossos professores estão aqui para te ajudar.
                    Quer tenhas dificuldades com a gramática, a pronúncia ou o vocabulário, os nossos professores estão disponíveis
                    para responder às tuas perguntas. Podes contactá-los a qualquer momento, garantindo que recebes o apoio de
                    que necessitas para ultrapassar os desafios e progredir nos teus estudos de línguas.
                </p>
                <p>Na nossa academia de línguas, os nossos professores dedicados não são apenas educadores; 
                    Eles são mentores na tua aventura de aprendizagem de línguas, guiando-te para a fluência e 
                    compreensão cultural. Junta-te às nossas aulas e embarca numa jornada gratificante para a proficiência linguística hoje!
                </p>
            </div>

            <img />

            <div className="m-testimonials">
                <h3>Vê o que nossos alunos pensam</h3>

                {/* map para gerar testemunhos */}
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="testimonial-user">
                            <p>{testimonial.name}</p>
                            <img />
                        </div>
                        <div className="testimonial-content">
                            <p>{testimonial.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="m-invitation">
                <p>Pronto para experimentar estas metodologias e embarcar numa viagem de aprendizagem de sucesso connosco?</p>
                <Link to="/signup">Junta-te hoje à nossa plataforma e liberta todo o teu potencial!</Link>
            </div>

        </div>
    )
};

export default Methodologies;