// const langEl = document.querySelector('.langWrap');
// const link = document.querySelectorAll('a');
const langSelector = document.getElementById('langSelector');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

function fitText(outputSelector){
	// max font size in pixels
	const maxFontSize = 50;
	// get the DOM output element by its selector
	let outputDiv = document.getElementById(outputSelector);
	// get element's width
	let width = outputDiv.clientWidth;
	// get content's width
	let contentWidth = outputDiv.scrollWidth;
	// get fontSize
	let fontSize = parseInt(window.getComputedStyle(outputDiv, null).getPropertyValue('font-size'),10);
	// if content's width is bigger then elements width - overflow
	if (contentWidth > width){
			fontSize = Math.ceil(fontSize * width/contentWidth,10);
			fontSize =  fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize - 1;
			outputDiv.style.fontSize = fontSize+'px';   
	}else{
			// content is smaller then width... let's resize in 1 px until it fits 
			while (contentWidth === width && fontSize < maxFontSize){
					fontSize = Math.ceil(fontSize) + 1;
					fontSize = fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize;
					outputDiv.style.fontSize = fontSize+'px';   
					// update widths
					width = outputDiv.clientWidth;
					contentWidth = outputDiv.scrollWidth;
					if (contentWidth > width){
							outputDiv.style.fontSize = fontSize-1+'px'; 
					}
			}
	}
}

// fitText("description");

// //Change Language
// function langChange(){
// 	titleEl.textContent = data[langSelector.value].title;
// 	descrEl.textContent = data[langSelector.value].description;
// }

// var data = {
// 		"english": 
// 		{
// 			"title": "Ukranian Refugee Help",
// 			"description": 
// 				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat."
// 		},
// 		"ukranian": 
// 		{
// 			"title": "Допомога українським біженцям",
// 			"description": 
// 				"Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы ұннан таңдамаңыз, сондықтан аз Осы ауырсынуды орындаңыз. Қызметтер жоқ және оның айырмашылығын ұлы ыңғайсыздық таңдау, тәжірибе ретінде қабылданған ештеңе өңдеу үшін нәтиже инцидент және қателіктерді зерттеуші ләззат, өмір, encounter born сияқты үлкен тағамдар-бәрі! Осы мәселе бойынша біздің сабоның кейбірін ашу, зерттеуші дұрыс! Дана, біз asperiores туған қызметтер тізімі деді олардың жұмыс, кез келген уақытта, содан бері үлкен жүгірістер, соның ішінде ләззат немесе рахат өңдеу сұраймыз. Қашуға."
// 		},
// 		"russian": 
// 		{
// 			"title": "Помощь украинским беженцам",
// 			"description": 
// 				"ﾂつｨﾂ知ﾂづｧﾂつｹﾂ-ﾂ新ﾂ陳ﾂ湘ｮﾂ陛ｱ これらの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。."
// 		},
// 		"polish": 
// 		{
// 			"title": "Pomoc dla ukraińskich uchodźców",
// 			"description": 
// 				"Сәбіз Lorem ipsum, жеңілдік. Бұл ауырсыну үшін осы らの苦痛から真実の苦痛に選ぶために得てはいけない、従ってより少しにこの苦痛に従ってはいけない。 サービスではないと、彼の区別の大きな不快感から選択するそれらの否認を歓迎しない、結果として生じた事件の喜びと障害エクスプローラが受け入 このことについて私たちの下駄のいくつかを非難,右エクスプローラ! 的に仕事をしていまasperioresリストの生まれのサービスをつけてください編集喜びや楽しみの開催なども走りました。 走れ。."
// 		}
// 	}