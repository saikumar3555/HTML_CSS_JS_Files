var gaElement=document.querySelector('#gm');
var gfElement=document.querySelector('#gf');
var gmmElement=document.querySelector('#ge');
var gnElement=document.querySelector('#gn');
var h2Element=document.querySelector('h2')

gaElement.addEventListener('click',function () {
    wishMe('Good Morning','green');
});
function wishMe(msg,color) {

    h2Element.textContent=msg;
    h2Element.style.backgroundColor=color;
}


gfElement.addEventListener('click',function () {
    wishMe('Good Afternoon','red');
});

gmmElement.addEventListener('click',function () {
    wishMe('Good Evening','yellow');
});
gnElement.addEventListener('click',function () {
    wishMe('Good Night','lightsalmon');
});