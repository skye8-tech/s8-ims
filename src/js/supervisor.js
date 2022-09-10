<<<<<<< HEAD
import { logout } from "../utils.js";

document.querySelector('[data-logout]').addEventListener('click', logout);
=======
import { hisState, redirect } from "../routeUtils.js";
import { getRequest, logout } from "../utils.js";

// Templates
const $internCardT = document.querySelector("#i-c--temp");
const $s_temp = document.querySelector('#s--temp');
const $i_temp = document.querySelector("#i--temp");
 
// Root element
const $root = document.querySelector('[data-root]');
 
function populateSupervisor(datat, el) {
  const internDiv = $internCardT.content.cloneNode(true);
  const internCard = internDiv.querySelector("[data-intern-card]");
  const name = internDiv.querySelector("[data-intern-name]");
  const img = internDiv.querySelector("[data-intern-img]");

  name.textContent = datat.name;
  img.src = "https://picsum.photos/200";

  internCard.addEventListener("click", () => handleClickOnIntern(datat.id));

  el.append(internDiv);
}

/** 
 * @func
 * @name loadSupervisor load the logged in supervisor's details
 */
function loadSupervisor() {
  // Grab the logged supervisor's detail from the session
  const which_s = JSON.parse(sessionStorage.getItem('user_details')) || {};
  if (JSON.stringify(which_s) === '{}') return redirect(location.href, '/');
  document.title = `${which_s.name} supervisor | ims`;

  const $supervisor = $s_temp.content.cloneNode(true);
  // $root.append($supervisor);
  $root.replaceChildren($supervisor);
  // Since the dom has data-i--list grab it thus
  const $i_list = document.querySelector('[data-i--list]');

  // fetch all system users
  getRequest('users')
    .then(users => {
      // filter only the users having the same department as the logged supervisor
      users.filter(user => user?.department === which_s?.department).forEach(i => {
          populateSupervisor(i, $i_list);
        })
    }).catch(err => {
      console.log(err)
    })
}

document.querySelector("#data-logout").addEventListener("click", logout);

function loadInternDetails(id) {
  // Get the intern's template clone the intern template
    const internProfile = $i_temp.content.cloneNode(true);
    // 
    // Put the template on the dom
    window["supervisor"].replaceWith(internProfile)
    // grab the logbook book item list section
    const logbookList = document.querySelector('[data-day-list]');
    
    // fetch the interns logbook with the give id
    // grab the logbook item and clone this and populate it.
    getRequest('logbooks/' + id)
      .then(logs => {
        logs.data.forEach(log => logbookList.innerHTML += `<li>${log.content}</li>`)
      })
    
    // fetch the intern's details and populate the dom
    getRequest('users/' + id)
      .then(({user: u}) => {
        // Change the title of the page
        document.title = u.name;
        document.querySelector('[data-i-name]').innerText = u.name;
      })
}

function handleClickOnIntern(id) {
    // Load content for this page from the id
    loadInternDetails(id);
    // Store the route in the browser's history
    hisState(id, location.origin + '/intern/' + id);
}
window.onload = (event) => {
//   load the supervisor details when the page load
  loadSupervisor();
};

// Listen for PopStateEvent
// (Back or Forward buttons are clicked)
window.addEventListener("popstate", (event) => {
  // Grab the history state id
  if (!event.state) loadSupervisor();
  else loadInternDetails(event.state);
});
>>>>>>> main
