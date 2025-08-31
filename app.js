// let shreknarHP = 3
// let shreknarAP = 4

// SECTION Data



let hero ={
    name: 'Martha',
    maxHp: 10,
    hp: 10,
    ap: 2,
    gold: 0,
    boot: 1,
    arrow: 0,
    magic: 3,
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

let townCost = {
    tavern: 2,
    boot: hero.boot,
    arrow: hero.arrow + 1,
    magic: hero.magic * 2
}


// SECTION Game Logic

function squishMonster(attackType){
    let totalAttack = 0

    if(attackType = 'boot'){
        totalAttack = hero.ap + hero.boot
    } else if (attackType = 'arrow'){
        totalAttack = hero.ap + hero.arrow
    } else {
        totalAttack = hero.ap + hero.magic
    }
    
    monster.hp -= totalAttack
    console.log(`${hero.name} did ${totalAttack} damage!`);

    if(monster.hp < 0){
        hero.gold += monster.reward
        window.alert(`You have squished ${monster.name}!`)
        let newMonster = monsters.shift()
        monster = newMonster
        drawMonster()
    }
        
    if(monster.hp){
        hero.hp -= monster.ap
    }

    if(hero.hp <0){
        hero.hp = 0
    }

        

    if(monsters.length == 0){
        window.alert('All the monsters are dead! Congratulations you have decimated an ecosystem!')
    }
    
    drawMonster()
    drawHero()
    console.log(monster.hp);
}

function healHero(){

    if(hero.gold >= townCost.tavern){
        if(!(hero.hp == hero.maxHp)){
            hero.gold -= townCost.tavern
            hero.hp = hero.maxHp
        }else{
            window.alert('Get up you bum, you are already healthy!')
        }
    }else{
        window.alert("We don't serve folks hangin' out the passenger side of their best friend's ride.")
    }

    drawHero()
}

function upgradeHero(upgradeType){
    if (upgradeType == 'boot'){
        if(hero.gold >= townCost.boot){
            hero.bootSize++
            hero.gold -= townCost.boot
        }else{
            window.alert("We don't serve folks hangin' out the passenger side of their best friend's ride.")
        }
    } else if (upgradeType == 'arrow'){
         if(hero.gold >= townCost.arrow){
            hero.arrow++
            hero.gold -= townCost.arrow
        }else{
            window.alert("We don't serve folks hangin' out the passenger side of their best friend's ride.")
        }
    }else{
         if(hero.gold >= townCost.magic){
            hero.magic++
            hero.gold -= townCost.magic
        }else{
            window.alert("We don't serve folks hangin' out the passenger side of their best friend's ride.")
        }
    }


    drawTown()
    drawHero()
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
    <div class="hero-stats">
        <p>Boot🥾 Power: ${hero.ap + hero.boot}</p>
        <p>Arrow🏹 Power: ${hero.ap + hero.arrow}</p>
        <p>Magic🪄 Power: ${hero.ap + hero.magic}</p>
    </div>
    <p>Gold: ${hero.gold}</p>
    `
}

function drawTown(){
    let tavernCostElm = document.getElementById('tavern-cost')
    let bootCostElm = document.getElementById('boot-cost')
    let bowCostElm = document.getElementById('arrow-cost')
    let libraryCostElm = document.getElementById('magic-cost')

    tavernCostElm.innerText = `${townCost.tavern} 🪙`
    bootCostElm.innerText = `${townCost.boot} 🪙`
    bowCostElm.innerText = `${townCost.arrow} 🪙`
    libraryCostElm.innerText = `${townCost.magic} 🪙`
}

drawHero()
drawMonster()
drawTown()