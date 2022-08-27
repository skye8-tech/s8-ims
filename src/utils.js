const baseurl = "https://s8-ims-api.herokuapp.com/api";

export function getRequest(resource) {
    fetch(`${baseurl}/${resource}`)
        .then(res => {
            if (!res.ok) throw Error(`Error code status: ${res.status}`)
            return res.json();
        })
}
export function postRequest(resource, data) {
    console.log(`${baseurl}/${resource}`)
    console.log(data)
    return fetch(`${baseurl}/${resource}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }).then(res => {
        if(!res.ok) throw Error(res)
        console.log(res)
        return res.json()
    })
}
export function putRequest(resource) {}
export function deleteRequest(resource) {}

const pathFinder = () => {

    return {id, role, user}
}
export function route(...to) {
    const pathParts = ['?user=', '&id=', '&role='];
    let path = to.map((param, ind) => (pathParts[ind] + param)).join('');

    let url = new URL(window.location.href + path);
    console.log(window.location.href)
    let params = new URLSearchParams(url.search);
    
    let gotoPath = window.location.href + "src/pages/"
    
    console.log(gotoPath)
    if (params.get("id")) {
        switch (params.get('role')) {
            case 'user': 
                return window.location.href = gotoPath + `interns-dashbord.html?id=${params.get('id')}&user=${params.get('role')}`
            case 'admin': 
                return window.location.href = gotoPath + `admin-dashboard.html?id=${params.get('id')}&user=${params.get('role')}`
            case 'supervisor': 
                return window.location.href = gotoPath + `supervisor_dashboard.html?id=${params.get('id')}&user=${params.get('role')}`
            default : 
                return window.location.href = window.location.href;
        }
    } 

}