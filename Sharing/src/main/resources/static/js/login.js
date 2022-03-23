
	function login() {
		
		let utente = {
			"email" : document.getElementById("typeEmailX").value,
			"password" : document.getElementById("typePasswordX").value
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
					window.location.reload();
				}
			})
	}