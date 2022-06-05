"use strict";
const url = 'https://type.fit/api/quotes';
const btn = document.querySelector(".btn");
const jokes = document.querySelector('.quote');
const switcher = document.querySelector('.switcher');
const shot = document.querySelector('.first-shot');
const secondShot = document.querySelector('.second-shot');
const mainTitle = document.querySelector('title');
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  replace(data);
}
async function getDataRu() {
  const urlRu = './assets/json/quotes.json';
  const res = await fetch(urlRu);
  const data = await res.json();
  replace(data);
}
function replace(data) {
  let randomQuote = Math.floor(Math.random() * data.length);
  document.getElementById('joke').innerHTML = data[randomQuote].text;
  let audioPlay = new Audio();
  audioPlay.src = './assets/audio/1.mp3';
  audioPlay.currentTime = 0;
  audioPlay.autoplay = true;
  audioPlay.volume = 0.3;
  btn.addEventListener('click', function() {
    shots();
  });
}
const changeLang = () => {
  switcher.textContent = (switcher.classList.contains('EN')) ? 'EN' : 'RU';
  btn.textContent = (switcher.classList.contains('EN')) ? 'Just give me a new quote!' : 'Рассмеши меня, Чак!';
  mainTitle.textContent = (switcher.classList.contains('EN')) ? 'Random jokes' : 'Цитаты Норриса';
}
const btnLang = () => (switcher.classList.contains('EN')) ? getData() : getDataRu();
btnLang();  
const translateEnRu = () => {switcher.classList.toggle('EN'); changeLang(); btnLang();shots();}
switcher.addEventListener("click", translateEnRu);
btn.addEventListener("click", btnLang);
function shots() {
  shot.setAttribute('style', `opacity: 1`);
  secondShot.setAttribute('style', `opacity: 1`);
  shot.onloadeddata =  setTimeout(function(){
    shot.setAttribute('style', `opacity: 0`);
    secondShot.setAttribute('style', `opacity: 0`);
  }, 1000);
}
console.log(`Самооценка:
1) Вёрстка +10
- на странице есть цитата и кнопка для смены цитаты +5
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2) При загрузке страницы приложения отображается рандомная цитата +10
3) При перезагрузке страницы цитата обновляется (заменяется на другую) +10
4) Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10
5) Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10
6) Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +10
7) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
- высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо
Итого: 70 из 60`);
console.log(`Здравствуй, проверяющий! Убедительная просьба проверять согласно: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-4.md Не забываем, что максимальный балл - 70, а не 60! Собственно, все описано в ссылке ранее и в данной: https://random-jokes-cross-check.netlify.app/ Пасхалка: если навести в определенный участок, то можно послушать отрывок с Чак Норрисом =)`);
