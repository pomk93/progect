"use strict";

let a = 15;
console.log(a);

console.log('-----------------');

let number = 5;

const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

var name = 'Ivan';

console.log('-----------------');

{
    let result = 50;
    var result2 = 60;
}

//console.log(result); //будет ошибка
console.log(result2); //будет 60

console.log('-----------------');
console.log('-----------------');

//02.Основы JavaScript -> 006 Классификация типов данных в JavaScript

 console.log('string' * 2);

 console.log('str'); 

 const obj2 = {
     name:"Jon",
     age: 18,
     isMarried: true 

 };

console.log(obj2.name);
console.log(obj2['name']);

let arr = ['plum.png', 'orange', 6, 'apple.bmp', {}, []];

console.log(arr[0]);

console.log('-----------------');
console.log('-----------------');

//02.Основы JavaScript -> 007 Простое общение с пользователем

//alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

console.log('-----------------');
console.log('-----------------');

//02.Основы JavaScript -> 008 Интерполяция
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Привет ${user}`);

console.log('-----------------');
console.log('-----------------');

//02.Основы JavaScript -> 009 Оператоы в js

console.log('arr' + "- object");
console.log(5 + +"7");

let incr = 10,
    decr = 10;

//Постфиксная форма записи
// incr++; 
// decr--;  
console.log(incr++);
console.log(decr--);
console.log(incr);
console.log(decr);

let incr2 = 5,
    decr2 = 5;

console.log(++incr2);
console.log(--decr2);

console.log(5%2);

console.log(2*4 == '8');
console.log(2*4 === '8');

const isChecked = true,
       isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);

console.log('-----------------');
console.log('-----------------');

//02.Основы JavaScript -> 010 Учимся работать с системной контроля версией Git и с сервисами GitHub

