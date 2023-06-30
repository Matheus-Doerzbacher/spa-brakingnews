/* eslint-disable react/prop-types */

import { chatNo, likeNo } from "../../Icons";
import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter } from "./CardStyled";

export function Card(props) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{props.title}</h2>
                    <img src={props.banner} alt="Imagem da Notícia" />
                </div>
                <TextLimit text={props.text} limit={150}/>
            </CardBody>

            <CardFooter>
                <div>
                    <i>{likeNo}</i>
                    <span>{props.likes?.length}</span>
                </div>
                <div>
                    <i>{chatNo}</i>
                    <span>{props.coments?.length}</span>
                </div>
            </CardFooter>
        </CardContainer>
    )
}