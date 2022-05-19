const langSelector = document.getElementById('langSelector');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

const hope_img = document.getElementById('hope_img');
const malteser_img = document.getElementById("malteser_img");
const nbu_img = document.getElementById("nbu_img");
const siepomaga_img = document.getElementById("siepomaga_img");
const voc_img = document.getElementById("voc_img");
const doctors_img = document.getElementById("doctors_img");
const pin_img = document.getElementById("pin_img");
const caritas_img = document.getElementById("caritas_img");
const hai_img = document.getElementById("hai_img");
const project_hope_img = document.getElementById("project_hope_img");
const unwfp_img = document.getElementById("unwfp_img");
const cow_img = document.getElementById("cow_img");


hope_img.style.backgroundImage  = `url("images/hope_img_1.jpg")`;
malteser_img.style.backgroundImage = `url("images/malteser_img_1.jpg")`;
nbu_img.style.backgroundImage = `url("images/nbu.jpg")`;
siepomaga_img.style.backgroundImage = `url("images/siepomaga_img_1.jpg")`;
voc_img.style.backgroundImage = `url("images/voc.jpg")`;
doctors_img.style.backgroundImage = `url("images/doctors.jpg")`;
pin_img.style.backgroundImage = `url("images/pin.jpg")`;
caritas_img.style.backgroundImage = `url("images/caritas.jpeg")`;
hai_img.style.backgroundImage = `url("images/hai.jpg")`;
project_hope_img.style.backgroundImage = `url("images/project_hope.jpg")`;
unwfp_img.style.backgroundImage = `url("images/unwfp.jpg")`;
cow_img.style.backgroundImage = `url("images/cow.jpg")`;


function ready(){
  for (let i = 0; i < document.querySelectorAll('.org_description_text').length; i++) {
    resizeText({
     element: document.querySelectorAll('.org_description_text')[i],
     parent: document.querySelectorAll('.org_description')[i]
    })
   }

   resizeText({
    element: document.querySelector('.text'),
    parent: document.querySelector('.description')
  })

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/helpukrainelist.com/PageVisits");
  xhr.responseType = "json";
  xhr.onload = function() {
      // console.log(this.response.value);
  }
  xhr.send();
}

function DOMLoad(){
  setTimeout(ready, 50);
}

const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight

const resizeText = ({ element, parent }) => {

  let i = 12;
  if(window.innerWidth < 600){
    i = 19 // let's start with 12px
  }

  let overflow = false
  const maxSize = 48 // very huge text size

  while (!overflow && i < maxSize) {
    element.style.fontSize = `${i}px`
    overflow = isOverflown(parent)
    if (!overflow) i++
  }

  // revert to last state where no overflow happened:
  element.style.fontSize = `${i - 2}px`
}

document.addEventListener("DOMContentLoaded", DOMLoad);