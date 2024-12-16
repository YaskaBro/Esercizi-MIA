import Card from "./components/Card"

const cards = [
    {
        image: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "ciao",
        text: "questo non è un paragrafo"
    },
    {
        image: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "ciao",
        text: "questo non è un paragrafo"
    },
    {
        image: "https://images.pexels.com/photos/14092973/pexels-photo-14092973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "ciao",
        text: "questo non è un paragrafo"
    },
    {
        image: "https://images.pexels.com/photos/17217435/pexels-photo-17217435/free-photo-of-acqua-inverno-montagna-ghiaccio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "ciao",
        text: "questo non è un paragrafo"
    },
    {
        image: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "ciao",
        text: "questo non è un paragrafo"
    },
    {
        image: "https://images.pexels.com/photos/8905097/pexels-photo-8905097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        title: "ciao",
        text: "questo non è un paragrafo"
    },
] 
const App = () => {
    return (
        <>
            <Card image={cards[0].image} title={cards[0].title} text={cards[0].text}/>
            <Card image={cards[1].image} title={cards[1].title} text={cards[1].text}/>
            <Card image={cards[2].image} title={cards[2].title} text={cards[2].text}/>
            <Card image={cards[3].image} title={cards[3].title} text={cards[3].text}/>
            <Card image={cards[4].image} title={cards[4].title} text={cards[4].text}/>
            <Card image={cards[5].image} title={cards[5].title} text={cards[5].text}/>
        </>
    )
}

export default App
