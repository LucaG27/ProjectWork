package com.gruppotre.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gruppotre.entity.Veicolo;
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
	
	@GetMapping("/categoria/{categoria}")
	public List<Veicolo> getAllByCategoria(@PathVariable("categoria") String categoria){
		return srv.getAllCategoria(categoria);
	}
	
	@PostMapping
	public void addVeicolo(@RequestBody Veicolo veicolo) {
		srv.addVeicolo(veicolo);
	}
	
	@PutMapping
	public void updVeicolo(@RequestBody Veicolo veicolo) {
		srv.updVeicolo(veicolo);
	}
}
