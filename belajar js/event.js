const button = document.getElementById('btn');

button.style.backgroundColor = 'skyblue';
button.style.padding = '10px';
button.style.border = 'none';
button.style.borderRadius = '5px';


button.addEventListener('submit', function(event){
    console.log(event);
    button.style.color = 'red';
});
