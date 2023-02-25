const headingColor = ['red', 'rebeccapurple', 'blueviolet', 'azure', 'aliceblue', "burlywood", 'cornflowerblue', 'cyan', 'whitesmoke', '#24EDD5'];
const bgColor = ['lighcoral', 'aquamarine', 'aqua', 'crimson', 'darkorange', 'darkorchid', 'deeppink', 'firebrick', 'fuschia'];

const body = document.querySelector('main');
const heading = document.querySelector('#heading');
const para = document.querySelector('#para');


let randomHeaderColor = Math.floor(Math.random() * headingColor.length);
heading.style.color = headingColor[randomHeaderColor]; 


let randomBgColor = Math.floor(Math.random() * bgColor.length);
body.style.backgroundColor = bgColor[randomBgColor];

