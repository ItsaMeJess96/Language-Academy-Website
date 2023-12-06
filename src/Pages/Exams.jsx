
import ExamsTable from "../Components/ExamsTable";

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
        </div>
    )
}

export default Exams;