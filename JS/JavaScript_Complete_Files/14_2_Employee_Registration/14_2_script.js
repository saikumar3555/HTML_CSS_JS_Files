var enameElement =document.querySelector('#ename');
var eageElement =document.querySelector('#eage');
var edesgElement =document.querySelector('#edesg');
var buttonElement=document.querySelector('#add-emp');

var ename=enameElement.value;
var eage=eageElement.value;
var edesg=edesgElement.value;
//table data import
var tsno=document.querySelector('#tsno');
var tsno=document.querySelector('#tname');
var tsno=document.querySelector('#tage');
var tsno=document.querySelector('#tdesg');

//table array

//array object creation
var array=[];

var snumber=0;

buttonElement.addEventListener('click',function () {

    var employee={

       sno,ename,eage,edesg

    };

 array.push(employee);
 snumber +=1;
 console.log(snumber);
 console.log(array[0]);


});
