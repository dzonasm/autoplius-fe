let url = 'http://localhost:3000/api/v1'


document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault()


    let email = document.getElementById('email').value

    let password = document.getElementById('password1').value
    let confirmationPassword = document.getElementById('password2').value
    let name = document.getElementById('name').value
    let phoneNumber = document.getElementById('phoneNumber').value


    if (!email || !password) return alert('Fill in form')



    if (confirmationPassword == ''){
        alert("Please enter confirm password");
    }else if(password != confirmationPassword) {
        alert("\nPassword did not match: Please try again");

}

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