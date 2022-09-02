import { getRequest, logout } from "../utils.js";


const internTemplate = document.querySelector('#intern-template');
const $internList = document.querySelector('[data-intern-list]');

function populate(datat) {
    const internDiv = internTemplate.content.cloneNode(true);
    const name = internDiv.querySelector('[data-intern-name]');
    const img = internDiv.querySelector('[data-intern-img]');


    name.textContent = datat.name;
    img.src = "https://picsum.photos/200";


    $internList.append(internDiv);


}

getRequest('users')
    .then(data => {
        console.log(data)
        data.filter(data => data.role == 'user').forEach(dt => {
            populate(dt);
        })
    }).catch(err => {

    })




document.querySelector('#data-logout').addEventListener('click', logout);