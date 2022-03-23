package com.gruppotre.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.gruppotre.dal.PrenotazioneDAO;
import com.gruppotre.entity.Prenotazione;

@Service
public class PrenotazioneService {

	@Autowired
	PrenotazioneDAO pdb;

	@Query(value="select ordine.id, cliente_id, impiegato_id, data, consegna, sum(quantita*prezzo) somma "
            + "from ordine, ordine_dettaglio, articolo "
            + "where ordine.id=ordine_dettaglio.ordine_id AND articolo.id=ordine_dettaglio.articolo_id "
            + "group by ordine.id; ", nativeQuery=true)
    List<Prenotazione> getPrenotazioni(int id);
	
	public List<Prenotazione> findByStato(String stato) {
		return pdb.findByStato(stato);
	}

	public List<Prenotazione> findByData(String data) {
		return pdb.findByData(data);
	}
}
