class Bulbasaur {
  constructor(name){
    this.name = name;
    this.hp = 45;
    this.speed = 45;
    this.type = "grass"
  }
  createBulba() {
    const bulba = document.createElement("img")
    bulba.src = "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif"
    bulba.id = "bulba"
    main.append(bulba)
  }
}
