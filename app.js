
function getRandomValue(min,max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth  : 100,
            monsterHealth : 100,
        }
    },computed:{
        monsterBarStyles()
        {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles()
        {
            return {width: this.playerHealth + '%'};
        }
    },methods: {
        attachMonster()
        {
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
        }
    },
});

app.mount("#game")
