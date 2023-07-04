/* eslint-disable react/prop-types */

import { chatNo, likeNo } from "../../Icons";
import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";

export function Card(props) {
    return (
        <CardContainer>

            <CardBody >
                <div>
                    <CardHeader top={props.top}>
                        <h2>{props.title}</h2>
                        <TextLimit text={props.text} limit={150} />
                    </CardHeader>

                    <CardFooter>
                        <section>
                            <i>{likeNo}</i>
                            <span>{props.likes?.length}</span>
                        </section>
                        <section>
                            <i>{chatNo}</i>
                            <span>{props.coments?.length}</span>
                        </section>
                    </CardFooter>
                </div>
                <img src={props.banner} alt="Imagem da Notícia" />
            </CardBody>

        </CardContainer>
    )
}