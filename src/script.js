'use strict'

const $weekBtn = document.querySelector('.id-archive');
let $currentWeek = document.querySelector('.id-active');

const clickWeekHandler = (e) => {
    e.target.classList.toggle('id-active');
    $currentWeek.classList.toggle('id-active');
    $currentWeek = e.target; // keep track of the current element.
}

$weekBtn.addEventListener('click', e => {clickWeekHandler(e)})