//1
let exo1 = document.getElementsByTagName('div')[2].firstElementChild;
console.log(exo1);

//1 version dynamique 
// let long = document.getElementsByTagName('div').length-1;
// let exo1Bis = document.getElementsByTagName('div')[long].firstElementChild;
// console.log(exo1);

//2
let exo2 = document.getElementsByTagName('div')[2].lastElementChild;
console.log(exo2);

//3 loic method
// let exo3 = document.getElementsByTagName('div')[2].getElementsByTagName('p')[0];
// console.log(exo3.getElementsByTagName('i')[0]);

//3 junior method
let i = exo1.nextElementSibling.firstElementChild;
console.log(i);

//4 honneur a Mr.Hashimoto
let b = i.parentElement.nextElementSibling.firstElementChild;
console.log(b);

//5
let iII = b.parentElement.previousElementSibling;
console.log(iII);

//6
let exo6 = iII.nextElementSibling;
console.log(exo6);

//7
let exo7 = document.getElementsByTagName('div')[2].firstElementChild.nextElementSibling;
console.log(exo7);