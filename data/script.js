


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

console.log(ul);
const li = document.createElement('li');
ul.append(li);

//modifying the text

li.innerText = 'X-men';

li.setAttribute('id','main-heading');
li.removeAttribute('id');

const title = document.querySelector('main-heading');

console.log(title.getAttribute('id'));