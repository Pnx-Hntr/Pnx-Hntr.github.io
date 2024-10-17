const page1 = "Today is a very special day for you..";
var cdate = new Date();
var bdate = new Date(); bdate.setDate(28); bdate.setHours(23); bdate.setMinutes(59);
var dDiff=bdate.getDate()-cdate.getDate();
var hDiff=bdate.getHours()-cdate.getHours();
var mDiff=bdate.getMinutes()-cdate.getMinutes();
var next1;
window.onload = function(){
    var next1;
    timecheck()
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
function Next1() {
    if(next1){
        alert("Wait for that special day please");
        return;
    }
    // Delay the animation by 3 seconds
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