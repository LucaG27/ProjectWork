package com.gruppotre.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.gruppotre.entity.Specifiche;
import com.gruppotre.entity.Veicolo;
import com.gruppotre.entity.VeicoloPrenotazioniDTO;
import com.gruppotre.service.VeicoloService;

@RestController
@RequestMapping("/api/veicolo")
public class VeicoloREST {

	@Autowired
	VeicoloService srv;
	
	@GetMapping
	public List<Veicolo> getAll(){
		return srv.getAll();
	}
	
	@GetMapping("/id/{id}")
	public Veicolo getById(@PathVariable int id) {
		return srv.getById(id);
	}
	
	@GetMapping("/disponibili/{disponibilita}")
	public List<Veicolo> getAllDisponibili(@PathVariable("disponibilita") String disponibilita){
		return srv.getAllDisponibili(disponibilita);
	}
	
	@GetMapping(value="/categoria/{categoria}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Veicolo> getAllByCategoria(@PathVariable("categoria") String categoria){
		return srv.getAllCategoria(categoria);
	}
	
	@PostMapping
	public void addVeicolo(@RequestBody Veicolo veicolo) {
		Specifiche s = veicolo.getSpecifiche();
		s.setVeicolo(veicolo);
		srv.addVeicolo(veicolo);
	}
	
	@PutMapping
	public void updVeicolo(@RequestBody Veicolo veicolo) {
		srv.updVeicolo(veicolo);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delVeicoloById(@PathVariable("id") int id) {
		Veicolo v = srv.getById(id);
		srv.delVeicolo(v);
	}
	
	@GetMapping("/prenotazioni/{id}")
	public List<VeicoloPrenotazioniDTO> getAllPrenotazioni(@PathVariable("id") int id){
		return srv.getAllPrenotazioni(id);
	}
	
	@PostMapping("/import")
	public ResponseEntity insertCSV(@RequestPart("fileCSV") MultipartFile file) {
		
		srv.importCsv(file);
		return ResponseEntity.ok().build();	
	}
}
