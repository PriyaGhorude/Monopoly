
var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];

const player1_Button = document.getElementById("Player-1");
const player2_Button = document.getElementById("Player-2");

player1_Button.addEventListener('click',rollDice_1);

var player1 = ["Prograd",0,1000];
var player2 = ["FacePrep",0,1000];

function rollDice_1(){
    let position = Math.floor(Math.random()*6) + 1;
    changeposition_1(player1[1],position);
}

function rollDice_2(){
    let position = Math.floor(Math.random()*6) + 1;
    changeposition_2(player2[1],position);
}

function changeposition_1(old,currentPost){
    var newPosition = old + currentPost;
    player1[1] = newPosition;
}

function changeposition_2(old,currentPost){
    var newPosition = old + currentPost;
    player2[1] = newPosition;
}

function updateMoney_1(p1){
    var updateMoney = 0;
    if(p1<board.length)
    updateMoney = player1[2]-board[p1-1];
    else{
        p1 = p1%15;
        updateMoney = player1[2]-board[p1-1];
    }
    console.log(updateMoney);
}

function updateMoney_2(p2){
    var updateMoney = 0;
    if(p1<board.length)
    updateMoney = player2[2]-board[p2-1];
    else{
        p2 = p2%15;
        updateMoney = player2[2]-board[p2-1];
    }
}