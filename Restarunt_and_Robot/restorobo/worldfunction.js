




 alert('hi');


 swirly.addEventListener('click', function(){


 	alert('Hello World');
 });



 document.getElementById("swirly").addEventListener("mouseover", changeWord);

function changeWord() {
    

    document.getElementById('swirly').innerHTML = 'Hello Planet';
}