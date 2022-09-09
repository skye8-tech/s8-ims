const baseurl = "https://s8-ims-api.herokuapp.com/api";
// const baseurl = 'localhost:3010'

export function getRequest(resource) {
    return fetch(`${baseurl}/${resource}`)
        .then(res => {
            if (!res.ok) throw Error(`Error code status: ${res.statusText}`)
            return res.json();
        })
}
export function postRequest(resource, data) {
    return fetch(`${baseurl}/${resource}`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }).then(res => {
        // console.log(res)
        if(!res.ok) throw Error(res.statusText);
        return res.json()
    })
}
export function putRequest(resource, id, data) {
    if (typeof id  != "number") throw Error('The id is not accessible/not a number');
<<<<<<< HEAD

=======
>>>>>>> main
    return fetch(`${baseurl}/${resource}/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-type': 'application/json' },
        body : JSON.stringify(data)
    }) 
        .then(res => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
}
export function deleteRequest(resource) {
    return fetch(`${baseurl}/${resource}/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-type': 'application/json'}
    }).then(res => {
        if (!res.ok) throw Error(res.statusText);
<<<<<<< HEAD
    })
}

const pathFinder = () => {

    return {id, role, user}
}




=======
        return res.json();
    })
}

>>>>>>> main
export function logout () {
    location.assign(location.origin)
    sessionStorage.clear();
}

<<<<<<< HEAD

/** 
 * @func 
 * @name route collects a list of params
 * @param {string} user 
 * @param {string} id id defines the users id to use for a fetch request
 * @param {string} role used for routing to the different dashboards
 */
export function route(...to) {
    const pathParts = ['?user=', '&id=', '&role='];

    /** construct a path link so ?user=user&id=4&role=admin */
    let path = to.map((param, ind) => (pathParts[ind] + param)).join('');

    let url = new URL(window.location.href + path);
    
    // Creates an object for the list of params passed from the url
    let params = new URLSearchParams(url.search);
    
    let gotoPath = window.location.href + "src/pages/"
    
    console.log(gotoPath)
    console.log(params.get('id'), params.get('role'))
    if (params.get("id")) {
        switch (params.get('role')) {
            case 'user': 
                location.assign(gotoPath + `interns-dashbord.html?user=${params.get('role')}&id=${params.get('id')}`);
                document.title = 'Intern\'s dashboard | SKYE8'
                return;
            case 'admin': 
                location.assign(gotoPath + `admin-dashboard.html?id=${params.get('id')}&user=${params.get('role')}`);
                document.title = 'Admin\'s dashboard | SKYE8'
                return ;
            case 'supervisor': 
                location.assign(gotoPath + `supervisor_dashboard.html?id=${params.get('id')}&user=${params.get('role')}`);
                // document.title = 'Supervisor\'s dashboard | SKYE8';
                return;
            default : 
                return location.assign(window.location.href);
        }
    } 

}

=======
>>>>>>> main
