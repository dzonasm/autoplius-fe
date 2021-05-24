let token
let url = 'http://localhost:3000/api/v1'
let user

window.addEventListener('DOMContentLoaded', () => {
    token = localStorage.getItem('userauth')

    if (!token) return window.location.href = './login.html'

    user = JSON.parse(localStorage.getItem('Autoplius-user'))
    getMyPosts()
    setUpNavBar()

})

const setUpNavBar = async () => {
    if (user.profileImage) document.getElementById('navProfileImage').src = user.profileImage
    document.querySelector('#userPhone').innerHTML = user.phone
    document.querySelector('#userEmail').innerHTML = user.email
}


const getMyPosts = async () => {
    let response = await fetch(`${url}/cars/mycars`, {
        method: "GET",
        headers: {
            'userauth': token
        }
    })

    let data = await response.json()
    console.log(data)
    showPosts(data)
}

const showPosts = (data) => {
    for (let car of data) {
        let card =
            `
        <div>
          <div>
         <div onclick="deleteCarPost('${car._id}')">x</div>
         <a href="../html/editCarPost.html"> <div> EDIT </div></a>
           <h3>Post</h3>
            <h5>Car Brand: ${car.carBrand}</h5>
            <p>Car Model: ${car.carModel}</p>
            <p>Car Description: ${car.carDescription}</p>
            <p>Car Mileage: ${car.carMileage}</p>
            <p>Car Year: ${car.carYear}</p>
            <p>Car Price: ${car.carPrice}</p> 
            <div style="background-image: url('${car.carImage}'); height: 200px; background-size: cover "></div>
            <p>Created at: ${car.createdAt}</p>
            
            
      </div>
    </div>`
        let cardContainer = document.querySelector('.myPostContainer')
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

document.querySelector('#carInfo').addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData()
    let uploadingCar = document.querySelector('#carImage')
    let carBrand = document.querySelector('#carBrand').value
    let carModel = document.querySelector('#carModel').value
    let carYear = document.querySelector('#carYear').value
    let carMileage = document.querySelector('#carMileage').value
    let carPrice = document.querySelector('#carPrice').value
    let carDescription = document.querySelector('#carDescription').value

    if (!carBrand && carModel && carYear && carMileage && carPrice)
        return alert('provide content')

    if (uploadingCar.files !== 0) {
        formData.append('carImage', uploadingCar.files[0])
    }

    formData.append('carBrand', carBrand)
    formData.append('carModel', carModel)
    formData.append('carYear', carYear)
    formData.append('carMileage', carMileage)
    formData.append('carPrice', carPrice)
    formData.append('carDescription', carDescription)

    try {
        let response = await fetch(`${url}/cars/mycars`, {
            method: 'POST',
            headers: {
                'userauth': token
            },

            body: formData
        })

        if (response.status !== 200) throw await response.json()

        let data = await response.json()
        console.log(data)

        document.querySelector('.myPostContainer').value = ''
        thanksmessage()

    } catch (e) {
        alert(e)
    }
})

function thanksmessage() {
    document.querySelector('.thanksMessage').innerHTML = "<p>Thanks for posting in our website</p>"
    setTimeout(function () {
        window.location.reload(1);
    }, 2000);
}

const deleteCarPost = async (id) => {
    let body = {
        id: id
    }

    let response = await fetch(`${url}/cars/delete`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'userauth': token
        },
        body: JSON.stringify(body)
    })
    location.reload();
}

const updateProfile = async () => {
    const formData = new FormData()
    let profileImgElement = document.getElementById('profileImageInput')

    formData.append('avatar', profileImgElement.files[0])
    try {
        let response = await fetch(`${url}/user/updateUserInfo`, {
            method: "POST",
            headers: {
                'userauth': token
            },
            body: formData
        })
        if (response.status !== 200) throw await response.json()
        user = await response.json()
        localStorage.setItem('Autoplius-user', JSON.stringify(user))
    } catch (e) {
        console.log(e)
    }
    window.location.reload()
}
