'use strict'

const list = document.querySelectorAll('.books');

// 1-ый пункт
const elem1 = document.querySelectorAll('.book')[0];
const elem2 = document.querySelectorAll('.book')[1];
const elem3 = document.querySelectorAll('.book')[2];
const elem4 = document.querySelectorAll('.book')[3];
const elem5 = document.querySelectorAll('.book')[4];
const elem6 = document.querySelectorAll('.book')[5];

// третий пункт
const task3 = document.querySelectorAll('.book [target="_blank"]')[4];

// 4-ый пункт
const adv = document.querySelector('.adv');

// 5-ый пункт
const li1 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[0];
const li2 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[1];
const li3 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[2];
const li4 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[3];
const li5 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[4];
const li6 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[5];
const li7 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[6];
const li8 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[7];
const li9 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[8];
const li10 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[9];
const li11 = document.querySelectorAll('.book')[5].querySelectorAll('ul > li')[10];

// 6-ой пункт
let newLi = document.createElement('li');
newLi.textContent = "Глава 8: За пределами ES6";
const Li1 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[0];
const Li2 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[1];
const Li3 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[2];
const Li4 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[3];
const Li5 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[4];
const Li6 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[5];
const Li7 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[6];
const Li8 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[7];
const Li9 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[8];
const Li10 = document.querySelectorAll('.book')[2].querySelectorAll('ul > li')[9];


// 1
elem1.before(elem2);
elem1.after(elem5);
elem6.after(elem3);

// 3
task3.textContent = 'Книга 3. this и Прототипы Объектов';

 // 4
adv.remove();

//5
li3.before(li10);
li3.before(li4);
li3.before(li5);
li6.before(li7);
li6.before(li8);

// 6
Li10.before(newLi);

