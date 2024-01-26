// componente que renderiza a mensagem dinamica na home page, vai buscar dados da componente examsTable.jsx

import React from "react";
import { Link } from 'react-router-dom';
import { examsData } from './ExamsTable';
import iconMessage from '/Assets/Icons/online-lesson.png'

function DinamicMessage() {

    //encontrar a data mais recente
    const latestExam = examsData.reduce((latest, exam) => {
        const examDate = new Date(exam.date);
        const latestDate = latest ? new Date(latest.date) : null;

        if (!latestDate || examDate > latestDate) {
            return exam;
        }
        return latest;
    }, null);

    return (
        <div className="h-message">
            <img id='icon-pc' src={iconMessage} alt='pessoa a anunciar mensagem num ecran' />
            <div className='h-m-exams'>
                <h3>Próximo exame:</h3>
                {latestExam ? (
                    <>
                        <p>{latestExam.exam}</p>
                        <p>{latestExam.date}</p>
                    </>
                ) : (
                    <p>Nenhum exame disponível</p>
                )}
                <Link to='/exams' id='see-all-btn'>Ver todos</Link>
            </div>
        </div>
    );
};

export default DinamicMessage;