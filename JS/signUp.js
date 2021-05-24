let url = 'http://localhost:3000/api/v1'


document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault()

    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let name = document.querySelector('#name').value
    let phone = document.querySelector('#phone').value


    if (!email || !password) return alert('Fill in form')

    let body = {
        email,
        password,
        name,
        phone
    }
    let response = await fetch(`${url}/user/signUp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    console.log(response)
    if (response.status !== 200) return alert('Something went wrong')
    let data = await response.json()

    console.log(data)

})

const logOut = async () => {
    let response = await fetch(`${url}/user/logOut`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'userauth': token
        }
    })
    localStorage.removeItem('userauth')
    localStorage.removeItem('Autoplius-user')
}