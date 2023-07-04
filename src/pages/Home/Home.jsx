import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { getAllNews, getTopNew } from "../../services/newsServices";
import { HomeBody, HomeHeader } from "./HomeStyled";

export default function Home() {
    const [news, setNews] = useState([])
    const [topNews, setTopNews] = useState({})

    async function FindTopNews() {
        const newsResponse = await getAllNews()
        setNews(newsResponse.data.results)

        const topNewResponde = await getTopNew()
        setTopNews(topNewResponde.data.news)
    }

    useEffect(() => {
        FindTopNews()
    }, [])

    return (
        <>
            <HomeHeader>
                <Card
                    top={true}
                    key={topNews.id}
                    title={topNews.title}
                    text={topNews.text}
                    banner={topNews.banner}
                    createAt={topNews.createAt}
                    likes={topNews.likes}
                    coments={topNews.coments}
                />
            </HomeHeader>
            <HomeBody>
                {news.map(item =>
                    <Card
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        banner={item.banner}
                        createAt={item.createAt}
                        likes={item.likes}
                        coments={item.coments}
                    />)}
            </HomeBody>
        </>
    )
}