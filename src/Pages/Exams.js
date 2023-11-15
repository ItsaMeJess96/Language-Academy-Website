import React from "react";
import { Link } from 'react-router-dom';
import Calendar from '../Components/Calendar';

function Exams() {
    return (
        <div className="exams">
            <div className="exams-info">
                <h3>Exames sem necessidade de curso!</h3>
                <p>A Culturália oferece uma variedade de exames de línguas para alunos de todos os níveis de proficiência.
                    Aqui podes fazer exames sem ser necessário fazerem nenhum curso. Podes consultar no calendário os exames
                    disponíveis e entrar na plataforma para te inscreveres!</p>
                <p>Os exames são presenciais e realizados num local a marcar com o aluno. O local do exame pode ser a
                    nossa escola ou outro local à tua escolha. A nota do exame vai corresponder a um nível de proficiência
                    do Quadro Europeu Comum de Referência para as Línguas. </p>
                <p>Os exames têm um custo associado e podes tentar os exames as vezes que quiseres, até alcançares o nível de proficiência desejado</p>
            </div>
            <div className="exams-calendar">
                <h3>Calendário de Exames</h3>
                <Calendar />
            </div>
            <div className="exams-process">
                <h3>Prazos e documentos</h3>
                <p>O prazo de inscrição para os exames é de 30 dias antes da data do exame.</p>
                <p>Para realizar o exame é necessário trazeres contigo o teu documento de identificação,
                    comprovativo de inscrição e comprovativo de pagamento da inscrição</p>
                <h3>O que avaliamos e como avaliamos</h3>
                <p>Os exames avaliam a tua compressenção e expressão, tanto oral como escrita.</p>
                <p>São corrigidos por examinadores qualificados, que são nativos da língua em questão. 
                    O processo de correção é rigoroso e garante a imparcialidade dos resultados.</p>
                <p>Os resultados dos exames estão disponíveis cerca de duas semanas após a realização do exame. 
                    Os alunos serão notificados por e-mail quando os resultados estiverem disponíveis.</p>
            </div>
            <div className="exams-contact">
                <p>Não encontras o exame que desejas?</p>
                <Link to="/signup">Entra em contacto connosco!</Link>
            </div>
        </div>
    )
}

export default Exams;