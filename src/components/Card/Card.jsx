/* eslint-disable react/prop-types */

import { chatNo, likeNo } from "../../Icons";
import { CardBody, CardContainer, CardFooter } from "./CardStyled";

export function Card(props) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <img src={props.banner} alt="Imagem da Notícia" />
            </CardBody>

            <CardFooter>
                <div>
                    <i>{likeNo}</i>
                    <span>{props.likes}</span>
                </div>
                <div>
                    <i>{chatNo}</i>
                    <span>{props.coments}</span>
                </div>
            </CardFooter>
        </CardContainer>
    )
}