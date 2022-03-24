package com.gruppotre.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gruppotre.entity.Prenotazione;
import com.gruppotre.entity.PrenotazioneDTO;
import com.gruppotre.service.PrenotazioneService;

@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneREST {

	@Autowired
	PrenotazioneService srv;
	
	@GetMapping("/allPrenotazioni")
	public List<Prenotazione> selectAllPrenotazioni(){
		return srv.getAllPrenotazioni();
	}
	
	@GetMapping("/allPrenotazioniUtente")
	public List<PrenotazioneDTO> selectAllPrenotazioniUtente(){
		return srv.getAllPrenotazioniDTO();
	}
	
	@PostMapping("/savePrenotazione")
	public void savePrenotazione(@RequestBody Prenotazione p) {
		srv.savePrenotazione(p);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deletePrenotazione(@PathVariable("id") int id) {
		srv.deletePrenotazione(id);
	}
}
