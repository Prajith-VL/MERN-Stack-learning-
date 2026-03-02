const decBt=document.getElementById("decBt");
const incBt=document.getElementById("incBt");
const resBt=document.getElementById("resBt");
const countLabel=document.getElementById("countLable");

let count=0;

decreaseBt.onclick=function(){
    count--;
    counLabel.textContent(count);
}
incBt.onclick=function(){
    count++;
    countLabel.textContent(count);
}
resetBt.onclick=function(){
    count++;
    countLabel.textContent(count);
}

