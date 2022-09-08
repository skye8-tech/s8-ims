
const redirect = (from, to) => {
    console.log('niga aint working')
    window.location.href = to;
    hisState(from, to);
}



const hisState = (cur, url) => {
    window.history.pushState(cur, '', url)
}


export {
    redirect,
    hisState,
}