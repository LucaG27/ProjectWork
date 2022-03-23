package com.gruppotre.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gruppotre.entity.Prenotazione;
import com.gruppotre.service.PrenotazioneService;

@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneREST {

	@Autowired
	PrenotazioneService srv;
	
	@GetMapping("/allPrenotazioni")
	public List<Prenotazione> selectAllOrdini(){
		List<Prenotazione> list = srv.getAll();
		return srv.getPrenotazioni();
	}
}
