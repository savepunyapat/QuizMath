$(function(){
    var ans=0;
    
    $("#view1").show();
    $("#view2").hide();
    $("#view3").hide();
    $("#view4").hide();
    $("#view5").hide();
    $("#view6").hide();
    $("#view7").hide();
    $("#nextbtn").click(nextShuffle);
    $("#startbtn").click(startGame);
    
    $("c-1").click(check1);
});
var score=0;
function startGame(){
    $("#view1").hide();
    $("#view2").show();

    score=0;
    setInterval(() =>{
        var num = $("#run-num").text();
        var uptime = eval(num) - eval(1);
        $("#run-num").text(uptime);
        
        if(uptime==0){
            $("#view2").hide();
            $("#view3").show();
            shuffle();
        }
    },1000);

    
}
function home(){
    location.reload();
}
function shuffle(){
    
    var val1=Math.floor(Math.random()*20);
    var val2=Math.floor(Math.random()*20);
    $("#q-1").text(val1);
    $("#q-2").text(val2);
    
    ans = val1+val2;
    var anslist = [Math.floor(Math.random()*40),Math.floor(Math.random()*40),Math.floor(Math.random()*40),ans];
    
    var ranList = shuffleArray(anslist);
    var j=0;
    for(var i=1;i<5;i++){
        $("#c-"+i).text(ranList[j]);
        j++;
    }
    timeOut();
}
function nextShuffle(){
    $("#view3").show();
    var val1=Math.floor(Math.random()*20)+1;
    var val2=Math.floor(Math.random()*20)+1;
    $("#q-1").text(val1);
    $("#q-2").text(val2);
    
    ans = val1+val2;
    var anslist = [Math.floor(Math.random()*40)+1,Math.floor(Math.random()*40)+1,Math.floor(Math.random()*40)+1,ans];
    
    var ranList = shuffleArray(anslist);
    var j=0;
    for(var i=1;i<5;i++){
        $("#c-"+i).text(ranList[j]);
        j++;
    }
    timeOut();
}
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;    
    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
function check1(){
    
    var check = $("#c-1").text();
    if(check==ans){
        $("#view3").hide();
        nextShuffle();
        score=score+1;
        console.log(score);
        $("#point").text(score);
        $("#view6").show();
    }else {
        $("#view5").show();
        $("#view3").hide();
    }
}
function check2(){
    var check = $("#c-2").text();
    if(check==ans){
        $("#view3").hide();
        nextShuffle();
        score=score+1;
        console.log(score);
        $("#point").text(score);
        $("#view6").show();
    }else {
        $("#view5").show();
        $("#view3").hide();
    }
}
function check3(){
    var check = $("#c-3").text();
    if(check==ans){
        $("#view3").hide();
        nextShuffle();
        score=score+1;
        console.log(score);
        $("#point").text(score);
        $("#view6").show();
    }else {
        $("#view5").show();
        $("#view3").hide();
    }
}
function check4(){
    var check = $("#c-4").text();
    if(check==ans){
        $("#view3").hide();
        nextShuffle();
        score=score+1;
        console.log(score);
        $("#point").text(score);
        $("#view6").show();
    }else {
        $("#view5").show();
        $("#view3").hide();
    }
}   
function timeOut(){
    setInterval(function(){
        $("#view3").hide();
        $("#view7").show();
        $("#view6").hide();
        console.log("5")
    },5000);
}