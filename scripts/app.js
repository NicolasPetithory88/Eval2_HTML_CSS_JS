const btn_left = document.getElementById('btn_left');
const btn_right = document.getElementById('btn_right');
const btn_left2 = document.getElementById('btn_left2');
const btn_right2 = document.getElementById('btn_right2');
const btn_left3 = document.getElementById('btn_left3');
const btn_right3 = document.getElementById('btn_right3');
const btn_left4 = document.getElementById('btn_left4');
const btn_right4 = document.getElementById('btn_right4');
let img_carousel = document.getElementById('img_carousel');
let img_carousel2 = document.getElementById('img_carousel2');
let img_carousel3 = document.getElementById('img_carousel3');
let img_carousel4 = document.getElementById('img_carousel4');
let i=1;
let j=2;
let k=3;
let l=4;
let x=0;
let y=1;
let z=0;
const header = document.getElementsByTagName('header')[0];
const main = document.querySelector("main");
const burger = document.querySelector('.burger');
const menu_burger = document.getElementById('menu_burger');

// Header Carousel

var autoCarousel = () => {setTimeout(() => {
    var backgroundCollection = ['url("../img/background.jpg")','url("../img/agence.jpg")']
    header.style.backgroundImage = backgroundCollection[x];
    if(x==0){x+=1}else{x--}
        
    autoCarousel()
},5000);              
}

autoCarousel();


// Manuel Carousel

btn_left.addEventListener('click', () => {
    if(i<4){
        i++
    }
    else{
        i=1
    }
    img_carousel.src = `./img/${i}.png`;
});

btn_right.addEventListener('click', () => {
    if(i>1){
        i--
    }
    else{
        i=4
    }
    img_carousel.src = `./img/${i}.png`;
});

btn_left2.addEventListener('click', () => {
    if(j<4){
        j++
    }
    else{
        j=1
    }
    img_carousel2.src = `./img/${j}.png`;
});

btn_right2.addEventListener('click', () => {
    if(j>1){
        j--
    }
    else{
        j=4
    }
    img_carousel2.src = `./img/${j}.png`;
});

btn_left3.addEventListener('click', () => {
    if(k<4){
        k++
    }
    else{
        k=1
    }
    img_carousel3.src = `./img/${k}.png`;
});

btn_right3.addEventListener('click', () => {
    if(k>1){
        k--
    }
    else{
        k=4
    }
    img_carousel3.src = `./img/${k}.png`;
});

btn_left4.addEventListener('click', () => {
    if(l<4){
        l++
    }
    else{
        l=1
    }
    img_carousel4.src = `./img/${l}.png`;
});

btn_right4.addEventListener('click', () => {
    if(l>1){
        l--
    }
    else{
        l=4
    }
    img_carousel4.src = `./img/${l}.png`;
});



// Infinite scroll


document.addEventListener("DOMContentLoaded", () => {

let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0.95
};
const observer = new IntersectionObserver(DetectionFooter, options);
observer.observe(document.querySelector("footer"));

        
});
      
function DetectionFooter(entries) {
        if (entries[0].isIntersecting) {
          ChargeImages();
        }
      }
      
function ChargeImages() {
              let voitures =['Peugeot 208','Ford Focus','Audi A1','Opel Mokka']
              let div = document.createElement("DIV");
              let divName = document.createElement("h3");
              let img = document.createElement("img");
              div.classList.add("flex","column","align_center")
              img.src = `./img/${y}.png`;
              let name = voitures[y-1]
              img.alt = name;
              divName.textContent = name;
              div.appendChild(img);
              div.appendChild(divName);
              main.appendChild(div);
              y++
              if(y>=4){
                y=1
              }
            };


// Menu Burger
console.log(z);

burger.addEventListener("click", () => {
    switch (z) {
        case 0:
        menu_burger.classList.remove("display_none");
        z++;
        break;

        case 1:
        menu_burger.classList.add('display_none');
        z--;
    }         
})










