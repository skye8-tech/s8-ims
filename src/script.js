'use strict'

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