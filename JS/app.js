const main = document.querySelector('#main')
let player = null
let battleWindow = null

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

function returnButton() {
    let returnBtn = document.createElement('button')
    returnBtn.id = 'retBtn'
    returnBtn.innerHTML = "Return"
    document.querySelector('#batWind')
    battleWindow.appendChild(returnBtn)
    returnBtn.addEventListener('click', () => {
        battleWindow.innerHTML = null
        playButtons()
    })
}

function playButtons() {
    let batBtn = document.createElement('button')
    batBtn.id = "batBtn"
    batBtn.innerHTML = "Battle"
    battleWindow.appendChild(batBtn)
    batBtn.addEventListener('click', () => {
        battleWindow.innerHTML = null
        attackBtn()
    })
    let pokemonBtn = document.createElement('button')
    pokemonBtn.id = "pokemon"
    pokemonBtn.innerHTML = "Pokemon"
    battleWindow.appendChild(pokemonBtn)
    pokemonBtn.addEventListener('click', () => {
        battleWindow.innerHTML = "You have no other pokemon friends"
        returnButton()
    })
    let bagBtn = document.createElement('button')
    bagBtn.id = "bagBtn"
    bagBtn.innerHTML = "Bag"
    battleWindow.appendChild(bagBtn)
    bagBtn.addEventListener('click', () => {
        battleWindow.innerHTML = "There is no bag to be found...you must have dropped it"
        returnButton()
    })
    let runBtn = document.createElement('button')
    runBtn.id = "batBtn"
    runBtn.innerHTML = "Run Away"
    battleWindow.appendChild(runBtn)
    runBtn.addEventListener('click', () => {
        battleWindow.innerHTML = "Are you sure?"
        let yes = document.createElement('button')
        yes.id = 'yes'
        yes.innerHTML = "Yes"
        battleWindow.appendChild(yes)
        yes.addEventListener('click', () => {
            main.innerHTML = null 
            location.reload()
        })
        let no = document.createElement('button')
        no.id = 'no'
        no.innerHTML = "No"
        battleWindow.appendChild(no)
        no.addEventListener('click', () => {
            battleWindow.innerHTML = null
            playButtons()
        })
    })
}



startBtn.addEventListener('click', () => {
    mainMenu.remove()
    document.body.style.background = 'url(./assets/images/pokemon-battle-background-image.png) center/100% 100% no-repeat'
    const pokemonSelection = document.createElement('div')
    pokemonSelection.id = "pokeSel"
    let h1 = document.createElement('h1')
    h1.innerHTML = "Choose Your Pokemon!"
    let container = document.createElement('div')
    container.id = "container"
    main.appendChild(pokemonSelection)

    function battleMenu(url) {
        pokemonSelection.remove()
        randomEnemy()
        let pokemon = document.createElement('img')
        pokemon.id = "player"
        pokemon.src = url 
        main.appendChild(pokemon)
        battleWindow = document.createElement('div')
        battleWindow.id = "batWind"
        main.appendChild(battleWindow)
    }

    let charmander = document.createElement('img')
    charmander.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" 
    charmander.addEventListener('click', () => {
       battleMenu("https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif")
       playButtons()
       player = new Charmander
    })
    let squirtle = document.createElement('img')
    squirtle.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
    squirtle.addEventListener('click', () => {
       battleMenu("https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif")
       playButtons()
       player = new Squirtle
    })
    let bulbasaur = document.createElement('img')
    bulbasaur.src ="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    bulbasaur.addEventListener('click', () => {
        battleMenu("https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif")
        playButtons()
        player = new Bulbasaur
    })
    container.append(charmander, squirtle, bulbasaur)
    pokemonSelection.append(h1, container)
})

function attackBtn() {
    console.log(player)
    player.attacks.forEach(attack => {
        let attackButton = document.createElement('button')
        attackButton.id = 'attackbtn'
        attackButton.innerHTML = attack.name
        comparePokeType(attack)
        battleWindow.appendChild(attackButton)
    })
}
