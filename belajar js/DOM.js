/*
// document.getElementById; => Element 
const judul = document.getElementById('judul'); // untuk mengambil ID judul
judul.style.backgroundColor = 'red'; // untuk mengubah style css
judul.innerHTML = 'kontol'; // untuk mengubah isi HTML

// document.getElementsByTagName => HTMLcollection 
const h1 = document.getElementsByTagName('h1'); // untuk mengambil tagName h1
h1[0].style.color = 'grey'; // jika terdapat lebih dari satu tagName maka menggunakan index [i]

// document.getElementsByClassName => HTMLcollection
const p1 = document.getElementsByClassName('p1'); // untuk mengambil ClassName h1
p1[0].style.fontSize = '40px';  // jika terdapat lebih dari satu className maka menggunakan index [i]

*/

//document.querySelector
// const p = document.querySelector('p');
// p.style.color = 'skyblue';

// const li = document.querySelector('#b ul li:nth-child(2');
// li.style.backgroundColor = 'green';

// // document.querySelectorAll();
// const p = document.querySelectorAll('p');
// for (let i = 0; i < i.length; i++) {
//         p[i].style.backgroundColor = 'yellow';
// }

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('wokwokwokw');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const liLo = document.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, liLo);