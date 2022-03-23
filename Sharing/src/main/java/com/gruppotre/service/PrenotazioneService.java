package com.gruppotre.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gruppotre.dal.PrenotazioneDAO;
import com.gruppotre.entity.Prenotazione;

@Service
public class PrenotazioneService {

	@Autowired
	PrenotazioneDAO pdb;
	
	public List<Prenotazione> findByStato(String stato) {
		return pdb.findByStato(stato);
	}

	public List<Prenotazione> findByData(String data) {
		return pdb.findByData(data);
	}
}
