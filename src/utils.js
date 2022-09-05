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
    })
}

export function logout () {
    location.assign(location.origin)
    sessionStorage.clear();
}

