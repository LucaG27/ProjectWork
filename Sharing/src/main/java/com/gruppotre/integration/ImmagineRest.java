package com.gruppotre.integration;

import java.io.IOException;
import java.util.List;

import com.gruppotre.dal.ImmagineDAO;
import com.gruppotre.entity.Immagine;
import com.gruppotre.entity.Veicolo;
import com.gruppotre.service.FileService;
import com.gruppotre.service.ImmagineService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/immagine")
public class ImmagineRest {

    
	@Autowired
	ImmagineService srv;

    @GetMapping("/allImmagini")
	public List<Immagine> getAllImmagini(){
		return srv.getAllImmagini();
	}
	
	@GetMapping("/id/{id}")
	public Immagine getById(@PathVariable int id) {
		return srv.getById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteImmagine(@PathVariable("id") int id) {
		srv.deleteImmagine(id);
	}
}
