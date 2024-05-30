
function getRandomValue(min,max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth  : 100,
            monsterHealth : 100,
            currentRound  : 0,
        }
    },computed:{
        monsterBarStyles()
        {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles()
        {
            return {width: this.playerHealth + '%'};
        },
        myUseSpiaclAttach()
        {
            return this.currentRound % 3 !== 0
        }
    },methods: {
        attachMonster()
        {
            this.currentRound ++;

            //Random value between 5 and 12
            myAttachVlue = getRandomValue(5,12);
            this.monsterHealth  -= myAttachVlue;
            this.attachPlayer();
        },
        attachPlayer()
        {
            //Random value between 15 and 8
            myAttachVlue = getRandomValue(8,15);
            this.playerHealth  -= myAttachVlue;
        },
        speacialAttachMonster()
        {
            this.currentRound ++;

            myAttachVlue = getRandomValue(10,25);
            this.monsterHealth  -= myAttachVlue;
            this.spicalAttch -- ;
            this.attachPlayer();
        }
    },
});

app.mount("#game")
