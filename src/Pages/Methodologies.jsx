import React from "react";
//import icons
import iconTradução from '../Assets/Icons/translation.png'
//import metodologias interativas
import InteractiveMethodologies from "../Components/InteractiveMethodologies";

function Methodologies() {

    return (
        <div className="methodologies">
            <div className="m-intro">
                <p>
                    A excelência no ensino é a nossa prioridade! 
                    Abaixo, encontrarás informações sobre a estrutura do horário das aulas ao longo do ano letivo 
                    (setembro 2024/junho 2025) e as nossas metodologias de ensino.
                </p>
                <img src={iconTradução} alt='icon a representar letra a ser traduzida' />
            </div>
            <div className="m-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seg.</th>
                            <th>Ter.</th>
                            <th>Qua.</th>
                            <th>Qui.</th>
                            <th>Sex.</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>08h30 - 10h00</th>
                            <td>Ingês básico</td>
                            <td>Português para estrangeiros</td>
                            <td>Russo básico</td>
                            <td>Espanhol intermédio</td>
                            <td>Árabe intermédio</td>
                        </tr>
                        <tr>
                            <th>10h30 - 12h30</th>
                            <td>Francês básico</td>
                            <td>Chinês básico</td>
                            <td>Inglês intermédio</td>
                            <td>Português para estrangeiros</td>
                            <td>Russo intermédio</td>
                        </tr>
                        <tr>
                            <th>14h00 - 16h00</th>
                            <td>Espanhol básico</td>
                            <td>Japonês básico</td>
                            <td>Francês intermédio</td>
                            <td>Chinês intermédio</td>
                            <td>Inglês avançado</td>
                        </tr>
                        <tr>
                            <th>16h30 - 18h30</th>
                            <td>Italiano básico</td>
                            <td>Indi básico</td>
                            <td>Alemão intermédio</td>
                            <td>Japonês intermédio</td>
                            <td>Francês avançado</td>
                        </tr>
                        <tr>
                            <th>19h00 - 21h00</th>
                            <td>Alemão básico</td>
                            <td>Árabe básico</td>
                            <td>Italiano intermédio</td>
                            <td>Inidi intermédio</td>
                            <td>Alemão avançado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="m-methods">
                <p>
                    Adotamos uma abordagem abrangente e interativa para garantir que os alunos alcancem fluência e proficiência nas línguas escolhidas.
                    Eis os principais elementos da nossa metodologia:
                </p>
                <InteractiveMethodologies />
                <p>
                    Ao escolher a nossa academia optas por uma jornada de apredizagem que vai além da sala de aula, 
                    proporcionando uma compreensão profunda e holística das línguas que estudas.
                    Estamos comprometidos em ajudar-te a atingir os teus objetivos linguísticos de maneira eficaz e prazerosa.
                </p>
            </div>
        </div>
    )
};

export default Methodologies;