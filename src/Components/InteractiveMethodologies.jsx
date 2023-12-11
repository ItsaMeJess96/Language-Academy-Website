/*componente que renderiza as metodologias praticadas a partir de um array de dados
mostra os títulos das metodologias que ao serem clicados irão mostrar informação à cerca dessa metodologia */

import React, {useState} from "react";

//dados dos métodos
const methods = [
    {
        title: 'Aulas Presenciais',
        text: 'As nossas aulas presenciais são ministradas por instrutores altamente qualificados e experientes. Focamos em turmas reduzidas para garantir atenção individualizada',
        img: 'src/Assets/Icons/alphabet.png',
        alt: 'quadro de escola com letras'
    },
    {
        title: 'Material Didático',
        text: 'Utilizamos materiais didáticos modernos e relevantes para cada nível de proficiência. Os livros, recursos online e atividades práticas são cuidadosamente selecionados para enriquecer a experiência de aprendizado',
        img: 'src/Assets/Icons/books.png',
        alt: 'icon com livros'
    },
    {
        title: 'Tutorias',
        text: 'Oferecemos tutorias individuais para alunos que buscam assistência adicional. Os tutores estão disponíveis para esclarecer dúvidas, rever conceitos e fornecer orientação personalizada',
        img: 'src/Assets/Icons/translator.png',
        alt: 'pessoa a dizer olá'
    },
    {
        title: 'Integração Multimodal',
        text: 'Integramos abordagens auditivas, visuais e táteis, criamos um ambiente de apredizagem multimodal. Atividades interativas, vídeos, áudios e jogos são incorporados para tornar as aulas dinâmicas e envolventes',
        img: 'src/Assets/Icons/puzzle.png',
        alt: 'puzzle com letras'
    },
    {
        title: 'Avaliações Regulares',
        text: 'Realizamos avaliações periódicas para acompanhar o progresso dos alunos. É fornecido feedback construtivo para orientar os alunos no aprimoramento contínuo das suas habilidades linguísticas',
        img: 'src/Assets/Icons/score.png',
        alt: 'icon de folha exame'
    },
    {
        title: 'Imersão Cultural',
        text: 'Promovemos experiências de imersão cultural, como eventos temáticos, para aprofundar a compreensão das línguas e culturas estudadas',
        img: 'src/Assets/Icons/conversation.png',
        alt: 'pessoas a ter conversa em diferentes línguas'
    },
]


//renderizar as metodologias
function InteractiveMethodologies () {

    //UseState para rastrear o método selecionado, iniciar no primeiro
    const [currentMethod, setCurrentMethod] = useState(0);

    //Função para atualizar o método a ser mostrado
    const handleMethodClick = (index) => setCurrentMethod(index);

    return (
        <div className="m-interactive-methods">
            <div className="m-method-titles">
                {/* Vai mapear pelo array e renderiza um botão para cada título */}
                {methods.map((method, index) => (
                    /* usamos a propriedade key para ajudar o react a identificar cada elemento durante as atualizações
                    ao ser clicado chama a função handleMethodClick que altera o método a ser mostrado*/
                    <button key={index} onClick={() => handleMethodClick(index)}>
                        {method.title}
                    </button>
                ))}
            </div>
            {/* container que mostra o método em que o usuário clicou */}
            <div className="m-methods-body">
                <p>{methods[currentMethod].text}</p>
                <img 
                    src={methods[currentMethod].img} 
                    alt={methods[currentMethod].alt} 
                />
            </div>
        </div>
    )
};

export default InteractiveMethodologies;