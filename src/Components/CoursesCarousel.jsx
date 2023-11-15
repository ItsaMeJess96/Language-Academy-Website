import React, { useState } from "react";

const CoursesCarousel = ({ courses }) => {
    const [currentCourse, setCurrentCourse] = useState(0);

    // Calcular o curso que aparece antes e depois
    const prevCourse = (currentCourse - 1 + courses.length) % courses.length;
    const nextCourse = (currentCourse + 1) % courses.length;

    // Selecionar bandeiras visíveis
    const visibleFlags = [prevCourse, currentCourse, nextCourse];

    return (
        <div className="flag-carousel">

            {/* Botão de navegação esquerdo */}
            <button onClick={() => setCurrentCourse(prevCourse)}>&lt;</button>

            {/* Renderizar as bandeiras visíveis */}
            {visibleFlags.map((index) => (
                <div key={index} className={`flag ${index === currentCourse ? 'center-flag' : ''}`}> {/*definir classe diferente para a bandeira do centro*/}
                    <img src={courses[index].flag} alt={courses[index].name} />
                    <p>{courses[index].name}</p>
                </div>
            ))}

            {/* Botão de navegação direito */}
            <button onClick={() => setCurrentCourse(nextCourse)}>&gt;</button>

        </div>
    );
};

export default CoursesCarousel;