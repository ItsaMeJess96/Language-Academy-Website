/* componente que renderiza a página de políticas de cookies
As informações contidas nesta páginas têm caráter puramente ilustrativo e foram incorporadas para enriquecer a experiência do projeto. 
Elas não possuem validade legal ou relevância em um contexto do mundo real */

function cookiesPolicy() {
    return (
        <div className="cookies-policy">
            <h3>Política de cookies</h3>
            <ol>
                <li>O que são Cookies:</li>
                <ul>
                    <li>
                        Utilizamos cookies para melhorar a sua experiência de navegação e personalizar o conteúdo.
                    </li>
                </ul>
                <li>Tipos de Cookies Utilizados:</li>
                <ul>
                    <li>
                        Cookies Necessários: Essenciais para a funcionalidade do site.
                    </li>
                    <li>
                        Cookies de Desempenho: Analisam a forma como os visitantes interagem com o site.
                    </li>
                    <li>
                        Cookies de Funcionalidade: Personalizam a experiência do utilizador.
                    </li>
                </ul>
                <li>Controlo de Cookies:</li>
                <ul>
                    <li>
                        Pode gerir as suas preferências de cookies nas configurações do navegador.
                    </li>
                </ul>
                <li>Aceitação dos Termos:</li>
                <ul>
                    <li>
                        Ao continuar a utilizar o site Culturália, concorda com o uso de cookies e com os termos desta política.
                    </li>
                </ul>
            </ol>
        </div>
    )
}

export default cookiesPolicy;