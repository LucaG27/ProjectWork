package com.gruppotre.dal;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.gruppotre.entity.Prenotazione;

public interface PrenotazioneDAO {

	List<Prenotazione> findByStato(String stato);
	
	List<Prenotazione> findByData(String data);
}
