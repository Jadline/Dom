const body = Document.body
body.append('hello World!');

// if you want to append an element to the page 
const div = document.createElement('div');
body.append(div);
div.innerText('hello world');