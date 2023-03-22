// 1) Create class Hero : damage , hp
// 1.1 ) What the raise of ur hero : Archer , Elf
// 1.2) if user hero === Archer : computer = elf , hero === Elf : computer = archer
// 2) Extend class Hero by Elf : magicKick() { return damage * 2  }
// Archer magicArrow(){ return damage * 2 / 1.2 * .4 * 2.2  }
// 3) Create while loop
// 4) Via random function pick who will attack
// 5) While hero['hp'] <= 0 : game continuous

// const ARCHER = "archer";
// const ELF = "elf";

// class Hero {
//   constructor(raise) {
//     if (raise === ARCHER || raise === ELF) this.raise = raise;
//   }
// }

// class Machine extends Hero {
//     constructor(raise){
//         super(raise)
//     }
// }

// const hero = new Hero();
/*
let chooseHero = prompt("Choose your hero: 1)Elf; 2)Archer")

class Hero {
	constructor(raise) {
		if (raise === ARCHER || raise === ELF) this.raise = raise;
		this.hp = hp;
		this.damage = damage;		
	}
	 
}
class ARCHER extends Hero {
	constructor(raise, hp, damage) {
		super(raise, hp, damage);
		this.hp = hp;
		 function attack() {
			console.log("There was an attack !");
		}
	}
} 

class ELF extends Hero {
	constructor(raise, hp, damage) {
		super(raise, hp, damage);
		this.hp = hp;
		 function attack() {
			console.log("There was an attack !");
		}
	}
} 

*/

class Character {
	constructor(hp, damage) {
		this.hp = hp;
		this.damage = damage;
	}

	attack() {
		throw new Error('You have to implement the method attack!');
	}
}

class Elf extends Character {
	constructor() {
		super(110, 10)
	}

	attack() {
		return this.magicKick()
	}

	magicKick() {
		return this.damage * 2;
	}
}

class Archer extends Character {
	constructor() {
		super(100, 11)
	}

	attack() {
		return this.magicArrow();
	}

	magicArrow() {
		return this.damage * 2 / 1.2 * .4 * 2.2;
	}
}

document.getElementById('start').addEventListener("click", function () {

	const playerCharType = document.getElementById('character-select').value;


	let human, computer;

	if (playerCharType === 'archer') {
		human = new Archer();
		computer = new Elf();
		
	}
	else if (playerCharType === "elf") {
		human = new Elf();
		computer = new Archer();
		
	} else {
		throw new Error('You have to choose a character!');

	}
	console.log('playerCharType:', playerCharType);

	let counter = 1;

	let first, second, dmg, firstType, secondType;
	let isCounter = true;
	const gamePlay = document.getElementById("gameplay");

	while (1 === 1) {
		if (counter === 1) {
			if (Math.round(Math.random() * 10) % 2 === 0) {
				firstType = 'Human';
				secondType = 'Computer';
				first = human;
				second = computer;
				gamePlay.appendChild(document.createTextNode(`Human starts`))

			}
			else {
				firstType = 'Computer';
				secondType = 'Human';
				first = computer;
				second = human;
				gamePlay.appendChild(document.createTextNode(`Computer starts`));

			}

			gamePlay.appendChild(document.createElement('br'))
		}

		dmg = first.attack();

		second.hp -= dmg;
		gamePlay.appendChild(document.createTextNode(`${counter}: ${firstType} damage ${secondType} with -${dmg}`));
		gamePlay.appendChild(document.createElement('br'))

		if (second.hp <= 0) {
			gamePlay.appendChild(document.createTextNode(`${counter}: ${firstType} WINS`));
			break;
		}

		dmg = second.attack();
		first.hp -= dmg
		gamePlay.appendChild(document.createTextNode(`${counter}: ${secondType} damage ${firstType} with -${dmg}`));
		gamePlay.appendChild(document.createElement('br'))

		if (first.hp <= 0) {
			gamePlay.appendChild(document.createTextNode(`${counter}: ${firstType} WINS`));
			break;
		}

		counter++;

	}
});