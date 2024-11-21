var timer = 60;
var score = 0;
var hitrn = 0;
function makeBubble(){
var clutter = "";

for(i = 1 ; i<=90; i++){
    var rn = Math.floor(Math.random() * 10 )
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}


function runtime(){
    var timerint = setInterval(function(){
    if(timer > 0){
        timer-- ;
        document.querySelector("#timerval").textContent = timer
    } else {
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1> Game Over!</h1>`
    }
}, 1000)
    
}

function getHitNo(){
hitrn = Math.floor(Math.random() * 10)
document.querySelector("#hitval").innerHTML = hitrn
}


function increasedScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

document.querySelector("#pbtm").addEventListener('click',function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum === hitrn){
        increasedScore();
        getHitNo();
        makeBubble();
    }
})
runtime()
makeBubble()
getHitNo()
increasedScore()