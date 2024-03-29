//class for pokemon
class Pokemon {
    constructor(name, hp, speed, type, enemyImage, shinyEnemyImage, playerImage, shinyPlayerImage){
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.type = type;
        this.enemyImage = enemyImage;
        this.shinyEnemyImage = shinyEnemyImage;
        this.playerImage = playerImage;
        this.shinyPlayerImage = shinyPlayerImage;
    }

    //creation of enemy 
    createEnemy() {
        const pokemon = document.createElement("img")
        pokemon.src = this.getEnemyImage()
        pokemon.id = "enemy"
        main.append(pokemon)
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

    //get player image and possibility for shiny pokemon
    getImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return this.playerImage
        } else {
            return this.shinyPlayerImage 
        }
    }

    //get enemy image and possibility of shiny pokemon
    getEnemyImage() {
        let num = Math.floor(Math.random() * 100) + 1
        if (num <= 99) {
            return this.enemyImage 
        } else {
            return this.shinyEnemyImage
        }
    }
}

//Class for Charmander 
class Charmander extends Pokemon {
    constructor(){
        super(
        'Charmander', 
        39, 
        65, 
        "fire", 
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/shiny/charmander.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-shiny/charmander.gif" 
        )
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
}

//Class for Squirtle
class Squirtle extends Pokemon {
    constructor(){
        super(
        'Squirtle', 
        44, 
        43, 
        "water", 
        "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/shiny/squirtle.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-shiny/squirtle.gif"
        )
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
}

//Class for bulbasaur
class Bulbasaur extends Pokemon {
    constructor(){
        super(
        "Bulbasaur",
        45,
        45,
        "grass",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/shiny/bulbasaur.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/back-shiny/bulbasaur.gif"
        )
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
}

//Class for Ratata
class Ratata extends Pokemon {
    constructor(){
        super(
        "Ratata",
        30,
        72,
        "normal",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata-f.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/shiny/rattata-f.gif",
        null,
        null
        )
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
            },
            {
                name: 'Fury Flame',
                damage: 20,
                type: 'normal'
            },
            {
                name: 'Last Resort',
                damage: 30,
                type: 'normal'
            }
        ]
    }
}


//Class for Meowth
class Meowth extends Pokemon {
    constructor() {
        super(
        "Meowth",
        40,
        90,
        "normal",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/shiny/meowth.gif",
        null,
        null,
        )
        this.attacks = [
            {
                name: 'Fake Out',
                damage: 10,
                type: 'normal',
            },
            {
                name: 'Scratch',
                damage: 15,
                type: 'normal'
            },
            {
                name: 'Pay Day',
                damage: 20,
                type: 'normal',
            },
            {
                name: 'Slash',
                damage: 30,
                type: 'normal'
            }
        ]
    }
}

//class for Butterfree
class Butterfree extends Pokemon {
    constructor() {
        super(
        "Butterfree",
        60,
        70,
        "bug",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree-f.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/shiny/butterfree-f.gif",
        null,
        null
        )
        this.attacks = [
            {
                name: 'Bug Bite',
                damage: 10,
                type: 'bug',
            },
            {
                name: 'Gust',
                damage: 15,
                type: 'flying'
            },
            {
                name: 'Air Slash',
                damage: 20,
                type: 'flying',
            },
            {
                name: 'Bug Buzz',
                damage: 30,
                type: 'bug'
            }
        ]
    }

}

//class for Pikachu
class Pikachu extends Pokemon {
    constructor () {
        super(
        "Pikachu",
        35,
        90,
        "electric",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif",
        null,
        null
        )
        this.attacks = [
            {
                name: 'Nuzzle',
                damage: 10,
                type: 'electric',
            },
            {
                name: 'Quick Attack',
                damage: 15,
                type: 'normal',
            },
            {
                name: 'Thunder Shock',
                damage: 20,
                type: 'electric',
            },
            {
                name: 'Feint',
                damage: 30,
                type: 'normal',
            }
        ]
    }
}


//global variables
let enemy = null
let speedOrder = []

//random enemy generator
function randomEnemy() {
    let num = Math.floor(Math.random() * 99) +1
    if (num <= 14) {
        enemy = new Charmander
    } else if (num <= 28) {
        enemy = new Squirtle
    } else if (num <= 42) {
        enemy = new Bulbasaur
    } else if (num <= 56) {
        enemy = new Ratata
    } else if (num <= 70){
        enemy = new Meowth
    } else if (num <= 84){
        enemy = new Butterfree
    } else {
        enemy = new Pikachu
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
    } else if (attack.type === 'bug' && target.type === 'grass') {
        return attack.damage * 2
    } else if (attack.type === 'grass' && target.type === 'bug') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'bug' && target.type === 'fire') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'fire' &&  target.type === 'bug') {
        return attack.damage * 2
    } else if (attack.type === 'flying' && target.type === 'grass') {
        return attack.damage * 2
    } else if (attack.type === 'grass' && target.type === 'flying') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'water' && target.type === 'electric') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'flying' && target.type === 'electric') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'electric' && target.type === 'electric') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'electric' && target.type === 'grass') {
        return Math.floor(attack.damage / 2)
    } else if (attack.type === 'electric' && target.type === 'water') {
        return attack.damage * 2
    } else if (attack.type === 'electric' && target.type === 'flying') {
        return attack.damage * 2
    }
    else {
        return attack.damage
    }
} 


