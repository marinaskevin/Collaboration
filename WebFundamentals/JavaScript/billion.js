var reward = .01;
var rewardSum = 0;
for(var days = 0; days < 30; days++)
{
    rewardSum += reward;
    reward *= 2;
}
console.log(reward);
console.log(rewardSum);