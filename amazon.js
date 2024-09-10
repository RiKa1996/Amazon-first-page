/* yha humne btn area ko connect kiya hai.-- by slide-btn-left and slide-btn-right */
let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let heroSection = document.querySelectorAll(".hero-section")

console.log(heroSection.length-1)

let startSlider=0
let endSlider=(heroSection.length - 1) * 100 //700
slideBtnLeft.addEventListener("click",()=>{
    if(startSlider < 0){
        startSlider = startSlider + 100;

    }
    /**0   -700
    -100    -700
    console.log(startSlider)**/

    heroSection.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })})



slideBtnRight.addEventListener("click",()=>{
    
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
    }
    /**0   -700
    -100    -700
    console.log(startSlider)**/

    heroSection.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
})