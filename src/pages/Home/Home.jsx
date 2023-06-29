import { Card } from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { news } from '../../Data'
import { HomeBody } from "./HomeStyled";

export default function Home() {
    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map((item, i) => <Card key={i} news={item} />)}
            </HomeBody>
        </>
    )
}