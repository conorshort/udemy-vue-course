function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            attackPlayerRange: [8, 15],
            attackMonsterRange: [5, 12],
            specialAttackMonsterRange: [10, 25],
            battleLog: []
        };
    },
    methods: {

        attackPlayer(range) {
            let damage = randomIntInRange(range[0], range[1]);
            this.playerHealth -= damage;
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
            this.addLogMessage('monster', 'attack', damage);

        },

        attackMonster(range) {
            let damage = randomIntInRange(range[0], range[1]);
            this.monsterHealth -= damage;
            if (this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.addLogMessage('player', 'attack', damage);
            this.attackPlayer(this.attackPlayerRange);
            this.currentRound++
        },
        
        healPlayer() {
            let healing = randomIntInRange(8, 20);
            this.playerHealth += healing;
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            this.currentRound++;
            this.attackPlayer(this.attackPlayerRange);
            this.addLogMessage('player', 'heal', healing);

        },

        resetGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.battleLog = [];
        },

        surrender() {
            this.winner = "monster";
        },

        addLogMessage(who, what, value) {
            this.battleLog.unshift({who, what, value})
        }
    },

    watch: {
        playerHealth(value) {
            if (value === 0 && this.monsterHealth === 0) {
                this.winner = "draw";
            } else if (value === 0) {
                this.winner = "monster";
            }
        },

        monsterHealth(value) {
            if (value === 0 && this.playerHealth === 0) {
                this.winner = "draw";
            } else if (value === 0) {
                this.winner = "player";
            }
        }
    },

    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHealth + '%'
            };
        },

        playerBarStyles() {
            return {
                width: this.playerHealth + '%'
            };
        },

        specialAttackAvailable() {
            return this.currentRound % 3 !== 0;
        }
    },

});

app.mount('#game');