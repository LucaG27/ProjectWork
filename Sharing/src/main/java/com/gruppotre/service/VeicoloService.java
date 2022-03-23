package com.gruppotre.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gruppotre.dal.VeicoloDAO;
import com.gruppotre.entity.Veicolo;

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
}