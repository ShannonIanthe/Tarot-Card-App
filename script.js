document.getElementsByClassName('square').onclick = grey;
document.getElementsByClassName("circle").onclick = yellow;
document.getElementsByClassName("triangle").onclick = pink;


//navbar
function show() {
    //open
    document.querySelector('.hamburger').classList.toggle('open')
    //active
    document.querySelector('.navigation').classList.toggle('active')
}

//page color change 
function grey(){
    document.querySelector('body').style.backgroundColor ='rgba(108, 122, 137)'
    document.querySelector('body').style.color = 'black';
}

function yellow(){
    document.querySelector('body').style.backgroundColor ='pink'
    document.querySelector('body').style.color = 'white'
}

function pink() {
    document.querySelector('body').style.backgroundColor = 'rgba(255,234,162)'
    document.querySelector('body').style.color = 'black'
}

// API
