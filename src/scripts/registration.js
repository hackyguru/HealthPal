const {
    ipcRenderer
} = require('electron');

const cta = document.querySelector('#cta');

cta.addEventListener('click', function() {
    ipcRenderer.send('Registration-cta');
});

const height = (document.getElementById('firstName').value);
const weight = (document.getElementById('email').value);
console.log(height+""+weight);
const bmi = (document.getElementById('confirmPassword'));
let cta1= document.querySelector("#cta1"); 
  

    
   
cta1.addEventListener("click", calculateBMI); 


function calculateBMI(){
    if(height===''||isNaN(height)){
        bmi.innerHTML="Provide a valid height"
    }
    else if(weight===''||isNaN(weight)){
        bmi.innerHTML="Provide a valid weight"
    }
    else{
        let bmic=(weight/((height*height)/10000)).toFixed(2)
        if(bmic<18.6){
            bmi.innerHTML=`Under weight :<span>${bmic}</span>`
        }else if(bmic>=18.6 && bmic <24.9){
            bmi.innerHTML=`Normal :<span>${bmic}</span>`
        }else{
            bmi.innerHTML=`Over weight :<span>${bmic}</span>`
        }
    }
}
// import {
//     signUp,
//     logIn,
//     logOut
// } from '../scripts/firebase/auth.js';

// const title = document.querySelector('#title');
// const subtitle = document.querySelector('#subtitle');
// const cta = document.querySelector('#cta');
// const switchButton = document.querySelector('#switch-type');
// const row1 = document.querySelector('#row-1');
// const row3 = document.querySelector('#row-3');



// const texts = {
//     true: {
//         'title': 'Sign Up for Upright',
//         'subtitle': 'Fill out the fields below to create your Upright account.',
//         'cta': 'Sign Up',
//         'switchText': 'Already have an account? Log In'
//     },
//     false: {
//         'title': 'Log into Upright',
//         'subtitle': 'Enter your email and password to sign into your Upright account.',
//         'cta': 'Log In',
//         'switchText': 'No account yet? Sign Up'
//     }
// }

// var isSignUp = true;

// function registrationLogIn() {
//     const email = emailField.value;
//     const password = passwordField.value;

//     logIn(email, password, function(userData) {
//         console.log('Successfully logged in ', userData);
//         ipcRenderer.send('registered', userData);
//     });
// }

// function registrationSignUp() {
//     const firstName = firstNameField.value;
//     const lastName = lastNameField.value;
//     const email = emailField.value;
//     const password = passwordField.value;
//     const passwordConfirmation = confirmPasswordField.value;

//     if (password != passwordConfirmation) {
//         alert('Passwords do not match');
//         return;
//     }

//     signUp(email, password, {
//         firstName,
//         lastName
//     }, function(userData) {
//         console.log('Succesfully signed up ', userData);
//         ipcRenderer.send('registered', userData);
//     })
// }

// switchButton.addEventListener('click', function () {
//     isSignUp = !isSignUp;
//     title.innerHTML = texts[isSignUp]['title'];
//     subtitle.innerHTML = texts[isSignUp]['subtitle'];
//     cta.innerHTML = texts[isSignUp]['cta'];
//     switchButton.innerHTML = texts[isSignUp]['switchText'];
//     row1.style.display = isSignUp ? 'flex' : 'none';
//     row3.style.display = isSignUp ? 'flex' : 'none';
//     console.log(isSignUp);
// });

// cta.addEventListener('click', function () {
//     if (isSignUp) {
//         registrationSignUp();
//     } else {
//         registrationLogIn();
//     }
// })