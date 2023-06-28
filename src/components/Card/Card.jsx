/* eslint-disable react/prop-types */

import { chatNo, likeNo } from "../../Icons";

export function Card({news}) {
    console.log(news)
    return (
        <section>
            <h2>{news.title}</h2>
            <p>{news.text}</p>
            <img src={news.banner} alt="Imagem da Notícia" />
            <i>{likeNo}</i>
            <span>{news.likes}</span>
            <i>{chatNo}</i>
            <span>{news.comment}</span>
        </section>
    )
}