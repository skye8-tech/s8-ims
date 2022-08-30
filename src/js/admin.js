import { logout } from './../utils.js';


let $userCard = document.getElementById('user-card');
// ****** Get users

fetch('https://s8-ims-api.herokuapp.com/api/users')
.then(res => {
    console.log(res.ok)
    return res.json();
}).then(dt => {
    console.log(dt)
    populate(dt)
})

let $supervisors = document.getElementById('supervisors');

function populate(users) {
    let fragment = new DocumentFragment();
    
    users.map(user => {
        const div = document.createElement("div");
        div.classList.add('col-2', 'align-admins');
        div.setAttribute('id', user.id);
        let $card = $userCard.content.cloneNode(true);
        let $img = $card.getElementById('user-img');
        let $title = $card.getElementById('user-link');
        
        $img.src = 'https://picsum.photos/200';
        $title.innerText = user.name;

        div.appendChild($img);
        div.appendChild($title);

        div.addEventListener('click', (e) => {
            const id = e.currentTarget.closest('.align-admins').getAttribute('id');

            console.log(id)
            console.log(window.location)
            window.location.href = window.location.href + "/src/pages/admin-detail.html"
        })
        fragment.appendChild(div)
    })

    $supervisors.append(fragment);
}


let swCard = document.getElementById('sw-card');

fetch('https://s8-ims-api.herokuapp.com/api/users')
.then(res => {
    console.log(res.ok);
    return res.json();
}).then(dt => {
    console.log(dt);
    fill(dt);
})

let interns = document.getElementById('internsSw');

function fill(swUsers) {
    let fragment = new DocumentFragment();

    swUsers.map(swUser => {
        const div = document.createElement("div");
        div.classList.add('col-2', 'align-admins');
        div.setAttribute('id', swUser.id);

        let card = swCard.content.cloneNode(true);
        let swImg = card.getElementById('sw-img');
        let swTitle = card.getElementById('sw-link');

        swImg.src = 'https://picsum.photos/200';
        swTitle.innerText = swUser.name;

        div.appendChild(swImg);
        div.appendChild(swTitle);

        div.addEventListener('click', (e) => {
            const id = e.currentTarget.closest('.align-admins').getAttribute('id');

            console.log(id)
            console.log(window.location)
            window.location.href = window.location.href + "/src/pages/admin-detail.html"

        })

        fragment.appendChild(div);

    })

    interns.append(fragment);
}


let dmCard = document.getElementById('dm-card');

fetch('https://s8-ims-api.herokuapp.com/api/users')
.then(res => {
    console.log(res.ok);
    return res.json();
}).then(dt => {
    console.log(dt);
    complete(dt);
})

let internsDm = document.getElementById('internsDm');

function complete(dmUsers) {
    let fragment = new DocumentFragment();

    dmUsers.map(dmUser => {
        const div = document.createElement("div");
        div.classList.add('col-2', 'align-admins');
        div.setAttribute('id', dmUser.id);

        let cards = dmCard.content.cloneNode(true);
        let dmImg = cards.getElementById('dm-img');
        let dmTitle = cards.getElementById('dm-link');

        dmImg.src = 'https://picsum.photos/200';
        dmTitle.innerText = dmUser.name;

        div.appendChild(dmImg);
        div.appendChild(dmTitle);

        div.addEventListener('click', (e) => {
            const id = e.currentTarget.closest('.align-admins').getAttribute('id');

            console.log(id)
            console.log(window.location)
            window.location.href = window.location.href + "/src/pages/admin-detail.html"

        })

        fragment.appendChild(div);

    })

    internsDm.append(fragment);
}
document.querySelector('[data-logout]').addEventListener('click', logout);
