import { Card } from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { news } from '../../Data'

export default function Home() {
    return (
        <>
            <Navbar />
            {news.map((item, i) => <Card key={i} news={item} />)}
        </>
    )
}