/* componente que renderiza a página de aviso legal
As informações contidas nesta páginas têm caráter puramente ilustrativo e foram incorporadas para enriquecer a experiência do projeto. 
Elas não possuem validade legal ou relevância em um contexto do mundo real */

import '../Styles/Policies.css';

function legalNotice() {
    return (
        <div className="legal-notice">
            <h3>Aviso Legal</h3>
            <p>
                O uso do site Culturália está sujeito aos seguintes termos e condições:
            </p>
            <ol>
                <li>Propriedade Intelectual:</li>
                <ul>
                    <li>
                        Todos os materiais no site são propriedade exclusiva da Culturália e estão protegidos por leis de direitos autorais.
                    </li>
                </ul>
                <li>Uso Permitido:</li>
                <ul>
                    <li>
                        O conteúdo do site destina-se exclusivamente a fins educacionais. Qualquer uso não autorizado é proibido.
                    </li>
                </ul>
                <li>Isenção de Respondabilidade:</li>
                <ul>
                    <li>
                        Apesar dos esforços para garantir a precisão das informações, não garantimos a sua exatidão. O uso das informações é por sua conta e risco.
                    </li>
                </ul>
            </ol>
        </div>
    )
}

export default legalNotice;