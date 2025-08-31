// let shreknarHP = 3
// let shreknarAP = 4

// SECTION Data

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
}
]

// SECTION Game Logic

function squishMonster(){
    if(!monster.hp){
        let newMonster = monsters.shift()
        monster = newMonster
    } else {
        monster.hp -= 1
    }
    drawMonster()
    console.log(monster.hp);
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


drawMonster()