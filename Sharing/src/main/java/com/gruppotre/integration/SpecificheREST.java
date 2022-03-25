package com.gruppotre.integration;

import java.util.List;

import com.gruppotre.entity.Specifiche;
import com.gruppotre.service.SpecificheService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/specifiche")
public class SpecificheREST {

    
	@Autowired
	SpecificheService srv;

    @GetMapping("/allSpecifiche")
	public List<Specifiche> getAll(){
		return srv.getAllSpecifiche();
	}

    @GetMapping("/id/{id}")
	public Specifiche getById(@PathVariable int id) {
		return srv.getById(id);
	}
    
}