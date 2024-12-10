const $contenitore = document.querySelector(".container")
const $pokemonScelto = document.querySelector("#form")

async function fetchPKM() {
    try {   
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${$pokemonScelto}`)
        const dataPKMtutto = await res.json()
        console.log(dataPKMtutto.results)
        const dataPKM = dataPKMtutto.results
    } catch (error) {
        console.error(error)
    }
    
}
fetchPKM()

