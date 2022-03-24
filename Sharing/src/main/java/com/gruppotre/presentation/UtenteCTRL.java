package com.gruppotre.presentation;

import javax.servlet.http.HttpSession;

import com.gruppotre.entity.Utente;
import com.gruppotre.service.UtenteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UtenteCTRL {

    @Autowired
	UtenteService srv;

    @GetMapping("/login")
	public String list(Model model, HttpSession session) {
		
		if(session.getAttribute("utenteSession") == null) return "index";
		else return "index";
	}
	
	@GetMapping("/logout")
	public String logout(Model model, HttpSession session) {
		session.setAttribute("utenteSession", null);
		return "redirect:/login";
	}

}
