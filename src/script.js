import { postRequest, route } from "./utils.js";
// window.addEventListener('load', e => userIn)

// 'use strict'


// Disable form submissions if there are invalid fields
// const $weekBtn = document.querySelector('.id-archive');
// let $currentWeek = document.querySelector('.id-active');
// let $weekTitle = document.querySelector('#Week-title');

// const clickWeekHandler = (e) => {
//     e.target.classList.toggle('id-active');
//     $currentWeek.classList.toggle('id-active');
//     $weekTitle.textContent = e.target.textContent;
//     $currentWeek = e.target; // keep track of the current element.
// }
// $weekBtn.addEventListener('click', e => {clickWeekHandler(e)})


// Modal activation after validation
// const regform = document.getElementById('regform')
// regform.addEventListener('submit', function(e){
//     let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
//     e.preventDefault();
//     myModal.toggle();
    
// })


// /******** Login Logic */
const $loginForm = document.getElementById('login-form');

// console.log(loginDetails.get("name"))
// alert('niga')
const userIn = e => {
    console.log(e.target)
    const token = sessionStorage.getItem('user_token');
    let userDetails = sessionStorage.getItem('user_details');
    
    if (token && userDetails) { // Verify if user is still having the token?
        userDetails = JSON.parse(userDetails)
        console.log('niga in user')
        route('user_details', userDetails.id, userDetails.role); 
    } 
    if (!token) { // else make a login
        let myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
        // e.preventDefault();
        myModal.toggle();
    }

    console.log('niga out')
}

const login = (e) => {
    e?.preventDefault?.();
    const user = { 
        'username': $loginForm.email.value,
        'password': $loginForm.pswd.value
    }
    postRequest('login',  user)
        .then(data => {
            console.log(data);
            sessionStorage.setItem('user_token', JSON.stringify(data.token));
            sessionStorage.setItem('user_details', JSON.stringify(data.user))
            route('user_details', data.user.id, data.user.role);
        })
}
$loginForm.addEventListener('submit', login);


document.querySelector('#login-btn').addEventListener('click', userIn)