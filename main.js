let navBar = document.querySelector(".navbar-toggle");
let navBarMenu = document.querySelector(".navbar-menu");


navBar.addEventListener("click", function(){
    navBar.classList.toggle("active");
    navBarMenu.classList.toggle("is-active");
})



//   rotating banner code.

let firstImage = document.getElementById("first-image");
let secondImage = document.getElementById("second-image");
let thirdImage = document.getElementById("third-image");
let fourthImage = document.getElementById("fourth-image");
let fifthImage = document.getElementById("fifth-image");

let currentImage = 0;


window.addEventListener("DOMContentLoaded", function() {
    bannerImageSlider();
});

setInterval(function() {
        bannerImageSlider();
   
}, 4000); 

function bannerImageSlider () {
    if(currentImage === 0){
        firstImage.style.transform = "translateX(0)";
        secondImage.style.transform = "translateX(101%)";
        thirdImage.style.transform = "translateX(201%)";
        fourthImage.style.transform = "translateX(301%)";
        fifthImage.style.transform = "translateX(401%)";

        currentImage = 1;

    }else if (currentImage === 1) {
        firstImage.style.transform = "translateX(-101%)";
        secondImage.style.transform = "translateX(0)";
        thirdImage.style.transform = "translateX(101%)";
        fourthImage.style.transform = "translateX(201%)";
        fifthImage.style.transform = "translateX(301%)";
        
        currentImage = 2;

    }else if (currentImage === 2) {
        firstImage.style.transform = "translateX(-201%)";
        secondImage.style.transform = "translateX(-101%)";
        thirdImage.style.transform = "translateX(0)";
        fourthImage.style.transform = "translateX(101%)";
        fifthImage.style.transform = "translateX(201%)";

        currentImage = 3;

    }else if (currentImage === 3) {
        firstImage.style.transform = "translateX(-301%)";
        secondImage.style.transform = "translateX(-201%)";
        thirdImage.style.transform = "translateX(-101%)";
        fourthImage.style.transform = "translateX(0)";
        fifthImage.style.transform = "translateX(101%)";

        currentImage = 4;

    }else if (currentImage === 4) {
        firstImage.style.transform = "translateX(-401%)";
        secondImage.style.transform = "translateX(-301%)";
        thirdImage.style.transform = "translateX(-201%)";
        fourthImage.style.transform = "translateX(-101%)";
        fifthImage.style.transform = "translateX(0)";

        // where i stopped
         
        // currentImage = 0;
        currentImage = 5;
    }
      
    else if(currentImage === 5){
        firstImage.style.transform = "translateX(-301%)";
        secondImage.style.transform = "translateX(-201%)";
        thirdImage.style.transform = "translateX(-101%)";
        fourthImage.style.transform = "translateX(0)";
        fifthImage.style.transform = "translateX(101%)";

        currentImage = 6;

    }

    else if(currentImage === 6){
        firstImage.style.transform = "translateX(-201%)";
        secondImage.style.transform = "translateX(-101%)";
        thirdImage.style.transform = "translateX(0)";
        fourthImage.style.transform = "translateX(101%)";
        fifthImage.style.transform = "translateX(201%)";

        currentImage = 7;
    }


    else if(currentImage === 7){
        firstImage.style.transform = "translateX(-101%)";
        secondImage.style.transform = "translateX(0)";
        thirdImage.style.transform = "translateX(101%)";
        fourthImage.style.transform = "translateX(201%)";
        fifthImage.style.transform = "translateX(301%)";

        currentImage = 8;
    }

    else if(currentImage === 8){
        firstImage.style.transform = "translateX(0)";
        secondImage.style.transform = "translateX(101%)";
        thirdImage.style.transform = "translateX(201%)";
        fourthImage.style.transform = "translateX(301%)";
        fifthImage.style.transform = "translateX(401%)";

        currentImage = 0;
    }



   
}