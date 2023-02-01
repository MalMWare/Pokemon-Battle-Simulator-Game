//global variables
const main = document.querySelector('#main')
let player = null
let battleWindow = null

//creation of main menu
const mainMenu = document.querySelector("div");
mainMenu.id = "mainMenu";
main.append(mainMenu);

//creation of start game button and function
const startBtn = document.createElement("button");
startBtn.innerText = "Start Game";
startBtn.id = "start-btn";
mainMenu.appendChild(startBtn);

function setStartBtn () {
    if (window.innerWidth <= 600) {
        startBtn.style.left = window.innerWidth/2 - 105 + "px"
    } else {
        startBtn.style.left = window.innerWidth/2 - 122 + "px"
    }
}

//function for the start button to resize to different sized screens 
setStartBtn()
window.addEventListener('resize', () => {
    setStartBtn()
})

startBtn.style.bottom = window.innerHeight - 250 + "px"
window.addEventListener('resize', () => {
    startBtn.style.bottom = window.innerHeight - 250 + "px"
}) 

//return button function
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

//creating play buttons
function playButtons() {

    //creation of battle button
    let batBtn = document.createElement('button')
    batBtn.id = "bat-btn"
    batBtn.innerHTML = "Battle"
    battleWindow.appendChild(batBtn)
    batBtn.addEventListener('click', () => {
        battleWindow.innerHTML = null
        attackBtn()
    })

    //creation of pokemon button
    let pokemonBtn = document.createElement('button')
    pokemonBtn.id = "pokemon"
    pokemonBtn.innerHTML = "Pokemon"
    battleWindow.appendChild(pokemonBtn)
    pokemonBtn.addEventListener('click', () => {
        battleWindow.innerHTML = "You have no other pokemon friends"
        returnButton()
    })

    //creation of bag button
    let bagBtn = document.createElement('button')
    bagBtn.id = "bag-btn"
    bagBtn.innerHTML = "Bag"
    battleWindow.appendChild(bagBtn)
    bagBtn.addEventListener('click', () => {
        battleWindow.innerHTML = "There is no bag to be found...you must have dropped it"
        returnButton()
    })

    //creation of run away button
    let runBtn = document.createElement('button')
    runBtn.id = "run-btn"
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

//event listener for after you click the start game button
startBtn.addEventListener('click', () => {
    mainMenu.remove()
    document.body.style.background = 'url(./assets/images/pokemon-battle-background-image.png) center/100% 100% no-repeat'

    //background music added to button listener so that it works on chrome
    let backgroundMusic = document.createElement('audio')
    backgroundMusic.src = "./assets/Audio/Eterna-Forest.mp3"
    backgroundMusic.type = "audio/mpeg"
    backgroundMusic.loop = true
    backgroundMusic.autoplay = true
    backgroundMusic.load()
    main.appendChild(backgroundMusic)
 
    //creation of pokemon selection div
    const pokemonSelection = document.createElement('div')
    pokemonSelection.id = "poke-sel"
    let h1 = document.createElement('h1')
    h1.innerHTML = "Choose Your Pokemon!"
    let container = document.createElement('div')
    container.id = "container"
    main.appendChild(pokemonSelection)

    //function for the creation of a manu after the pokemon selection div
    function battleMenu(url) {
        pokemonSelection.remove()
        randomEnemy()
        let pokemon = document.createElement('img')
        pokemon.id = "player"
        pokemon.src = url 
        main.appendChild(pokemon)
        battleWindow = document.createElement('div')
        battleWindow.id = "bat-wind"
        main.appendChild(battleWindow)
    }

    //function for text div
    function infoText() {
        let text = document.createElement('div')
        text.id = 'text'
        main.appendChild(text)
    }

    //creation of player's pokemon choice
    let charmander = document.createElement('img')
    charmander.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" 
    charmander.addEventListener('click', () => {
        player = new Charmander
        battleMenu(player.getImage())
        playButtons()
        compareSpeed()
        infoText()
    })

    //creation of player's pokemon choice
    let squirtle = document.createElement('img')
    squirtle.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
    squirtle.addEventListener('click', () => {
    player = new Squirtle
       battleMenu(player.getImage())
       playButtons()
       compareSpeed()
       infoText()
    })

    //creation of player's pokemon choice
    let bulbasaur = document.createElement('img')
    bulbasaur.src ="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    bulbasaur.addEventListener('click', () => {
        player = new Bulbasaur
        battleMenu(player.getImage())
        playButtons()
        compareSpeed()
        infoText()
    })

    container.append(charmander, squirtle, bulbasaur)
    pokemonSelection.append(h1, container)
})

//creating a function to make the attack buttons
function attackBtn() {
    player.attacks.forEach(attack => {
        let attackButton = document.createElement('button')
        attackButton.id = 'attack-btn'
        attackButton.innerHTML = attack.name
        battleWindow.appendChild(attackButton)
        attackButton.addEventListener('click', () => {
            attackFunc(attack)
            document.querySelector('#batWind').innerHTML = null
            playButtons()
        })
    })
}

//attack function for the pokemon's battle moves and screen text
async function attackFunc(attack) {
    for (let pokemon of speedOrder) {
        if (pokemon.hp > 0) {

        if (pokemon === player) {
            let damage = comparePokeType(attack, enemy)
            enemy.hp -= damage
            let text = document.querySelector('#text')
            await new Promise(res => setTimeout(res, 1000)).then(() => {
                text.innerHTML = `${player.name} attacks ${enemy.name} with ${attack.name} for ${damage}`
            })
            console.log(enemy.hp)
        } else {
            let enemyAttack = pokemon.attack()
            let damage = comparePokeType(enemyAttack, player)
            player.hp -= damage
            let text = document.querySelector('#text')
            await new Promise(res => setTimeout(res, 1000)).then(() => {
                text.innerHTML = `${enemy.name} attacks ${player.name} with ${enemyAttack.name} for ${damage}`
            })
            console.log(player.hp)
        }}
    }
    
    //win and lose function
    if (enemy.hp <= 0) {
        console.log("player wins")
        let text = document.querySelector('#text')
            await new Promise(res => setTimeout(res, 1000)).then(() => {text.innerHTML = `You Win!`})
            await new Promise(res => setTimeout(res, 1000)).then(() => {location.reload()})
    } else if (player.hp <= 0) {
        let text = document.querySelector('#text')
            await new Promise(res => setTimeout(res, 1000)).then(() => {text.innerHTML = `You Lose!`})
            await new Promise(res => setTimeout(res, 1000)).then(() => {location.reload()})
        console.log('enemy wins')
    }
} 