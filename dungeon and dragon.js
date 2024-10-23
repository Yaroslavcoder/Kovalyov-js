class Character {
    #name;
    #health;
    
    constructor(name, health = 100) {
        this.#name = name;
        this.#health = health; 
    }

    attack() {
        return 10;
    }

    takeDamage(damage) {
        this.#health -= damage;
        if (this.#health < 0) {
            this.#health = 0;
        }
    }

    getHealth() {
        return this.#health;
    }

    getName() {
        return this.#name;
    }
}

class Warrior extends Character {
    attack() {
        return super.attack() * 2;
    }
}

class Mage extends Character {
    constructor(name, health, magicDamage = 5) {
        super(name, health);
        this.magicDamage = magicDamage;
    }

    attack() {
        return super.attack() + this.magicDamage;
    }
}

const warrior = new Warrior("Лукас Сінклер");
const mage = new Mage("Вілл Баєрс");
console.log(`${warrior.getName()} атакує та завдає ${warrior.attack()} шкоди.`);
console.log(`${mage.getName()} атакує та завдає ${mage.attack()} шкоди.`);
warrior.takeDamage(mage.attack());
mage.takeDamage(warrior.attack());
console.log(`${warrior.getName()} має ${warrior.getHealth()} здоров'я після атаки.`);
console.log(`${mage.getName()} має ${mage.getHealth()} здоров'я після атаки.`);

class Ranger extends Character {
    constructor(name = 'Рейнджер', health = 130, rangedDamage = 20) {
        super(name, health); 
        this.rangedDamage = rangedDamage; 
    }
    
    attack() {
        return super.attack() + this.rangedDamage; 
    }
}

class Vecna extends Character {
    constructor(name = 'Векна', health = 130, magicPower = 20) {
        super(name, health); 
        this.magicPower = magicPower; 
    }
    
    attack() {
        return super.attack() + this.magicPower;
    }
}
const ranger = new Ranger('Дастін Гендерсон');
const vecna = new Vecna();

console.log(`${warrior.getName()} та ${mage.getName()} об'єдналися, щоб перемогти Векну.`);
console.log(`Якщо вони атакають разом за один удар, вони нанесуть ${mage.attack() + warrior.attack()} шкоди.`);
vecna.takeDamage(mage.attack() + warrior.attack());
console.log(`${vecna.getName()} має ${vecna.getHealth()} здоров'я після атаки.`);
console.log(`Векна завдала обом по ${vecna.attack()} шкоди.`);
warrior.takeDamage(vecna.attack());
mage.takeDamage(vecna.attack());
console.log(`${warrior.getName()} має ${warrior.getHealth()} здоров'я після атаки.`);
console.log(`${mage.getName()} має ${mage.getHealth()} здоров'я після атаки.`);
console.log(`${mage.getName()} та ${warrior.getName()} покликали їх друга, тому ${ranger.getName()} атакує Векну. Разом вони завдадуть за один удар ${mage.attack() + warrior.attack() + ranger.attack()} шкоди.`);
vecna.takeDamage(mage.attack() + warrior.attack() + ranger.attack());
console.log(`${vecna.getName()} має ${vecna.getHealth()} здоров'я після атаки.`);
console.log(`Векна завдала ${vecna.attack()} шкоди.`);
warrior.takeDamage(vecna.attack());
mage.takeDamage(vecna.attack());
ranger.takeDamage(vecna.attack());
console.log(`${warrior.getName()} має ${warrior.getHealth()} здоров'я після атаки.`);
console.log(`${mage.getName()} має ${mage.getHealth()} здоров'я після атаки.`);
console.log(`${ranger.getName()} має ${ranger.getHealth()} здоров'я після атаки.`);
console.log(`${mage.getName()} ${warrior.getName()} та ${ranger.getName()} завдають разом останній удар`);
vecna.takeDamage(mage.attack() + warrior.attack() + ranger.attack());
console.log(`${vecna.getName()} має ${vecna.getHealth()} здоров'я після атаки.`);
conosle.log(`${vecna.getName()} переможена`)
