let token;
let url = "http://localhost:3000/api/v1";
let user;

window.addEventListener("DOMContentLoaded", () => {
	token = localStorage.getItem("userauth");

	if (!token) return (window.location.href = "./login.html");

	user = JSON.parse(localStorage.getItem("Autoplius-user"));
	getMyPosts();

	// work in progress
	// setUpNavBar();
});

const setUpNavBar = async () => {
	if (user.profileImage) document.getElementById("navProfileImage").src = user.profileImage;
	document.querySelector("#userPhone").innerHTML = user.phone;
	document.querySelector("#userEmail").innerHTML = user.email;
};

const getMyPosts = async () => {
	let response = await fetch(`${url}/cars/mycars`, {
		method: "GET",
		headers: {
			userauth: token,
		},
	});

	let data = await response.json();
	console.log(data);
	showPosts(data);
};

//     <div>
//       <div>
//      <button onclick="deleteCarPost('${car._id}')">x</button>

//        <button class="edit-event" onclick="editCar(this, '${car._id}')"> Edit</button>
//        <h3>Post</h3>
//         <h5>Car Brand: ${car.carBrand}</h5>
//         <p>Car Model: ${car.carModel}</p>
//         <p>Car Description: ${car.carDescription}</p>
//         <p>Car Mileage: ${car.carMileage}</p>
//         <p>Car Year: ${car.carYear}</p>
//         <p>Car Price: ${car.carPrice}</p>
//         <div style="background-image: url('${car.carImage}'); height: 200px; background-size: cover "></div>
//         <p>Created at: ${car.createdAt}</p>

//   </div>

// </div>
const showPosts = data => {
	for (let car of data) {
		let card = `
	
	<div class="card d-flex flex-column">
            <div class="img-container">
             <button class="edit-event" onclick="editCar(this, '${car._id}')"> Edit</button>
                <img class="d-flex" src=${
					car.carImage ? car.carImage : "../images/jonathan-petersson-d3iHpnCI_Yg-unsplash.jpg"
				} alt="">
            </div>
            <div class="car-card-info">
                <div class="sub-info">
                    <h5>${car.carBrand} ${car.carModel}</h5>
                    <p>${car.carMileage}</p>
                </div>
                <span>${car.carPrice}$</span>
            </div>
        </div>
	`;
		let cardContainer = document.querySelector(".car-card-grid");
		cardContainer.innerHTML += card;
	}
};
const logOut = async () => {
	let response = await fetch(`${url}/user/logOut`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			userauth: token,
		},
	});
	localStorage.removeItem("userauth");
	localStorage.removeItem("Autoplius-user");
};

document.querySelector("#carPostForm").addEventListener("submit", async e => {
	e.preventDefault();
	const formData = new FormData();
	let uploadingCar = document.querySelector("#carImage");
	let carBrand = document.querySelector("#carBrand").value;
	let carModel = document.querySelector("#carModel").value;
	let carYear = document.querySelector("#carYear").value;
	let carMileage = document.querySelector("#carMileage").value;
	let carPrice = document.querySelector("#carPrice").value;
	let carDescription = document.querySelector("#carDescription").value;

	if (!carBrand && !carModel && !carYear && !carMileage && !carPrice) return alert("provide content");

	if (uploadingCar.files !== 0) {
		formData.append("carImage", uploadingCar.files[0]);
	}

	formData.append("carBrand", carBrand);
	formData.append("carModel", carModel);
	formData.append("carYear", carYear);
	formData.append("carMileage", carMileage);
	formData.append("carPrice", carPrice);
	formData.append("carDescription", carDescription);

	try {
		let response = await fetch(`${url}/cars/mycars`, {
			method: "POST",
			headers: {
				userauth: token,
			},

			body: formData,
		});

		if (response.status !== 200) throw await response.json();

		let data = await response.json();
		console.log(data);

		document.querySelector(".myPostContainer").value = "";
		thanksmessage();
	} catch (e) {
		alert(e);
	}
});

function thanksmessage() {
	document.querySelector(".thanksMessage").innerHTML = "<p>Thanks for posting in our website</p>";
	setTimeout(function () {
		window.location.reload(1);
	}, 2000);
}

const deleteCarPost = async id => {
	let body = {
		id: id,
	};

	let response = await fetch(`${url}/cars/delete`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			userauth: token,
		},
		body: JSON.stringify(body),
	});
	location.reload();
};

const updateProfile = async () => {
	const formData = new FormData();
	let profileImgElement = document.getElementById("profileImageInput");

	formData.append("avatar", profileImgElement.files[0]);
	try {
		let response = await fetch(`${url}/user/updateUserInfo`, {
			method: "POST",
			headers: {
				userauth: token,
			},
			body: formData,
		});
		if (response.status !== 200) throw await response.json();
		user = await response.json();
		localStorage.setItem("Autoplius-user", JSON.stringify(user));
	} catch (e) {
		console.log(e);
	}
	window.location.reload();
};

const editCar = async (e, carId) => {
	let body = {
		id: carId,
	};

	let response = await fetch(`${url}/cars/getOnePost`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			userauth: token,
		},
		body: JSON.stringify(body),
	});

	let car = await response.json();

	console.log(car);
	editModal(car[0], carId);
};

const editModal = (carInfo, _id) => {
	console.log(carInfo);
	const div = document.createElement("div");
	div.classList.add("edit-modal");

	let carBrandInput = `
  <div>
     <label for="carBrandEdit">CarBrand</label>
     <input type="text" id="carBrandEdit" value="${carInfo.carBrand}">
  </div>`;

	let carMileageInput = `
  <div>
     <label for="carMileageEdit">Car Mileage</label>
     <input type="number" id="carMileageEdit" value="${carInfo.carMileage}">
  </div>`;

	let carModelInput = `
  <div>
     <label for="carModelEdit">Car Model</label>
     <input type="text" id="carModelEdit" value="${carInfo.carModel}">
  </div>`;

	let carPriceInput = `
    <div>
      <label for="carPriceEdit">Car Prices</label>
     <input type="number" id="carPriceEdit" value="${carInfo.carPrice}">
  </div>`;

	let carYearInput = `
    <div>
      <label for="carYearEdit">Car Year</label>
     <input type="number" id="carYearEdit" value="${carInfo.carYear}">
  </div>`;

	let carCommentInput = `
    <div>
      <label for="carCommentEdit">Description</label>
     <input type="text" id="carCommentEdit" value="${carInfo.carDescription}">
  </div>`;

	let buttonCancel = document.createElement("button");
	buttonCancel.innerText = "Cancel";

	let buttonEdit = document.createElement("button");
	buttonEdit.innerText = "Edit";

	div.innerHTML = carBrandInput + carMileageInput + carModelInput + carPriceInput + carYearInput + carCommentInput;

	div.appendChild(buttonCancel);
	div.appendChild(buttonEdit);

	buttonCancel.addEventListener("click", () => {
		div.remove();
	});

	buttonEdit.addEventListener("click", async () => {
		let carBrand = document.querySelector("#carBrandEdit").value;
		let carMileage = document.querySelector("#carMileageEdit").value;
		let carModel = document.querySelector("#carModelEdit").value
		let carPrice = document.querySelector("#carPriceEdit").value
		let carYear = document.querySelector("#carYearEdit").value
		let carDescription = document.querySelector("#carCommentEdit").value


		let body = {
			carBrand,
			carMileage,
			carModel,
			carPrice,
			carYear,
			carDescription,
			_id,
		};
		try {
			let response = await fetch(`${url}/cars/editCarInfo`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					userauth: token,
				},
				body: JSON.stringify(body),
			});

			if (response.status !== 200) throw await response.json();
		} catch (e) {
			console.log(e);
		}
	});

	document.querySelector("body").appendChild(div);
};
