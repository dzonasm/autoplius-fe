let url = 'http://localhost:3000/api/v1'

document.getElementById('signIn-form').addEventListener('submit', async (e) => {
    e.preventDefault()

    let signInEmail = document.getElementById('signIn-email').value
    let signInPassword = document.getElementById('signIn-password').value

    if (!signInEmail || !signInPassword) return alert('Enter email and password')

    let body = {
        signInEmail,
        signInPassword
    }
    try {
        let response = await fetch(`${url}/user/signIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if (response.status !== 200) throw await response.json()
        let token = response.headers.get('userauth')

        localStorage.setItem('userauth', token)
        localStorage.setItem('Autoplius-user', await JSON.stringify(await response.json()))
        window.location.href = '../indexx.html'
    } catch (e) {
        console.log(e)
        alert(e.message)
    }
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

document.getElementById('signUp-form').addEventListener('submit', async (event) => {
    event.preventDefault()


    let signUpEmail = document.getElementById('signUp-email').value

    let signUpPassword = document.getElementById('signUp-password').value
    let signUpConfirmationPassword = document.getElementById('signUp-password2').value
    let signUpName = document.getElementById('signUp-name').value
    let signUpPhoneNumber = document.getElementById('signUp-phone').value


    if (!signUpEmail || !signUpPassword) return alert('Fill in form')



    let body = {
        signUpEmail,
        signUpPassword,
        signUpName,
        signUpPhoneNumber

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