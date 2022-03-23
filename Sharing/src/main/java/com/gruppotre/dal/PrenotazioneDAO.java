package com.gruppotre.dal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gruppotre.entity.Prenotazione;

public interface PrenotazioneDAO extends JpaRepository<Prenotazione, Integer>{

	List<Prenotazione> findByStato(String stato);
	
	List<Prenotazione> findByData(String data);

	Prenotazione findById(int id);
}
