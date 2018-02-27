var hour = 5;
var minute = 31;
var period = "AM";
var time;
var time2;
if (minute <= 30)
{
    time = "It's just after";
}
else
{
    time = "It's almost"
    hour++;
}
if(period == "PM")
{
    time2 = "in the evening";
}
else 
{
    time2 = "in the morning";
}
console.log(time + " " + hour + " " + time2);
while(true)
{

}