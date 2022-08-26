
'use strict'

// Disable form submissions if there are invalid fields
const $weekBtn = document.querySelector('.id-archive');
let $currentWeek = document.querySelector('.id-active');
let $weekTitle = document.querySelector('#Week-title');

const clickWeekHandler = (e) => {
    e.target.classList.toggle('id-active');
    $currentWeek.classList.toggle('id-active');
    $weekTitle.textContent = e.target.textContent;
    $currentWeek = e.target; // keep track of the current element.
}
$weekBtn.addEventListener('click', e => {clickWeekHandler(e)})


// Modal activation after validation
const regform = document.getElementById('regform')
regform.addEventListener('submit', function(e){
    let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
    e.preventDefault();
    myModal.toggle();
    
})