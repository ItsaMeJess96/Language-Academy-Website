// componente para mostrar as fases do concurso

//dados das fases do concurso

const phases = [
    {
        title: '1. Inscrição',
        text1: 'Preenche o formulário de inscrição online ou visita a nossa sede',
        text2: 'Escolhe o exame desejado e forneçe as informações necessárias',
        img: 'src/Assets/Icons/exam.png',
        alt: 'caneta e folha de exame'
    },
    {
        title: '2. Preparação',
        text1: 'Utiliza o nosso programa de estudos especializado para te preparares',
        text2: 'Participa em sessões de revisão e tutorias personalizadas',
        img: 'src/Assets/Icons/translator (1).png',
        alt : 'pessoa no computador'
    },
    {
        title: '3. Exame teórico',
        text1: 'Realiza o exame escrito conforme a data agendada',
        text2: 'Demonstra as tuas habilidades linguísticas em leitura, escrita e compreensão oral',
        img: 'src/Assets/Icons/test.png',
        alt: 'folha com exame'
    },
    {
        title: '4. Exame prático (se aplicável)',
        text1: 'Alguns exames incluem uma componente prática',
        text2: 'Esta fase avalia as tuas habilidades de comunicação verbal',
        img: 'src/Assets/Icons/pronunciation.png',
        alt: 'lábios com caixa de fala'
    },
    {
        title: '5. Resultados',
        text1: 'Recebe os resultados após a avaliação',
        text2: 'Os certificados são emitidos para os candidatos bem-sucedidos',
        img: 'src/Assets/Icons/certificate.png',
        alt: 'diploma'
    }
]

// componente para renderizar as fases do concurso

function ContestPhases () {
    return (
        <div className="e-phases">
            <h3>Fases do Concurso</h3>
            {phases.map((phase, index) => (
                <div key={index}>
                    <h4>{phase.title}</h4>
                    <img src={phase.img} alt={phase.alt} />
                    <p>{phase.text1}</p>
                    <p>{phase.text2}</p>
                </div>
            ))}
        </div>
    )
}

export default ContestPhases;