package com.gruppotre.presentation;


import javax.servlet.http.HttpSession;

import com.gruppotre.entity.Utente;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/pannello-controllo")
public class PannelloCTRL {

    @GetMapping
	public String getListaVeicoli(HttpSession session) {
		
		if(session.getAttribute("utenteSession") == null) return "index";
		
		Utente u = (Utente) session.getAttribute("utenteSession");
		if(u.getRuolo().equals("RUOLO_ADMIN")) return "pannello-controllo";
		return "pagina-forbidden";
	}
    
}
