/* eslint-disable react/prop-types */

import { chatNo, likeNo } from "../../Icons";
import { CardBody, CardContainer, CardFooter } from "./CardStyled";

export function Card({ news }) {
    console.log(news)
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{news.title}</h2>
                    <p>{news.text}</p>
                </div>
                <img src={news.banner} alt="Imagem da Notícia" />
            </CardBody>

            <CardFooter>
                <div>
                    <i>{likeNo}</i>
                    <span>{news.likes}</span>
                </div>
                <div>
                    <i>{chatNo}</i>
                    <span>{news.comment}</span>
                </div>
            </CardFooter>
        </CardContainer>
    )
}