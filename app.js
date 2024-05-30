
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
            winner        : null
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
    },watch:{
        playerHealth(value)
        {
            if(value <= 0 && this.monsterHealth <= 0){
                //Draw
                this.winner = "draw";
             }else if(value <= 0){
                //The player lost
                this.winner = "monster";
             }
        },
        monsterHealth(value)
        {
            if(value <= 0 && this.playerHealth <= 0){
                //Draw
                this.winner = "draw";
             }else if(value <= 0){
                //The monster lost
                this.winner = "player";
             }
        }
    },methods: {
        attachMonster()
        {
            this.currentRound ++;

            //Random value between 5 and 12
            myAttachValue = getRandomValue(5,12);
            this.monsterHealth  -= myAttachValue;
            this.attachPlayer();
        },
        attachPlayer()
        {
            //Random value between 15 and 8
            myAttachValue = getRandomValue(8,15);
            this.playerHealth  -= myAttachValue;
        },
        speacialAttachMonster()
        {
            this.currentRound ++;

            myAttachValue = getRandomValue(10,25);
            this.monsterHealth  -= myAttachValue;
            this.spicalAttch -- ;
            this.attachPlayer();
        },
        healPlayer()
        {
            this.currentRound ++;

            myHealValue = getRandomValue(8,15);
            
            if(this.playerHealth + myHealValue > 100){
                this.playerHealth = 100; 
            }else{
                this.playerHealth  += myHealValue;
            }

            this.attachPlayer();
        }
    },
});

app.mount("#game")
