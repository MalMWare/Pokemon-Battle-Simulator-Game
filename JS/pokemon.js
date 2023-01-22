class Charmander {
    constructor(name){
        this.name = name;
        this.hp = 39;
        this.speed = 65;
        this.type = "fire"
    }
    createEnemy() {
        const char = document.createElement("img")
        char.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
        char.id = "char"
        main.append(char)
    }

}

class Squirtle {
    constructor(name){
        this.name = name;
        this.hp = 44;
        this.speed = 43;
        this.type = "water"
    }
    createEnemy() {
        const squirt = document.createElement("img")
        squirt.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
        squirt.id = "squirt"
        main.append(squirt)
    }
}

class Bulbasaur {
    constructor(name){
        this.name = name;
        this.hp = 45;
        this.speed = 45;
        this.type = "grass"
    }
    createEnemy() {
        const bulba = document.createElement("img")
        bulba.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
        bulba.id = "bulba"
        main.append(bulba)
    }
}

let enemy = null

function randomEnemy() {
    let num = Math.floor(Math.random() * 100)
    if (num <= 33) {
        enemy = new Charmander
    } else if (num <= 66) {
        enemy = new Squirtle
    } else {
        enemy = new Bulbasaur
    }
    enemy.createEnemy()
}
