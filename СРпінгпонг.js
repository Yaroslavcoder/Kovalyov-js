class Player {
    constructor(name, activeHand) {
        this.name = name;
        this.activeHand = activeHand;
    }
    serve() {
        console.log(`${this.name} подає м'яч (${this.activeHand} рука)`);
    }
    hit() {
        console.log(`${this.name} відбає м'яч`);
    }
    miss() {
        console.log(`${this.name} пропустив м'яч`);
    }

    getRandomAction() {
        const actions = ["hit", "miss"];
        return actions[Math.floor(Math.random() * actions.length)];
    }
}
class Scoreboard{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.scores = {
            [player1.name] : 0,
            [player2.name] : 0
        };
    };
    addPoint(player) {
        this.scores[player.name]++;
    };
    displayScore() {
        console.log(`Рахунок: ${this.player1.name} ${this.scores[this.player1.name]} -  ${this.player2.name} ${this.scores[this.player2.name]}`);
    };
    hasWinner() {
        return this.scores[this.player1.name] >= 21 || this.scores[this.player2.name] >=21;
    };
    getWinner() {
        if (this.scores[this.player1.name] >= 21) {
            return this.player1.name;
        } else if (this.scores[this.player2.name] >= 21) {
            return this.player2.name;
        }
        return null;
    };
}
class GameEngine{
    constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.scoreboard = new Scoreboard(player1, player2);
    this.currentServer = player1;
    }
    play() {
        while (!this.scoreboard.hasWinner()) {
            this.currentServer.serve();

            const receiver = this.currentServer === this.player1 ? this.player2 : this.player1;
            const action = receiver.getRandomAction();

            if (action === 'hit') {
                receiver.hit();
                this.scoreboard.addPoint(this.currentServer);
            } else {
                receiver.miss();
                this.scoreboard.addPoint(receiver);
            }

            this.scoreboard.displayScore();
            this.currentServer = receiver;
        }

        console.log(`Гра закінчена! Переможець: ${this.scoreboard.getWinner()}`);
    }
}

const player1 = new Player('Олександр', 'права');
const player2 = new Player('Марія', 'ліва');

const game = new GameEngine(player1, player2);
game.play();
