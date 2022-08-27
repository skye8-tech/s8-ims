const baseurl = "https://s8-ims-api.herokuapp.com/api";

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
        headers: {'content-type': 'applications/json'},
        body: JSON.stringify(data)
    }).then(res => res.json())
}
export function putRequest(resource) {}
export function deleteRequest(resource) {}


export function route(...to) {
    const pathParts = ['?user=', '&id=', '&role='];
    let path = to.map((param, ind) => (pathParts[ind] + param)).join('');

    let url = new URL(window.location.href + path);
    let params = new URLSearchParams(url.search);
    
    let gotoPath = window.location.href + "/src/pages/"
    
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