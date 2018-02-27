function slots(coins)
{
    for(; coins > 0; coins--)
    {
        if(Math.floor(Math.random()*100) == 35)
        {
            coins += (Math.floor(Math.random()*51) + 50);
            console.log("win");
            break;
        }
        console.log("fail " + coins);
    }
    return coins;
}
var coins = 100;
console.log(slots(coins));