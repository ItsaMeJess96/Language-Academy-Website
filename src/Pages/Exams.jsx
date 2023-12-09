import { Link } from 'react-router-dom';

import ExamsTable from "../Components/ExamsTable";
import ContestPhases from "../Components/ContestPhases";

function Exams() {
    return (
        <div className="exams">
            <div className="e-intro">
                <p>
                    Explora a nossa variedade de exames multilíngues, 
                    projetados para avaliar e certificar as tuas habilidades em diferente idiomas.
                    Abaixo estão os detalhes sobre os exames disponíveis para cada língua:
                </p>
            </div>
            <ExamsTable />
            <ContestPhases />
            <div className='e-program'>
                <h3>Programa de Estudos</h3>
                <p>
                    Oferecemos um programa de estudos abrangente, alinhado com os requisitos de cada exame.
                    Os nossos instrutores especializados vão-te guiar, garantindo que estás totalmente preparado para enfrentar o desafio do exame.
                    Para obter mais informações sobre datas específicas de exames, requisitos e programas de estudos, 
                    <Link to='/contact'> entra em contacto conosco!</Link>. 
                    Estamos aqui para te apoiar na tua jornada de aprendizado de idiomas e preparação para exames.
                    Boa sorte na tua busca pela excelência linguística!
                </p>
            </div>
        </div>
    )
}

export default Exams;