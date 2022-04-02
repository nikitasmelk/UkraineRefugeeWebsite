// const langEl = document.querySelector('.langWrap');
// const link = document.querySelectorAll('a');
const langSelector = document.getElementById('langSelector');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

const hope_array = ["hope_img_1.jpg", "hope_img_2.jpg", "hope_img_3.jpg"];
const hope_img = document.getElementById('hope_img');
const hope_img_layer = document.querySelector('#hope_img .img_layer');


hope_img.style.backgroundImage  = `url("hope_img_1.jpg")`;
console.log(window.getComputedStyle(hope_img_layer).getPropertyValue("opacity"));

console.log(hope_img_layer)

const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight

const resizeText = ({ element, parent }) => {
  let i = 12 // let's start with 12px
  let overflow = false
  const maxSize = 48 // very huge text size

  while (!overflow && i < maxSize) {
    element.style.fontSize = `${i}px`
    overflow = isOverflown(parent)
    if (!overflow) i++
  }

  // revert to last state where no overflow happened:
  element.style.fontSize = `${i - 1}px`
}

resizeText({
  element: document.querySelector('.text'),
  parent: document.querySelector('.description')
})

// let org_description_texts = document.querySelectorAll('.org_description_text');
// let org_description_boxes = document.querySelectorAll('.org_description');

for (let i = 0; i < document.querySelectorAll('.org_description_text').length; i++) {
 resizeText({
  element: document.querySelectorAll('.org_description_text')[i],
  parent: document.querySelectorAll('.org_description')[i]
 })
}

const changeImage = (image, array) => {

// 	console.log('*************')
// 	console.log(image)
//  console.log(window.getComputedStyle(image).getPropertyValue("backgroundImage"));
//  console.log(`url(${array[0]})`)

 if(image.style.backgroundImage == `url("${array[0]}")`) {
  image.style.backgroundImage = `url("${array[1]}")`
 } else if (image.style.backgroundImage == `url("${array[1]}")`) {
  image.style.backgroundImage = `url("${array[2]}")`
 } else {
  image.style.backgroundImage = `url("${array[0]}")`
 }

}

// function fadeInAndOut(el) {

//  // let el_opacity = el.style.opacity;
//  // el.style.opacity = 1;

//  fadeIn(el)

//  while(window.getComputedStyle(el).getPropertyValue("opacity") > 0.5){
//   el.style.opacity = window.getComputedStyle(el).getPropertyValue("opacity") - 0.01;
//   setTimeout(10);
//  }
//  // console.log(window.getComputedStyle(el).getPropertyValue("opacity"));

// }

function fadeIn(el) {
 // console.log('fadeIn')
 // console.log(window.getComputedStyle(el).getPropertyValue("opacity"))
 console.log('--fadeIn--')
 console.log(window.getComputedStyle(el).getPropertyValue("opacity"))

 if(parseFloat(window.getComputedStyle(el).getPropertyValue("opacity")) < 1){
  el.style.opacity = parseFloat(window.getComputedStyle(el).getPropertyValue("opacity")) + 0.01;

  // console.log(window.getComputedStyle(el).getPropertyValue("opacity"))
  setTimeout(function() {fadeIn(el)}, 1);
 } else {
  changeImage(hope_img, hope_array);
  fadeOut(el);
 }
}

function fadeOut(el){
 // console.log('fadeOut')
 if(parseFloat(window.getComputedStyle(el).getPropertyValue("opacity")) > 0.5){
  el.style.opacity = parseFloat(window.getComputedStyle(el).getPropertyValue("opacity")) - 0.01;
  setTimeout(function() {fadeOut(el)}, 1);
 }
}

// hope_img.addEventListener("click", changeImage(hope_img, hope_array));

function handleHopeClick() {
 fadeIn(hope_img_layer);
 // setTimeout(changeImage(hope_img, hope_array), 2000);
}

// for (let i = 0; i < org_description_boxes.length; i++) {
//  console.log(org_description_texts[i])
//  console.log(org_description_boxes[i])
//  resizeText({
//   element: org_description_texts[i],
//   parent: org_description_boxes[i]
//  })
// }

// //Change Language
// function langChange(){
//  titleEl.textContent = data[langSelector.value].title;
//  descrEl.textContent = data[langSelector.value].description;
// }
// var data = {
//   "english": 
//   {
//    "title": "Ukranian Refugee Help",
//    "description": 
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat."
//   },
//   "ukranian": 
//   {
//    "title": "Допомога українським біженцям",
//    "description": 
//     "Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы ұннан таңдамаңыз, сондықтан аз Осы ауырсынуды орындаңыз. Қызметтер жоқ және оның айырмашылығын ұлы ыңғайсыздық таңдау, тәжірибе ретінде қабылданған ештеңе өңдеу үшін нәтиже инцидент және қателіктерді зерттеуші ләззат, өмір, encounter born сияқты үлкен тағамдар-бәрі! Осы мәселе бойынша біздің сабоның кейбірін ашу, зерттеуші дұрыс! Дана, біз asperiores туған қызметтер тізімі деді олардың жұмыс, кез келген уақытта, содан бері үлкен жүгірістер, соның ішінде ләззат немесе рахат өңдеу сұраймыз. Қашуға."
//   },
//   "russian": 
//   {
//    "title": "Помощь украинским беженцам",
//    "description": 
//     "ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。."
//   },
//   "polish": 
//   {
//    "title": "Pomoc dla ukraińskich uchodźców",
//    "description": 
//     "Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы らの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。."
//   }
//  }