package com.gruppotre.dal;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gruppotre.entity.Veicolo;

@Repository
public interface VeicoloDAO extends JpaRepository<Veicolo, Integer>{

	List<Veicolo> findAllByDisponibilita(String disponibilita);
}
