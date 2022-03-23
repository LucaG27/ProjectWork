package com.gruppotre.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gruppotre.dal.PrenotazioneDAO;
import com.gruppotre.entity.Prenotazione;
import com.gruppotre.entity.PrenotazioneDTO;

@Service
public class PrenotazioneService {

	@Autowired
	PrenotazioneDAO db;

	public List<Prenotazione> findByStato(String stato) {
		return db.findAllByStato(stato);
	}

	public Prenotazione getPrenotazioneById(int id) {
		return db.findById(id);
	}
	
	public List<Prenotazione> getAllPrenotazioni() {
		return db.findAll();
	}
	
	public List<PrenotazioneDTO> getAllPrenotazioniDTO() {
		return db.getAllPrenotazioniDTO();
	}
}
