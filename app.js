// let shreknarHP = 3
// let shreknarAP = 4

// SECTION Data



let hero ={
    name: 'Martha',
    maxHp: 10,
    hp: 10,
    ap: 2,
    gold: 0,
    bootSize: 1
}

let monster = {
    name: 'Shreknar',
    hp: 3,
    ap: 4,
    reward: 2,
    picture: 'assets/Monsters/Goblin.png'
}

let monsters = [
{
    name: 'Tibbles',
    hp: 6,
    ap: 5,
    reward: 4,
    picture: 'assets/Monsters/Orc.png',
},
{
    name: 'Steel',
    hp: 8,
    ap: 4,
    reward: 5,
    picture: 'assets/Monsters/AnimatedArmor.png',
},
{
    name: 'Gorlash the All-Seeing',
    hp: 4,
    ap: 6,
    reward: 6,
    picture: 'assets/Monsters/Beholder.png',
},
{
    name: 'Fred',
    hp: 3,
    ap: 8,
    reward: 7,
    picture: 'assets/Monsters/DarkWizard.png',
},
{
    name: 'Nazarene',
    hp: 3,
    ap: 3,
    reward: 2,
    picture: 'assets/Monsters/Slime.png'
}
]

let tavernCost = 2
let bootCost = hero.ap + hero.bootSize

// SECTION Game Logic

function squishMonster(){
    if(!monster.hp){
        let newMonster = monsters.shift()
        monster = newMonster
    } else {
        monster.hp -= hero.ap + hero.bootSize
        console.log(`${hero.name} did ${hero.ap +hero.bootSize} damage!`);
        
        if(monster.hp){
            hero.hp -= monster.ap
        }
        
        if(monster.hp < 0){
            monster.hp = 0
        }

        if(monster.hp === 0){
            window.alert(`You have squished ${monster.name}!`)
            hero.gold += monster.reward
        }

        if(monsters.length == 0){
            window.alert('All the monsters are dead! Congratulations you have decimated an ecosystem!')
        }
    }
    drawMonster()
    drawHero()
    console.log(monster.hp);
}

function healHero(){
    hero.gold -= tavernCost
    hero.hp = hero.maxHp
}

// SECTION Rendering

function drawMonster(){
    let monsterStats = document.getElementById('monster-stats')
    let monsterPicture = document.getElementById('monster-picture')
    let monsterName = document.getElementById('monster-name')

    monsterPicture.setAttribute('src', `${monster.picture}`)
    monsterName.innerText = monster.name

    monsterStats.innerHTML = `<h2>HP: ${monster.hp}</h2>  <h2>Attack: ${monster.ap}</h2>`
}

function drawHero(){
    let heroName = document.getElementById('hero-name')
    let heroStats = document.getElementById('hero-stats')

    heroName.innerText = hero.name
    heroStats.innerHTML = `
    <p>HP: ${hero.hp}</p>
    <p>Attack: ${hero.ap + hero.bootSize}</p>
    <p>Gold: ${hero.gold}</p>
    `
}

function drawTown(){
    let tavernCostElm = document.getElementById('tavern-cost')
    let bootCostElm = document.getElementById('boot-cost')

    tavernCostElm.innerText = `${tavernCost} 🪙`
    bootCostElm.innerText = `${bootCost} 🪙`
}

drawHero()
drawMonster()
drawTown()