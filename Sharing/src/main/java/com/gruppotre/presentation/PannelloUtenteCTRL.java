package com.gruppotre.presentation;


import java.io.IOException;

import javax.servlet.http.HttpSession;

import com.gruppotre.dal.ImmagineDAO;
import com.gruppotre.entity.Immagine;
import com.gruppotre.entity.Utente;
import com.gruppotre.entity.Veicolo;
import com.gruppotre.service.FileService;
import com.gruppotre.service.VeicoloService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;


@Controller
@RequestMapping("/pannello-utente")
public class PannelloUtenteCTRL {

	@Autowired
	FileService fs;
	@Autowired
	ImmagineDAO aDB;
	@Autowired
	VeicoloService vSrv;

    @GetMapping
	public String getPannelloUtente(HttpSession session) {
		
		if(session.getAttribute("utenteSession") == null) return "index";
		return "pannello-utente";
	}
    
}
