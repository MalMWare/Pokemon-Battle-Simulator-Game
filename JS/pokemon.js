//Class for Charmander 
class Charmander {
    constructor(){
        this.name = 'Charmander';
        this.hp = 39;
        this.speed = 65;
        this.type = "fire"
        this.attacks = [
            {
                name: 'Scratch',
                damage: 10,
                type: 'normal'
            },
            {
                name: 'Ember',
                damage: 15,
                type: 'fire'
            },
            {
                name: 'Fire Fang',
                damage: 20,
                type: 'fire'
            },
            {
                name: 'Smokescreen',
                damage: 30,
                type: 'normal'
            }
        ]
    }

    //creation of enemy image
    createEnemy() {
        const char = document.createElement("img")
        char.src = this.getEnemyImage()
        char.id = "char"
        main.append(char)
    }

    //attack function for which attack will be done by the enemy 
    attack() {
        let num = Math.floor(Math.random() * 4) +1
        if (num === 1) {
            return this.attacks[0]
        } else if (num === 2) {
            return this.attacks[1]
        } else if (num === 3) {
            return this.attacks[2]
        } else {
            return this.attacks[3]
        }
    }

    //get image for player and possibility of shiny pokemon
    getImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif"
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/back-shiny/charmander.gif" 
        }
    }

    //get enemy image and possibility of shiny pokemon
    getEnemyImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" 
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/shiny/charmander.gif" 
        }
    }
}

//Class for Squirtle
class Squirtle {
    constructor(){
        this.name = 'Squirtle';
        this.hp = 44;
        this.speed = 43;
        this.type = "water"
        this.attacks = [
            {   
                name: 'Tackle',
                damage: 10,
                type: 'normal'
            },
            {   
                name: 'Water Gun',
                damage: 15,
                type: 'water'
            },
            {   
                name: 'Rapid Spin',
                damage: 20,
                type: 'normal'
            },
            {   
                name: 'Water Pulse',
                damage: 30,
                type: 'water'
            }
        ]
    }

    //creation of enemy image
    createEnemy() {
        const squirt = document.createElement("img")
        squirt.src = this.getEnemyImage()
        squirt.id = "squirt"
        main.append(squirt)
    }

    //attack function for which attack will be done by the enemy 
    attack() {
        let num = Math.floor(Math.random() * 4) +1
        if (num === 1) {
            return this.attacks[0]
        } else if (num === 2) {
            return this.attacks[1]
        } else if (num === 3) {
            return this.attacks[2]
        } else {
            return this.attacks[3]
        }
    }

    //get image for player and possibility of shiny pokemon
    getImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif"
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/back-shiny/squirtle.gif"  
        }
    }

    //get enemy image and possibility of shiny pokemon
    getEnemyImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif" 
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/shiny/squirtle.gif" 
        }
    }
}

//Class for bulbasaur
class Bulbasaur {
    constructor(){
        this.name = 'Bulbasaur';
        this.hp = 45;
        this.speed = 45;
        this.type = "grass"
        this.attacks = [
            {   
                name : 'Tackle',
                damage: 10,
                type: 'normal'
            },
            {   
                name: 'Vine Whip',
                damage: 15,
                type: 'grass'
            },
            {
                name: 'Razor Leaf',
                damage: 20,
                type: 'grass'
            },
            {
                name: 'Takedown',
                damage: 30,
                type: 'normal'
            }
        ]
    }

    //creation of enemy image
    createEnemy() {
        const bulba = document.createElement("img")
        bulba.src = this.getEnemyImage()
        bulba.id = "bulba"
        main.append(bulba)
    }

    //attack function for which attack will be done by the enemy 
    attack() {
        let num = Math.floor(Math.random() * 4) +1
        if (num === 1) {
            return this.attacks[0]
        } else if (num === 2) {
            return this.attacks[1]
        } else if (num === 3) {
            return this.attacks[2]
        } else {
            return this.attacks[3]
        }
    }

    //get image for player and possibility of shiny pokemon
    getImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif"
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/back-shiny/bulbasaur.gif" 
        }
    }
    //get enemy image and possibility of shiny pokemon
    getEnemyImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif" 
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/shiny/bulbasaur.gif" 
        }
    }
}

//Class for Ratata
class Ratata  {
    constructor(){
        this.name = 'Ratata';
        this.hp = 30;
        this.speed = 72;
        this.type = 'normal'
        this.attacks = [
            {
                name: 'Tackle',
                damage: 10,
                type: 'normal'
            }, 
            {
                name: 'Quick Attack',
                damage: 15,
                type: 'normal'
            }
        ]
    }

    //creation of enemy image
    createEnemy() {
        const rat = document.createElement("img")
        rat.src = this.getEnemyImage()
        rat.id = "rat"
        main.append(rat)
    }

    //attack function for which attack will be done by the enemy 
    attack() {
        let num = Math.floor(Math.random() * 4) +1
        if (num === 1) {
            return this.attacks[0]
        } else if (num === 2) {
            return this.attacks[1]
        } else if (num === 3) {
            return this.attacks[2]
        } else {
            return this.attacks[3]
        }
    }

    //get image for player and possibility of shiny pokemon
    getImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata-f.gif"
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/shiny/rattata-f.gif" 
        }
    }
    //get enemy image and possibility of shiny pokemon
    getEnemyImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata-f.gif"
        } else {
            return "https://img.pokemondb.net/sprites/black-white/anim/shiny/rattata-f.gif" 
        }
    }
}

//global variables
let enemy = null
let speedOrder = []

//random enemy generator
function randomEnemy() {
    let num = Math.floor(Math.random() * 99) +1
    if (num <= 25) {
        enemy = new Charmander
    } else if (num <= 50) {
        enemy = new Squirtle
    } else if (num <= 75) {
        enemy = new Bulbasaur
    } else {
        enemy = new Ratata
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
    } else if (attack.type === 'fire' && target.type === 'fire') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'water' && target.type === 'water') {
        return Math.floor(attack.damage / 2)
    }  else if (attack.type === 'grass' && target.type === 'grass') {
        return Math.floor(attack.damage / 2)
    } else {
        return attack.damage
    }
} 


