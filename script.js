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