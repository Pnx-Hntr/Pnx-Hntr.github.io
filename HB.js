const page1 = "Today is a very special day for you..";
const page2 = "We were talking about sunflowers once and I remember this was the first picture of you, that you sent to me.";
const page2_1=" Your smile was the most precious thing in this picture, which i fell in love with . I hope you keep this beautiful smile for the rest of your life. ";
var cdate = new Date();
var bdate = new Date(); bdate.setDate(28); bdate.setHours(23); bdate.setMinutes(59);
var dDiff=bdate.getDate()-cdate.getDate();
var hDiff=bdate.getHours()-cdate.getHours();
var mDiff=bdate.getMinutes()-cdate.getMinutes();
var next1,flagNext2=true;
let i=0,j=0;
window.onload = function(){
    var next1;
    timecheck();
}
function timecheck() {
    if(cdate.getDate()<bdate.getDate()){
        next1=true;
        document.getElementById("disp").textContent="Its not yet time ,";
        document.getElementById("countdown").textContent=((dDiff-1) + " days " + hDiff +" hours "+mDiff+" mins left...");
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
    flagNext2=false;
 }else
{
    let flow = document.querySelector('#flower'),gls = document.querySelector('.glass')
    img = document.querySelector('.image1'); 
    flow.style.animation = '';
    flow.classList.add("FlowerUp");
    gls.classList.add("fadeDown");
    img.classList.add("fadeDown");
    HappyBirthday();
    
}
}
function Next3(){
    let bir = document.querySelector('.MainWish'); 
    bir.classList.add("fadeDown");
    console.log("HB");
    setTimeout(() => {
        window.location.href = "HB3.html"; 
    }, 1000);
}
function submit(){
    sendData();
    let food = document.querySelector('.treat'),
        foodt=document.querySelector('.treatbox'),
        submit=document.querySelector('#submit'),
        circOut=document.querySelector('.circleOut'),
        final=document.querySelector('.final'); 
    food.classList.add("fadeDown");
    foodt.classList.add("fadeDown");
    submit.classList.add("SubmAni");
    setTimeout(function(){circOut.classList.add("CircOut");},3400)
    final.classList.add("finalFadein");
    
}


function HappyBirthday(){
    let happybirthday=document.querySelector('.MainWish'),
    caption=document.querySelector('.caption'),btton=document.querySelector('#next3');
    happybirthday.classList.add("HBtext");
    setTimeout(function(){btton.classList.add("HBtext");
                caption.classList.add("HBtext");console.log("test");},800)
}
function writeAnimate2(){
    if(j<page2_1.length){
        document.getElementById("disp2").innerHTML += page2_1.charAt(j);
    j++;
    setTimeout(writeAnimate2,60);
    }
}
function back() {
   /* let flowers = document.querySelectorAll('#flower');
    flowers.forEach(flower => {
        flower.classList.remove("fadeOut");
    });
    let glass = document.querySelector('.glass');
    if (glass) {
        glass.classList.remove("fadeOut"); 
    }*/
 //history.back(); 
 window.location.href="HB.html";
}
function onLoad(){
    var b2 = document.getElementById("next2");
    setTimeout(writeAnimate,2500) ;
    setTimeout(function(){b2.disabled = false;}, 9700);
}


function sendData() {
    const data = document.getElementById("Food").value;
    const date = new Date().toLocaleString();

    fetch("https://server-2n5h.onrender.com/save-data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ data, date })
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("responseMessage").textContent = result;
        console.log(result);
    })
    .catch(error => console.error("Error:", error));
};
