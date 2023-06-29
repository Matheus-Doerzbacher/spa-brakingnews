import { useState } from "react";
import { Card } from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { getAllNews } from "../../services/newsServices";
import { HomeBody } from "./HomeStyled";

export default function Home() {
    const [news, setNews] = useState([])    
    
    async function FindAllNews(){
        const response = await getAllNews()
        setNews(response.data.results)
    }

    FindAllNews()

    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map(item => 
                    <Card 
                        key={item.id} 
                        title={item.title} 
                        text={item.text}
                        banner={item.banner}
                        createAt={item.createAt}
                        likes={item.likes.length}
                        coments={item.coments.length}
                    />)}
            </HomeBody>
        </>
    )
}