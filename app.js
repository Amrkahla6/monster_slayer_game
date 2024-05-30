
function getRandomValue(min,max)
{
    return math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth  : 100,
            monsterHealth : 100,
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
            this.playerHealth  -= playerHealth;
        }
    },
});

app.mount("#game")