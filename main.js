let navBar = document.querySelector(".navbar-toggle");
let navBarMenu = document.querySelector(".navbar-menu");


navBar.addEventListener("click", function(){
    navBar.classList.toggle("active");
    navBarMenu.classList.toggle("is-active");
})



let persons = [{
    photo:"imageone1.jpg"
   
    
},
{
    photo:"imagetwo2.jpg"
   
   
},
{
    photo:"imagethree3.jpg"
  
   
},
{
    photo:"imagefour4.jpg"
   
}
];


let image = document.querySelector('.our-image');



let currentValue = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson();
});

setInterval(function(){
    currentValue++;
    if(currentValue === persons.length){
        currentValue = 0;
    }
    showPerson();
},4000);

function showPerson(){
    let item = persons[currentValue];
    image.src = item.photo;
 
  
}