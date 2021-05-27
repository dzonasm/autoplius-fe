let url = "http://localhost:3000/api/v1";

document.getElementById("form").addEventListener("submit", async e => {
	e.preventDefault();

	let signInEmail = document.getElementById("email").value;
	let signInPassword = document.getElementById("password").value;

	if (!signInEmail || !signInPassword) return alert("Enter email and password");

	let body = {
		email: signInEmail,
		password: signInPassword,
	};
	try {
		let response = await fetch(`${url}/user/signIn`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		if (response.status !== 200) throw await response.json();
		let token = response.headers.get("userauth");

		localStorage.setItem("userauth", token);
		localStorage.setItem("Autoplius-user", await JSON.stringify(await response.json()));
		window.location.href = "../html/profile.html";
	} catch (e) {
		console.log(e);
		alert(e.message);
	}
});
