package com.gruppotre.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.gruppotre.dal.VeicoloDAO;
import com.gruppotre.entity.Veicolo;
import com.gruppotre.entity.VeicoloPrenotazioniDTO;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

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

	public void importCsv(MultipartFile file){
		
		try {
			
			InputStreamReader isr = new InputStreamReader(file.getInputStream(), "UTF-8"); //Permette di ottenere il flusso di dati
			BufferedReader buffer = new BufferedReader(isr); //Prassi per la lettura del flusso
						
			CsvToBean <Veicolo> csv = new CsvToBeanBuilder(buffer)
					.withSeparator(';')
					.withIgnoreLeadingWhiteSpace(true)
					.withType(Veicolo.class).build();
			List<Veicolo> listaCsv =csv.parse();
			db.saveAll(listaCsv);
			
			
			
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	
	public void delVeicolo(Veicolo veicolo) {
		db.delete(veicolo);;
	}
}
