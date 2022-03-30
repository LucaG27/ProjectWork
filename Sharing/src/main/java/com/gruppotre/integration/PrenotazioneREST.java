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
import com.gruppotre.entity.Utente;
import com.gruppotre.entity.Veicolo;
import com.gruppotre.service.PrenotazioneService;
import com.gruppotre.service.UtenteService;
import com.gruppotre.service.VeicoloService;

@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneREST {

	@Autowired
	PrenotazioneService srv;

	@Autowired
	VeicoloService vSrv;

	@Autowired
	UtenteService uSrv;
	
	@GetMapping("/allPrenotazioni")
	public List<Prenotazione> selectAllPrenotazioni(){
		return srv.getAllPrenotazioni();
	}
	
	@GetMapping("/allPrenotazioniUtente")
	public List<PrenotazioneDTO> selectAllPrenotazioniUtente(){
		return srv.getAllPrenotazioniDTO();
	}
	
	@GetMapping("{id}")
	public Prenotazione selectPrenotazioneById(@PathVariable("id") int id){				
		return srv.getPrenotazioneById(id);
	}
	
	@GetMapping("/id/{id}")
	public List<Prenotazione> selectPrenotazioniByUtenteId(@PathVariable("id") int id){
		Utente u = uSrv.findById(id);		
		return u.getPrenotazione();
	}
	
	@PostMapping("/savePrenotazione")
	public void savePrenotazione(@RequestBody Prenotazione p) {
		Veicolo v = p.getVeicoloId();
		vSrv.updVeicolo(v);
		srv.savePrenotazione(p);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deletePrenotazione(@PathVariable("id") int id) {
		srv.deletePrenotazione(id);
	}
}
