const main = document.querySelector('#main')
//const player = document.querySelector('img')
//const player = null

const mainMenu = document.querySelector("div");
mainMenu.id = "mainMenu";
main.append(mainMenu);

const startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
startBtn.id = "startBtn";
mainMenu.appendChild(startBtn);

function setStartBtn () {
    if (window.innerWidth <= 600) {
        startBtn.style.left = window.innerWidth/2 - 105 + "px"
    } else {
        startBtn.style.left = window.innerWidth/2 - 122 + "px"
    }
}

setStartBtn()
window.addEventListener('resize', () => {
    setStartBtn()
})

startBtn.style.bottom = window.innerHeight - 250 + "px"
window.addEventListener('resize', () => {
    startBtn.style.bottom = window.innerHeight - 250 + "px"
})

startBtn.addEventListener('click', () => {
    mainMenu.remove()
    document.body.style.background = 'url(./assets/images/pokemon-battle-background-image.png) center/100% 100% no-repeat'
    const pokemonSelection = document.createElement('div')
    pokemonSelection.id = "pokeSel"
    pokemonSelection.style.background = 'white'
    let h1 = document.createElement('h1')
    h1.innerHTML = "Choose Your Pokemon!"
    let container = document.createElement('div')
    container.id = "container"
    main.appendChild(pokemonSelection)
    let charmander = document.createElement('img')
    charmander.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" 
    charmander.addEventListener('click', () => {
        pokemonSelection.remove()
        randomEnemy()
        let player = document.createElement('img')
        player.id = "player"
        player.src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif" 
        main.appendChild(player)
    })
    let squirtle = document.createElement('img')
    squirtle.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
    squirtle.addEventListener('click', () => {
        pokemonSelection.remove()
        randomEnemy()
        let player = document.createElement('img')
        player.id = "player"
        player.src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif" 
        main.appendChild(player)
    })
    let bulbasaur = document.createElement('img')
    bulbasaur.src ="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    bulbasaur.addEventListener('click', () => {
        pokemonSelection.remove()
        randomEnemy()
        let player = document.createElement('img')
        player.id = "player"
        player.src = "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif" 
        main.appendChild(player)
    })
    container.append(charmander, squirtle, bulbasaur)
    pokemonSelection.append(h1, container)
})

