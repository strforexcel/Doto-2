let button = document.getElementById('button');
// console.log(button);

button.addEventListener('click', function(){
    let usernameElement = document.querySelector('#username');
    let username = usernameElement.value;
    let password = document.querySelector('#pass').value;
    let country = document.querySelector('#country').value;

    let email = document.querySelector('#email').value;

    let error = '';

    if(username === ''){
        error = 'Please fill the Username section!';
    }
    else if(username.length <= 5){
        error = 'Username length must be more than 5!';
    }
    else if(password === ''){
        error = 'Please fill the Password section!'
    }
    else if(email === ''){
        error = 'Please fill the Email section!';
    }
    else if(email.endsWith('@gmail.com') == false){
        error = 'Use with @gmail.com'
    }
    else if(country === ''){
        error = 'Please fill the Country section!'
    }
    
    if(error !== ''){
        alert(error);
    }else{
        alert('Success!');
    }
});