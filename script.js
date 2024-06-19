


const mytitle = document.querySelector('#main-heading');
mytitle.style.color ='red';
mytitle.style.backgroundColor = 'aqua';
console.log(mytitle);

const mylistitems = document.querySelectorAll('.list-items');

mylistitems.forEach(item => {
    item.style.fontSize = '20px';
});



//CREATING ELEMENTS
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.appendChild(li);
const listitems = document.querySelector('.list-items');
console.log(listitems.innerText);
console.log(listitems.textContent);
console.log(listitems.innerHTML);

li.innerText = 'X-men';

li.setAttribute('id','main-heading');