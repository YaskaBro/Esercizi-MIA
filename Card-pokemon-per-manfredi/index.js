const $contenitore = document.querySelector(".container")
const $form = document.querySelector("#form")

async function fetchPKM(pokemon) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (res.ok) {
            const dataPKM = await res.json()
            console.log(dataPKM)
            return dataPKM
        } else {
            throw new Error("Errore nel fetch");
        }
    } catch (error) {
        console.error(error)
    }
}

async function render() {
    try {
        const $pokemon = document.querySelector("#pokemon").value
        console.log($pokemon)
        const datiPKM = await fetchPKM($pokemon)
        $contenitore.innerHTML += `
        <div>
            <h3> Name: ${datiPKM.name}</h3>
            <img src= ${datiPKM.sprites.front_default}>
        </div>`
    } catch (error) {
        console.error(error)
    }
}

$form.addEventListener("submit", (event) => {
    event.preventDefault()
    render()
})