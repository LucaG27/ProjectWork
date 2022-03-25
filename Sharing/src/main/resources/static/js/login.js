let logiId = document.getElementById("btn").addEventListener("click", login);
const EMAIL = document.getElementById("email");
const PSW = document.getElementById("password");
const utente = localStorage.getItem('user');

	
	function login() {
		
		let utente = {
			"email" : EMAIL.value,
			"password" : PSW.value
		}
		
		fetch("/api/login/validation", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(utente)
			})
			.then(response => {
				if(response.status != 200) return null;
				else return response.json()})
			.then(utente => {
				if(utente == null) alert("Utente o Password errati.")
				else {
					getUser();
					window.location.reload();
				}
			})
	}

	function getUser() {

		fetch("/api/login/utente/"+EMAIL.value)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
	    localStorage.setItem('user', JSON.stringify(json));
	})
}

	

	