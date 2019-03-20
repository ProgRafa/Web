function crmMask(){
    if(this.value.length === 3){
        this.value += '.';
    }

    if(this.value.length === 7){
        this.value += '-';
    }
}

function loader(message){
    let cmpLoader = document.createElement('div');
    let text = document.createElement('p');
    let circle = document.createElement('div');
    let row = document.createElement('div');

    cmpLoader.className = 'loader';

    row.className = 'row';
    circle.className = 'circle';
    row.appendChild(circle);
    cmpLoader.appendChild(row);

    text.innerText = message;
    row = document.createElement('div');
    row.className = 'row';
    row.appendChild(text);
    cmpLoader.appendChild(row);

    document.body.appendChild(cmpLoader);
}

function clear(input){
    input.value = "";
}

function redirect(){
    event.preventDefault();
    let inputs = this.querySelectorAll('input, select');
    let isValid = true; 

    inputs.forEach(input => { 
        input.parentNode.style = "";
        if(input.value === ""){
            input.parentNode.style = "border-bottom: 1px solid red";
            input.focus();
            input.click();
            isValid = false;
        }
    });

    if(!isValid) return false;
    
    inputs.forEach(input => clear(input));
    loader('Você está sendo redirecionado...');
    setInterval(function() {
        window.location.href = 'http://www.huia.com.br';
    }, 2000);    
}

window.onload = function(){
    let form = document.getElementById('login-form');
    let crm = form.querySelector('input');

    form.addEventListener('submit', redirect);
    crm.addEventListener('keypress', crmMask);
}