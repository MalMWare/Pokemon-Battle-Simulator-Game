//Classes for pokemon 
class Charmander {
    constructor(name){
        this.name = name;
        this.hp = 39;
        this.speed = 65;
        this.type = "fire"
        this.attacks = [
            {
                name: 'scratch',
                damage: 10,
                type: 'normal'
            },
            {
                name: 'ember',
                damage: 15,
                type: 'fire'
            }
        ]
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
        this.attacks = [
            {   name: 'tackle',
                damage: 10,
                type: 'normal'
            },
            {   name: 'water gun',
                damage: 15,
                type: 'water'
            }
        ]
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
        this.attacks = [
            {   name : 'tackle',
                damage: 10,
                type: 'normal'
            },
            {   name: 'vine whip',
                damage: 15,
                type: 'grass'
            }
        ]
    }
    createEnemy() {
        const bulba = document.createElement("img")
        bulba.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
        bulba.id = "bulba"
        main.append(bulba)
    }
}

//global variables
let enemy = null
let speedOrder = []

//random enemy generator
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

//speed comparison function
function compareSpeed() {
    if(player.speed >= enemy.speed) {
        speedOrder.push(player)
        speedOrder.push(enemy)
    } else {
        speedOrder.push(enemy)
        speedOrder.push(player)
    }
}

//poketype function
function comparePokeType(attack) {
    if(attack.type === 'fire' && enemy.type === 'grass') {
        return attack.damage * 2
    } else if (attack.type === 'fire' && enemy.type === 'water') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'water' && enemy.type === 'fire') {
        return attack.damage * 2
    } else if (attack.type === 'water' && enemy.type === 'grass') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'grass' && enemy.type === 'water') {
        return attack.damage * 2
    } else if (attack.type === 'grass' && enemy.type === 'fire') {
        return Math.floor(attack.damage / 2)
    }
} 

