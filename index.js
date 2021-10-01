// Add your code here
const userURL = 'http://localhost:3000/users'
function submitData(username,email) {
    return fetch(userURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    }).then(resp=>resp.json()).then(json=>{
        document.body.innerHTML = json.id
    }).catch(error=>{
        document.body.innerHTML = error.message
    })
}
