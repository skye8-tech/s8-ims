
'use strict'

    // Disable form submissions if there are invalid fields
const regform = document.getElementById('regform')
regform.addEventListener('submit', function(e){
    let myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
    e.preventDefault();
    myModal.toggle();
    
})



