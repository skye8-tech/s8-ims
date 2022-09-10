<<<<<<< HEAD
import { getRequest, logout, route } from './../utils.js';
=======
import { getRequest, logout } from './../utils.js';
>>>>>>> main


let $supervisors = document.getElementById('supervisors');
let $internList = document.querySelector('[data-intern-list]');
let $userCard = document.getElementById('user-card');
let interns = document.getElementById('internsSw');

const $cardTemplate = document.getElementById('card-template');
const $internWithGroupingTemplate = document.getElementById('interns-department-template');


// ****** Get users
/**
 * 
 * @param {Object} OneCardCon the object representing a user
 * @param {HTMLdomElement} position the DOM element to insert the object title and img into
 */
const populateCard = (OneCardCon, position) => {
    const cardItem = $cardTemplate.content.cloneNode(true);
    cardItem.querySelector('[data-user-img]').src = 'https://picsum.photos/200';
    cardItem.querySelector('[data-user-name]').textContent = OneCardCon.name;

    cardItem.addEventListener('click', (e) => {
        route('users', OneCardCon.id, 'user');
    })
    position.append(cardItem)
}

const groupBy = (users, condition) => {
    return users.reduce((grouping, user) => {
        const key = condition(user)
        if (grouping[key] == undefined || grouping[key] == null) grouping[key] = [];
        grouping[key].push(user);

        return grouping;
    }, {})
} 

const populateWithGrouping = (cont) => {
    const groupIntern = $internWithGroupingTemplate.content.cloneNode(true);
    groupIntern.querySelector('[data-dep-title]').textContent = cont?.department || 'No Department Yet';
    $internList.append(groupIntern);
}

(function Sup() {
    getRequest('users').then(users => {
        // console.log($internList.firstElementChild)
        users && $supervisors.previousElementSibling.remove()
        
        // When the users are got, filter only the supervisors and populate their section
        const supervisors = users.filter(user => user.role === 'supervisour' || user.role === 'supervisor');
        
        if (supervisors.length === 0) {
            $supervisors.previousElementSibling.innerHTML += `<h2 class='lead text-center pt-3'>No Supervisors in the system </h2>`;
        } else {
            supervisors.forEach(supervisor => {
                populateCard(supervisor, $supervisors);
            })
        }
        
        // Group the users per department and return an object
        const usersPerDep = (groupBy(users.filter(user => user.role === 'user'), user => user.department));
        
        users && $internList.previousElementSibling.remove() // remove the loading element

        // Loop through the usersPerDep object and populate the DOM
        for (let dep in usersPerDep) {
            if (usersPerDep.hasOwnProperty(dep)) {
                populateWithGrouping(); // Create the group name
                
                // loop through the users in the given department.
                usersPerDep[dep].forEach(user => {
                    populateCard(user, document.querySelector('[data-dep-list]'))
                }) 
            }
        }
    })
})()


document.querySelector('[data-logout]').addEventListener('click', logout);