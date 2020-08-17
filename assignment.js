 
//Assignment 1.
function feetToMile(foot){

    var mile=foot/5280;
    console.log('Your foot converted and mile = '+mile);

}
feetToMile(5280);

//Assignment 2.
function woodCalculator(chair,table,bed){

    var chairWood=chair*1;
    console.log(chair+' Chair total wood need '+chairWood+' cubic foot');

    var tableWood=table*3;
    console.log(table+' table total wood need '+tableWood+' cubic foot');

    var bedWood=bed*5;
    console.log(bed+' bed total wood need '+bedWood+' cubic foot');

}
woodCalculator(4,6,9);


//Assignment 3.
function brickCalculator(floor){

    if(floor <= 10){
        var brick=floor*15;
        console.log(floor+' tolar jonno, total brick need '+brick+" thousand");
    }else if(floor <= 20){
        var brick=floor*12;
        console.log(floor+' tolar jonno, total brick need '+brick+" thousand");
    }else{
        var brick=floor*10;
        console.log(floor+' tolar jonno, total brick need '+brick+" thousand");
    }

}
brickCalculator(5)

function tinyFriend(){
    var friendsName=['md sohidul islam','md mahi haque','sayed','sadh','ma','ahmed uddin','ajom','sorif','ditol','saon','maya pakhi'];
    for(var i=0; i<friendsName.length; i++){
        console.log(friendsName[i].length);
    } 
     return friendsName[4];
}
var result=tinyFriend();
console.log(result);

 