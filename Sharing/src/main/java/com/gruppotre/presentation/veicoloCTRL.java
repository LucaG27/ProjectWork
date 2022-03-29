package com.gruppotre.presentation;

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
    
@Controller
@RequestMapping("/veicolo")
public class VeicoloCTRL {
   
    @GetMapping
	public String getListaVeicoli(HttpSession session) {
		
		if(session.getAttribute("utenteSession") == null) return "index"; //da implementare con una pagina contenente schede di tutti veicoli ma non prenotabili
        return "auto";
	}

}
