import React, { useState, useEffect } from "react";

const CommentsSlideshow = () => {

    //UseState para armazenar comentários
    const [comments, setComments] = useState([]);

    //UseState para rastrear comentário atual
    const [currentComment, setCurrentComment] = useState(0);

    //useEffect para buscar os comentários quando o componente é montado
    useEffect(() => {
        //fetch e promessas para buscar os dados
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => res.json())
        .then((data) => setComments(data.slice(0, 10)))
        .catch((error) => console.error("Erro aos buscar avaliações", error));
    }, []); //efeito apenas ocorre 1x


    //Funções para navegar entre os comentários
    const nextComment = () => setCurrentComment((prevComment) => (prevComment + 1) % comments.length);
    const previousComment = () => setCurrentComment((prevComment) => (prevComment - 1 + comments.length) % comments.length);

    //renderizar slideshow
    return (
        <div className="h-feedback">
            {/* Navegar para comentário anterior */}
            <i className="fi fi-ss-angle-left" onClick={previousComment}></i>
            {/* Conteúdo do slide */}
            <div className="h-feedback-content">
                <h3>Vê o feedback dos nossos alunos!</h3>
                <div>
                    <p>{comments[currentComment]?.name}</p>
                    <p>{comments[currentComment]?.body}</p>
                </div>
            </div>
            {/* Navegar para proximo comentário */}
            <i className="fi fi-ss-angle-right" onClick={nextComment}></i>
        </div>
    )
}

export default CommentsSlideshow;