package com.gruppotre.service;

import java.util.List;

import com.gruppotre.dal.ImmagineDAO;
import com.gruppotre.entity.Immagine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class ImmagineService {
    
    @Autowired
	ImmagineDAO db;

    public List<Immagine> getAllImmagini() {
		return db.findAll();
	}

	public Immagine getById(int id) {
		return db.findById(id).get();
	}

	public void deleteImmagine(int id) {
		db.delete(db.getById(id));
	}
}
