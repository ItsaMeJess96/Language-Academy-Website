// Componente Tabela sobre exames

// Dados a serem usados na tabela: nome do exame, níveis, data e requisitos (caso não tenha nível, data ou requisitos, colocar info nos requisitos)

const examsData = [
    {
        exam: 'Inglês - Diploma in English as a Foreign Language',
        level: 'Básico, Intermédio e Avançado',
        date: '15 de março 2024',
        requirements: 'Básico e Intermédio disponível a estudantes de todos os níveis. Avançado apenas para portadores de curso intermédio ou avançado.'
    },
    {
        exam: "Francês - Diplôme d'Études en Langue Française",
        level: 'Básico, Intermédio e Avançado',
        date: '10 de abril 2024',
        requirements: 'Básico e Intermédio disponível a estudantes de todos os níveis. Avançado apenas para portadores de curso intermédio ou avançado.'
    },
    {
        exam: "Espanhol - Diplomas de Español como Lengua Extranjera",
        level: 'Básico, Intermédio e Avançado',
        date: '5 de maio 2024',
        requirements: 'Básico e Intermédio disponível a estudantes de todos os níveis. Avançado apenas para portadores de curso intermédio ou avançado.'
    },
    {
        exam: "Italiano - Diploma di Italiano come Lingua Straniera",
        level: 'Básico, Intermédio e Avançado',
        date: '20 de junho 2024',
        requirements: 'Básico e Intermédio disponível a estudantes de todos os níveis. Avançado apenas para portadores de curso intermédio ou avançado.'
    },
    {
        exam: "Alemão - Diplom in Deutsch als Fremdsprache",
        level: 'Básico, Intermédio e Avançado',
        date: '8 de julho 2024',
        requirements: 'Básico e Intermédio disponível a estudantes de todos os níveis. Avançado apenas para portadores de curso intermédio ou avançado.'
    },
    {
        exam: 'Português para estrangeiros',
        requirements: 'Entre em contacto para informações específicas sobre datas e requisitos',
    },
    {
        exam: 'Chinês',
        level: 'Básico',
        requirements: 'Entre em contacto para informações específicas sobre datas e requisitos'
    },
    {
        exam: 'Japonês',
        level: 'Básico',
        requirements: 'Entre em contacto para informações específicas sobre datas e requisitos'
    },
    {
        exam: 'Indi',
        level: 'Básico',
        requirements: 'Entre em contacto para informações específicas sobre datas e requisitos'
    },
    {
        exam: 'Árabe',
        level: 'Básico',
        requirements: 'Entre em contacto para informações específicas sobre datas e requisitos'
    },
    {
        exam: 'Russo',
        level: 'Básico',
        requirements: 'Entre em contacto para informações específicas sobre datas e requisitos'
    }
]

// componente que irá gerar a tabela:

function ExamsTable() {
    return (
        <table className="e-table">
            <thead>
                <tr>
                    <th>Exame</th>
                    <th>Níveis</th>
                    <th>Prox. Data</th>
                    <th>Requisitos</th>
                </tr>
            </thead>
            <tbody>
                {/* iterar sobre o array para criar tabela */}
                {examsData.map((exam, index) => (
                    <tr key={index}>
                        {/* célula para o nome do exame */}
                        <td>{exam.exam}</td>
                        {/* Célula para nível do exame
                            veririca se é a primeira linha ou se o nível é diferente do anterior */}
                        { (index === 0 || exam.level !== examsData[index-1].level ? (
                            // se for verdadeiro vai criar uma célula e aplicar rowSpan
                            <td rowSpan={countEqualLevelRows(examsData, index)}>{exam.level}</td>
                        ) : null)} 
                        {/* célula para a proxima data*/}
                        <td>{exam.date}</td>
                        {/* célula para requisitos
                            segue a mesma lógica que a linha para o nível mas aplicada aos requisitos */}
                        {index === 0 || exam.requirements !== examsData[index-1].requirements ? (
                                <td rowSpan={countEqualRequirementsRows(examsData, index)}>{exam.requirements}</td>
                        ) : null} 
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


// função para contar linhas da tabela com level igual:
function countEqualLevelRows(data, currentIndex) {
    // iniciar em 1 para contar com a linha atual
    let count = 1;
    // percorrer os indice atual e os próximos
    for (let i = currentIndex + 1; i < data.length; i++) {
        // se o próximo for igual ao atual, incrementa o contador, caso contrário para de contar
        if (data[i].level === data[currentIndex].level) {
            count++;
        } else {
            break;
        }
    }
    return count
}

// função para contar linhas da tabela com requerimentos iguais
// semelhante à anterior, apenas aplicar para requirements
function countEqualRequirementsRows(data, currentIndex) {
    let count = 1;
    for (let i = currentIndex + 1; i < data.length; i++) {
        if (data[i].requirements === data[currentIndex].requirements) {
            count++;
        } else {
            break;
        }
    }
    return count
}



export default ExamsTable;
