let token;
let user;
let url = 'http://localhost:3000/api/v1'

window.addEventListener('DOMContentLoaded', () => {
    token = localStorage.getItem('userauth')

    user = JSON.parse(localStorage.getItem('Autoplius-user'))

    getAllPosts()
})

const getAllPosts = async () => {
    let response = await fetch(`${url}/cars`, {
        method: 'GET'
    })

    let cars = await response.json()
    console.log(cars)
    postCars(cars)
}

const postCars = (cars) => {
    for (let car of cars) {

        let card = `
        <div>
            <div>
                <h3>Post</h3>
            </div>
        <div>
            <h5>Conatact info</h5>
            <p>Added by: ${car.userId.email}</p>
            <p>Conntact number: ${car.userId.phone}</p>
        </div>
        <h5>All about a car</h5>
        <p>Car Brand: ${car.carBrand}</p>
        <p>Car Model: ${car.carModel}</p>
        <p> car Mileage: ${car.carMileage}</p>
        <p>Car Description: ${car.carDescription}</p>
        <p>Car Year: ${car.carYear}</p>
        <p>Car Price: ${car.carPrice}</p>
        <p>Created at: ${car.createdAt}</p>
        <div>
                 <div style="background-image: url('${car.carImage}'); height: 200px; width: 400px; background-repeat: no-repeat"></div>
        </div>
        </div>`
        let cardContainer = document.querySelector('.content')
        cardContainer.innerHTML += card
    }
}


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

