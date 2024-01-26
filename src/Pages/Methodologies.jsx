//Componente que irá renderizar a página em que apresenta as metodologias 

//import icons
import '../Styles/Methodologies.css'
import iconTradução from '/Assets/Icons/translation.png'
//import tabela com horário e metodologias interativas
import ScheduleClasses from "../Components/ScheduleClasses";
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
                <img id='icon-translation' src={iconTradução} alt='icon a representar letra a ser traduzida' />
            </div>
            <div className="m-table">
                <ScheduleClasses />
            </div>
            <div className="m-methods">
                <p className='m-methods-text'>
                    Adotamos uma abordagem abrangente e interativa para garantir que os alunos alcancem fluência e proficiência nas línguas escolhidas.
                    Eis os principais elementos da nossa metodologia:
                </p>
                <InteractiveMethodologies />
                <p className='m-methods-text'>
                    Ao escolher a nossa academia optas por uma jornada de apredizagem que vai além da sala de aula, 
                    proporcionando uma compreensão profunda e holística das línguas que estudas.
                    Estamos comprometidos em ajudar-te a atingir os teus objetivos linguísticos de maneira eficaz e prazerosa.
                </p>
            </div>
        </div>
    )
};

export default Methodologies;