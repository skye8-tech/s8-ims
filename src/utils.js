const baseurl = "https://s8-ims-api.herokuapp.com/api";
// const baseurl = 'localhost:3010'

export function getRequest(resource) {
    fetch(`${baseurl}/${resource}`)
        .then(res => {
            if (!res.ok) throw Error(`Error code status: ${res.status}`)
            return res.json();
        })
}
export function postRequest(resource, data) {
    return fetch(`${baseurl}/${resource}`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type':'applications/json'},
        body: JSON.stringify(data)
    }).then(res => {
        console.log(res)
        if(!res.ok) throw Error(res.statusText);
        return res.json()
    })
}
export function putRequest(resource) {}
export function deleteRequest(resource) {}

const pathFinder = () => {

    return {id, role, user}
}




export function logout () {
    location.assign(location.origin)
    sessionStorage.clear();
}


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
    console.log(window.location.href)
    // Creates an object for the list of params passed from the url
    let params = new URLSearchParams(url.search);
    
    let gotoPath = window.location.href + "src/pages/"
    
    console.log(gotoPath)
    console.log(params.get('id'), params.get('role'))
    if (params.get("id")) {
        switch (params.get('role')) {
            case 'user': 
                return location.assign(gotoPath + `interns-dashbord.html?user=${params.get('role')}&id=${params.get('id')}`);
            case 'admin': 
                return window.location.href = gotoPath + `admin-dashboard.html?id=${params.get('id')}&user=${params.get('role')}`
            case 'supervisor': 
                return window.location.href = gotoPath + `supervisor_dashboard.html?id=${params.get('id')}&user=${params.get('role')}`
            default : 
                return window.location.href = window.location.href;
        }
    } 

}

