package com.gruppotre.dal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gruppotre.entity.Prenotazione;
import com.gruppotre.entity.PrenotazioniDTO;

public interface PrenotazioneDAO extends JpaRepository<Prenotazione, Integer>{

	List<Prenotazione> findAllByStato(String stato);
	
	Prenotazione findById(int id);
	
	@Query(value= "select stato, nome, cognome, email, data_inizio, data_fine "
			+ " from prenotazione p, utente u where p.utente_id_fk=u.utente_id ",nativeQuery=true)
	List<PrenotazioniDTO> getAllPrenotazioniDTO();
}
