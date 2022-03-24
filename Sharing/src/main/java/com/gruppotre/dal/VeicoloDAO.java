package com.gruppotre.dal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gruppotre.entity.Veicolo;
import com.gruppotre.entity.VeicoloPrenotazioniDTO;

@Repository
public interface VeicoloDAO extends JpaRepository<Veicolo, Integer>{


	List<Veicolo> findAllByDisponibilita(String disponibilita);
	
	List<Veicolo> findAllByCategoria(String categoria);
	
	@Query(value="select new com.gruppotre.entity.VeicoloPrenotazioniDTO(v.id, v.descrizione, p.dataInizio, p.dataFine, p.stato) from Veicolo v, Prenotazione p"
			+ " where p.veicoloId = v.id and p.utenteId.id = :utenteId")
	List<VeicoloPrenotazioniDTO> getAllPrenotazioniVeicoli(@Param("utenteId") int utenteId);
}
