var element1 = document.getElementById('navi');
var element2 = document.getElementById('header1');
var element3 =document.getElementById('footer1');       
var element6 =document.getElementById('logindiv');       
var element5 =document.getElementById('introdiv');   
var element4 =document.getElementById('links');

var button1 = document.getElementById('yellow');
 
var button2 = document.getElementById('pink');
var button3 = document.getElementById('skyblue');
 
 
function changeskyblue() {
element1.style.backgroundColor='rgba(134, 203, 255, 0.885)';
 element2.style.backgroundColor='rgba(134, 203, 255, 0.885)';
 element3.style.backgroundColor='rgba(134, 203, 255, 0.885)';
 element4.style.backgroundColor='rgba(224, 239, 255, 0.885)';
 element5.style.backgroundColor='rgba(224, 239, 255, 0.885)';
 element6.style.backgroundColor='rgba(224, 239, 255, 0.885)';
        
 }

 function changepink() {
    element1.style.backgroundColor="pink";
    element2.style.backgroundColor='pink';
    element3.style.backgroundColor='pink';      
    element4.style.backgroundColor='rgb(255, 219, 244)';
    element5.style.backgroundColor='rgb(255, 219, 244)'; 
    element6.style.backgroundColor='rgb(255, 219, 244)'; 
     
     }
     
function changeyellow() {
    element1.style.backgroundColor='rgba(255, 227, 70, 0.885)';
    element2.style.backgroundColor='rgba(255, 227, 70, 0.885)';
    element3.style.backgroundColor='rgba(255, 227, 70, 0.885)';
    element4.style.backgroundColor='rgba(255, 249, 210, 0.968)';
    element5.style.backgroundColor='rgba(255, 249, 210, 0.968)'; 
    element6.style.backgroundColor='rgba(255, 249, 210, 0.968)';    
     
     }

                
   
button1.addEventListener('click', changeyellow);
button2.addEventListener('click', changepink);

button3.addEventListener('click', changeskyblue);
                