package com.gruppotre.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gruppotre.entity.Veicolo;
import com.gruppotre.service.VeicoloService;

@RestController
@RequestMapping("/veicolo")
public class VeicoloREST {

	@Autowired
	VeicoloService srv;
	
	@GetMapping
	public List<Veicolo> getAll(){
		return srv.getAll();
	}
	
	@GetMapping("/disponibili/{disponibilita}")
	public List<Veicolo> getAllDisponibili(@PathVariable("disponibilita") String disponibilita){
		return srv.getAllDisponibili(disponibilita);
	}
}
