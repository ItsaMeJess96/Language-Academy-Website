/* componente que renderiza a página de política de privacidade
As informações contidas nesta páginas têm caráter puramente ilustrativo e foram incorporadas para enriquecer a experiência do projeto. 
Elas não possuem validade legal ou relevância em um contexto do mundo real */

import '../Styles/Policies.css';

function privacyPolicy() {
    return (
        <div className="privacy-policy">
            <h3>Política de Privacidade</h3>
            <p>
                Bem-vindo à Culturália, a sua academia de línguas online!
                A nossa prioridade é proteger a sua privacidade enquanto fornece uma experiência educacional de alta qualidade.
                Esta Política de Privacidade descreve como recolhemos, utilizamos e protegemos as suas informações enquanto utiliza os nossos serviços.
            </p>
            <ol>
                <li>Informações Recolhidas:</li>
                <ul>
                    <li>
                        Informações Pessoais: Para fornecer cursos e exames, podemos recolher informações como nome, endereço de e-mail, e informações de contacto.
                    </li>
                    <li>
                        Informações de Pagamento: Ao adquirir cursos ou exames, recolhemos informações financeiras necessárias para processar as transações.
                    </li>
                </ul>
                <li>Uso das Informações:</li>
                <ul>
                    <li>
                        Utilizamos as informações para personalizar a sua experiência, processar transações e melhorar os nossos serviços.
                    </li>
                    <li>
                        As informações pessoais não são partilhadas com terceiros, a menos que necessário para a prestação de serviços ou cumprimento de requisitos legais.
                    </li>
                </ul>
                <li>Segurança:</li>
                <ul>
                    <li>
                        Implementamos medidas de segurança para proteger as suas informações contra acesso não autorizado, alteração ou divulgação.
                    </li>
                </ul>
                <li>Cookies:</li>
                <ul>
                    <li>
                        Utilizamos cookies para melhorar a funcionalidade do site. Pode ajustar as configurações do navegador para recusar cookies, mas isso pode afetar a sua experiência.
                    </li>
                </ul>
                <li>Alterações na Política de Privacidade:</li>
                <ul>
                    <li>
                        Reservamo-nos o direito de modificar esta política. Recomendamos verificar regularmente para ficar informado sobre as atualizações.
                    </li>
                </ul>
            </ol>
        </div>
    )
}

export default privacyPolicy;