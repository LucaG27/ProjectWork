package com.gruppotre.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gruppotre.dal.VeicoloDAO;
import com.gruppotre.entity.Veicolo;
import com.gruppotre.entity.VeicoloPrenotazioniDTO;

@Service
public class VeicoloService {

	@Autowired
	VeicoloDAO db;
	
	public List<Veicolo> getAll(){
		return db.findAll();
	}
	
	public Veicolo getById(int id) {
		return db.findById(id).get();
	}
	
	public List<Veicolo> getAllDisponibili(String disponibilita){
		return db.findAllByDisponibilita(disponibilita);
	}
	
	public List<Veicolo> getAllCategoria(String categoria){
		return db.findAllByCategoria(categoria);
	}
	
	public void addVeicolo(Veicolo veicolo) {
		db.save(veicolo);
	}
	
	public Veicolo updVeicolo(Veicolo veicolo) {
		return db.save(veicolo);
	}
	
	public List<VeicoloPrenotazioniDTO> getAllPrenotazioni (int id){
		return db.getAllPrenotazioniVeicoli(id);
	}
}
