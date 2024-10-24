const page1 = "Today is a very special day for you..";
const page2 = "We were talking about sunflowers once and I remember this was the first picture of you , that you sent to me.";
const page2_1=" Your smile was the most precious thing in this picture, which i fell in love with . I hope you keep this beautiful smile for the rest of your life. ";
var cdate = new Date();
var bdate = new Date(); bdate.setDate(18); bdate.setHours(23); bdate.setMinutes(59);
var dDiff=bdate.getDate()-cdate.getDate();
var hDiff=bdate.getHours()-cdate.getHours();
var mDiff=bdate.getMinutes()-cdate.getMinutes();
let animationTimeout; // Variable to store the timeout
let animationRunning = false; // Track if an animation is already running
var next1,flagNext2=true;
let i=0,j=0;
window.onload = function(){
    var next1;
    timecheck();
    writeAnimate();
}
function timecheck() {
    if(cdate.getDate()<bdate.getDate()){
        next1=true;
        document.getElementById("disp").textContent="Its not yet time ,";
        document.getElementById("countdown").textContent=(dDiff + " days " + hDiff +" hours "+mDiff+" mins left...");
        return;
    }
    else{
        document.getElementById("disp").textContent=page1;
        next1=fasle;
    }
}
function writeAnimate(){
    if(i<page2.length){
        document.getElementById("disp2").innerHTML += page2.charAt(i);
    i++;
    setTimeout(writeAnimate,60);
    }
}
function Next1() {
    if(next1){
        alert("Wait for that special day please");
        return;
    }
    setTimeout(function() {
        // Select the petals and back petals
        let flowers = document.querySelectorAll('#flower');
        flowers.forEach(flower => {
            flower.classList.add("fadeOut"); // Add fade out class
        });

        // Optionally select the glass if needed
        let glass = document.querySelector('.glass');
        if (glass) {
            glass.classList.add("fadeOut"); // Add fade out class for glass
        }

        // Redirect to the next page after animations
        setTimeout(() => {
            window.location.href = "HB2.html"; // Delay navigation to allow the animation to complete
        }, 500); // Change to match the duration of your fadeOut animation
    }, 100); // Initial delay before starting animations
}
function Next2(){
 if(flagNext2){
    document.getElementById("disp2").innerHTML = "";
    writeAnimate2();
 }else
{
 flagNext2=false;
}
}
function writeAnimate2(){
    if(j<page2_1.length){
        document.getElementById("disp2").innerHTML += page2_1.charAt(j);
    j++;
    setTimeout(writeAnimate2,60);
    }
}
function back() {
    console.log("Backed");
    let flowers = document.querySelectorAll('#flower');
    flowers.forEach(flower => {
        flower.classList.remove("fadeOut");
    });
    let glass = document.querySelector('.glass');
    if (glass) {
        glass.classList.remove("fadeOut"); 
    }
 history.back(); 
 
}