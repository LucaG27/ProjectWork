package com.gruppotre.integration;

import java.util.List;

import com.gruppotre.entity.Immagine;
import com.gruppotre.service.ImmagineService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/immagine")
public class ImmagineRest {

    
	@Autowired
	ImmagineService srv;

    @GetMapping("/allImmagini")
	public List<Immagine> getAllImmagini(){
		return srv.getAllImmagini();
	}
    
}
