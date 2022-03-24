package com.gruppotre.integration;

import javax.servlet.http.HttpSession;

import com.gruppotre.entity.Utente;
import com.gruppotre.service.UtenteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
public class UtenteREST {

    @Autowired
	UtenteService srv;

    @PostMapping("/validation")
	public ResponseEntity<Utente> validation(@RequestBody Utente loginTry, HttpSession session){
		
        Utente u = srv.findByEmailAndPassword(loginTry.getEmail(), loginTry.getPassword());
		
		if(u != null) {
			session.setAttribute("utenteSession", u);
			return new ResponseEntity<Utente>(u, HttpStatus.OK);
		} else return ResponseEntity.badRequest().build();
		
	}

    	
	@GetMapping("/control")
	public ResponseEntity<Utente> control(HttpSession session){
		return new ResponseEntity<Utente>((Utente) session.getAttribute("utenteSession"), HttpStatus.OK);
	}

	@GetMapping("/utente/{email}")
	public Utente getUtente(@PathVariable("email") String email){
		return srv.getUtente(email);
	}

}
