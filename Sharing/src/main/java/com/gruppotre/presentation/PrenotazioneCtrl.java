package com.gruppotre.presentation;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.gruppotre.service.PrenotazioneService;

@Controller
public class PrenotazioneCtrl {

	@Autowired
	PrenotazioneService srv;

	@GetMapping("/lista-prenotazioni")
	public String list(Model model, HttpSession session) {

		if(session.getAttribute("utenteLoggato") == null) return "redirect:/login-page";
		else return "articolo";
	}
}
