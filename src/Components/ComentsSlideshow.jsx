/* Componente que renderiza comentários fictícios a partir do json place holder
Apenas mostra um comentário de cada vez, o usuário terá de carregar nos icons de navegação para ver os restantes comentários */

import React, { useState, useEffect } from "react";

const CommentsSlideshow = () => {

    //UseState para armazenar comentários
    const [comments, setComments] = useState([]);

    //UseState para rastrear comentário atual a ser exibido
    const [currentComment, setCurrentComment] = useState(0);

    //useEffect para buscar os comentários quando o componente é montado
    useEffect(() => {
        //fetch e promessas para buscar os dados, primeiro fetch vai fazer a requisição HTTP para a API
        fetch('https://jsonplaceholder.typicode.com/comments')
            //converte a resposta em formato JSON
            .then((res) => res.json())
            //recebe os dados convertidos em JSON e atualiza o estado do componente com esses dados, slice é usado para que apenas mostre os 10 primeiros
            .then((data) => setComments(data.slice(0, 10))) 
            //catch vai tratar qualquer erro que ocorra e imprime uma mensagem de erro na consola
            .catch((error) => console.error("Erro aos buscar avaliações", error));
    }, []); //efeito apenas ocorre 1x


    //Funções para navegar entre os comentários, primeiro para o próximo comentário, depois para o comentário anterior
    const nextComment = () => setCurrentComment((prevComment) => (prevComment + 1) % comments.length);
    const previousComment = () => setCurrentComment((prevComment) => (prevComment - 1 + comments.length) % comments.length);

    //renderizar o componente 
    return (
        <div className="h-feedback">
            {/* Navegar para comentário anterior */}
            <i className="fi fi-ss-angle-left arrow-left" onClick={previousComment}></i>
            {/* Conteúdo do slide */}
            <div className="h-feedback-content">
                <h3>Vê o feedback dos nossos alunos!</h3>
                <div>
                    <p>{comments[currentComment]?.name}</p>
                    <p>{comments[currentComment]?.body}</p>
                </div>
            </div>
            {/* Navegar para proximo comentário */}
            <i className="fi fi-ss-angle-right arrow-right" onClick={nextComment}></i>
        </div>
    )
}

export default CommentsSlideshow;