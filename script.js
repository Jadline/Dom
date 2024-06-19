//Dom Manipulation

//GetElementById
// const body = document.body;
const title = document.getElementById('main-heading');
console.log(title);

//GetElementByClassName()
const listitem = document.getElementsByClassName('list-items');
console.log(listitem);


//GetElementByTagName

const my_li = document.getElementsByTagName('li');
console.log(my_li)


//querySelector()
//selects the first item ggiven of the query selectors 
 const  container = document.querySelector('div');
 console.log(container);

 const containers = document.querySelectorAll('div');
 console.log(containers);



//querySelectorAll()



const mytitle = document.querySelector('#main-heading');
mytitle.style.color ='red';
mytitle.style.backgroundColor = 'aqua';
console.log(mytitle);

const mylistitems = document.querySelectorAll('.list-items');

mylistitems.forEach(item => {
    item.style.fontSize = '20px';
});

// for(i = 0,i < mylistitems.length,i++){
//     mylistitems.style.fontSize ='20px';
// }