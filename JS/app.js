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
    bulbasaur.createBulba()
})


