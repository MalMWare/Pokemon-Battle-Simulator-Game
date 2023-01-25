//Classes for pokemon 
class Charmander {
    constructor(){
        this.name = 'Charmander';
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

    attack() {
        let num = Math.floor(Math.random() * 2) +1
        if (num === 1) {
            return this.attacks[0]
        } else {
            return this.attacks[1]
        }
    }
}

class Squirtle {
    constructor(){
        this.name = 'Squirtle';
        this.hp = 44;
        this.speed = 43;
        this.type = "water"
        this.attacks = [
            {   
                name: 'tackle',
                damage: 10,
                type: 'normal'
            },
            {   
                name: 'water gun',
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
    attack() {
        let num = Math.floor(Math.random() * 2) +1
        if (num === 1) {
            return this.attacks[0]
        } else {
            return this.attacks[1]
        }
    }
}

class Bulbasaur {
    constructor(){
        this.name = 'Bulbasaur';
        this.hp = 45;
        this.speed = 45;
        this.type = "grass"
        this.attacks = [
            {   
                name : 'tackle',
                damage: 10,
                type: 'normal'
            },
            {   
                name: 'vine whip',
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
    attack() {
        let num = Math.floor(Math.random() * 2) +1
        if (num === 1) {
            return this.attacks[0]
        } else {
            return this.attacks[1]
        }
    }
}

//global variables
let enemy = null
let speedOrder = []

//random enemy generator
function randomEnemy() {
    let num = Math.floor(Math.random() * 99) +1
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
    //enemy = randomEnemy()
    if(player.speed >= enemy.speed) {
        //enemy = randomEnemy()
        speedOrder.push(player)
        speedOrder.push(enemy)
    } else {
        //enemy = randomEnemy()
        speedOrder.push(enemy)
        speedOrder.push(player)
    }
}

//poketype function
function comparePokeType(attack, target) {
    if (attack.type === 'fire' && target.type === 'grass') {
        return attack.damage * 2
    } else if (attack.type === 'fire' && target.type === 'water') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'water' && target.type === 'fire') {
        return attack.damage * 2
    } else if (attack.type === 'water' && target.type === 'grass') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'grass' && target.type === 'water') {
        return attack.damage * 2
    } else if (attack.type === 'grass' && target.type === 'fire') {
        return Math.floor(attack.damage / 2)
    } else {
        return attack.damage
    }
} 

//pokemon battle function
