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
@RequestMapping("/pannello-controllo")
public class PannelloCTRL {

	@Autowired
	FileService fs;
	@Autowired
	ImmagineDAO aDB;
	@Autowired
	VeicoloService vSrv;

    @GetMapping
	public String getListaVeicoli(HttpSession session) {
		
		if(session.getAttribute("utenteSession") == null) return "index";
		
		Utente u = (Utente) session.getAttribute("utenteSession");
		if(u.getRuolo().equals("RUOLO_ADMIN")) return "pannello-controllo";
		return "pagina-forbidden";
	}

	@PostMapping("/save")
	public String saveArt(Model model, Immagine veicoloForm,
			@RequestParam(name = "image") MultipartFile immagine,@RequestParam(name = "veicoloId")Integer idVeicolo) {

		if (immagine != null) {
			try {
				String percorso = fs.saveFile("img/veicoli/upload", immagine.getName(),
						immagine);
				veicoloForm.setImmagine(percorso);
				Veicolo v=vSrv.getById(idVeicolo);
				veicoloForm.setVeicolo(v);

			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		aDB.save(veicoloForm);
		return "pannello-controllo";
	}

	@GetMapping("/inserimento")
	public String insert(){
		return "inserimento";
	}

	
    
}
