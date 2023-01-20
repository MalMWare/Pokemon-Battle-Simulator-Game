class Charmander {
    constructor(name){
        this.name = name;
        this.hp = 39;
        this.speed = 65;
        this.type = "fire"
    }
    createEnemyChar() {
        const char = document.createElement("img")
        char.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
        char.id = "char"
        
    }
}

class Squirtle {
    constructor(name){
        this.name = name;
        this.hp = 44;
        this.speed = 43;
        this.type = "water"
    }
    createEnemySquirt() {
        const squirt = document.createElement("img")
        squirt.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
        squirt.id = "squirt"

    }
}

class Bulbasaur {
  constructor(name){
    this.name = name;
    this.hp = 45;
    this.speed = 45;
    this.type = "grass"
  }
  createEnemyBulba() {
    const bulba = document.createElement("img")
    bulba.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    bulba.id = "bulba"
    //main.append(bulba)
  }
}

