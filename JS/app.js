const main = document.querySelector('#main')

const mainMenu = document.querySelector("div");
mainMenu.id = "mainMenu";
main.append(mainMenu);

const startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
startBtn.id = "startBtn";
mainMenu.appendChild(startBtn);

startBtn.style.left = window.innerWidth/2 - 122 + "px"
window.addEventListener('resize', () => {
    startBtn.style.left = window.innerWidth/2 - 122 + "px"
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
    main.appendChild(pokemonSelection)
    let charmander = document.createElement('img')
    charmander.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" 
    let squirtle = document.createElement('img')
    squirtle.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
    let bulbasaur = document.createElement('img')
    bulbasaur.src ="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    pokemonSelection.append(charmander, squirtle, bulbasaur)
})


