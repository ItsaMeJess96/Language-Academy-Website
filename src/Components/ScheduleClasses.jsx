// Componente que renderiza a tabela com horário das aulas

// Dados das aulas a serem usados (1º tempo, 2º aulas de segunda a sexta):
const classesData = [
    {
        time: '08h30 - 10h00',
        classes: ['Inglês básico', 'Português para estrangeiros', 'Russo básico', 'Espanhol intermédio', 'Árabe intermédio']
    },
    {
        time: '10h30 - 12h30',
        classes: ['Francês básico', 'Chinês básico', 'Inglês intermédio', 'Português para estrangeiros', 'Russo intermédio']
    },
    {
        time: '14h00 - 16h00',
        classes: ['Espanhol básico', 'Japonês básico', 'Francês intermédio', 'Chinês intermédio', 'Inglês avançado']
    },
    {
        time: '16h30 - 18h30',
        classes: ['Italiano básico', 'Indi básico', 'Alemão intermédio', 'Japonês intermédio', 'Francês avançado']
    },
    {
        time: '19h00 - 21h00',
        classes: ['Alemão básico', 'Árabe básico', 'Italiano intermédio', 'Inidi intermédio', 'Alemão avançado']
    }
]

// renderizar a gerar tabela:

function ScheduleClasses() {
    return (
        <table className="m-classes">
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
                {/* iterar sobre o array para criar as filas da tabela */}
                {classesData.map((row, index) => (
                    // usamos a propriedade key para ajudar o react a identificar cada elemento durante as atualizações
                    <tr key={index}>
                        <th>{row.time}</th>
                        {/* Vai mapear pelo array classes dentro dos dados e renderiza um bloco para cada elemento */}
                        {row.classes.map((subject, i) => (
                            <td key={i}>{subject}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ScheduleClasses;