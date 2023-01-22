const main = document.querySelector('#main')
let player = null
let battleWindow = null
let container  = null

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

function playButtons() {
    let batBtn = document.createElement('button')
    batBtn.id = "batBtn"
    batBtn.innerHTML = "Battle"
    battleWindow.appendChild(batBtn)
    let pokemonBtn = document.createElement('button')
    pokemonBtn.id = "pokemon"
    pokemonBtn.innerHTML = "Pokemon"
    battleWindow.appendChild(pokemonBtn)
    let bagBtn = document.createElement('button')
    bagBtn.id = "bagBtn"
    bagBtn.innerHTML = "Bag"
    battleWindow.appendChild(bagBtn)
    let runBtn = document.createElement('button')
    runBtn.id = "batBtn"
    runBtn.innerHTML = "Run Away"
    battleWindow.appendChild(runBtn)
}

startBtn.addEventListener('click', () => {
    mainMenu.remove()
    document.body.style.background = 'url(./assets/images/pokemon-battle-background-image.png) center/100% 100% no-repeat'
    const pokemonSelection = document.createElement('div')
    pokemonSelection.id = "pokeSel"
    let h1 = document.createElement('h1')
    h1.innerHTML = "Choose Your Pokemon!"
    container = document.createElement('div')
    container.id = "container"
    main.appendChild(pokemonSelection)

    function battleMenu(url) {
        pokemonSelection.remove()
        randomEnemy()
        player = document.createElement('img')
        player.id = "player"
        player.src = url 
        main.appendChild(player)
        battleWindow = document.createElement('div')
        battleWindow.id = "batWind"
        main.appendChild(battleWindow)
    }

    let charmander = document.createElement('img')
    charmander.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" 
    charmander.addEventListener('click', () => {
       battleMenu("https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif")
       playButtons()

    })
    let squirtle = document.createElement('img')
    squirtle.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
    squirtle.addEventListener('click', () => {
       battleMenu("https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif")
       playButtons()
    })
    let bulbasaur = document.createElement('img')
    bulbasaur.src ="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    bulbasaur.addEventListener('click', () => {
        battleMenu("https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif")
        playButtons()
    })
    container.append(charmander, squirtle, bulbasaur)
    pokemonSelection.append(h1, container)
})

