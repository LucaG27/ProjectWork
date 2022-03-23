package com.gruppotre.dal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gruppotre.entity.Prenotazione;
import com.gruppotre.entity.PrenotazioneDTO;

public interface PrenotazioneDAO extends JpaRepository<Prenotazione, Integer>{

	List<Prenotazione> findAllByStato(String stato);
	
	Prenotazione findById(int id);
	
	@Query(value= "select new com.gruppotre.entity.PrenotazioneDTO(p.stato, u.nome, u.cognome, u.email, p.dataInizio, p.dataFine ) "
			+ " from Prenotazione p, Utente u where p.utenteId=u.id ")
	List<PrenotazioneDTO> getAllPrenotazioniDTO();
}
