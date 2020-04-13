function checkYes() {
    alert("MerryChristmas");

}
function checkNo() {
    let top=Math.round(Math.random()*innerHeight);
    let left=Math.round(Math.random()*innerWidth);
    document.getElementById("NoButton").style.left=left+"px";
    document.getElementById("NoButton").style.top=top+"px";

}