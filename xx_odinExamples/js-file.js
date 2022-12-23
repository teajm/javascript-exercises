const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.cssText = "color:red";
para.textContent = "Hey I'm Red!";
container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.cssText = "color:blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div  =  document.createElement("div");
const para2 = document.createElement("para");
const h1 = document.createElement("h1");
div.appendChild(h1);
div.appendChild(para2);
h1.textContent = "I'm in a div";
para2.textContent = "ME TOO";

container.appendChild(div);

const btn = document.querySelector("#btn");
// btn.addEventListener('click', () => {
//     alert("hey.!");
// });
btn.addEventListener('click', alertFunction);
function alertFunction() {
    alert ("yay I did it!");
}

btn.addEventListener('click', function(e){
    console.log(e);
});
btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
let i = 0;
btn.addEventListener('click', function(e){

    if (i % 2 == 0){
        e.target.style.background = 'blue';
    }
    else{
        e.target.style.background = 'orange'; 
    }
    i++;
    

});