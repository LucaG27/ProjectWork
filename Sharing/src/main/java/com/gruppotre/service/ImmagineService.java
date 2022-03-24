package com.gruppotre.service;

import java.util.List;

import com.gruppotre.dal.ImmagineDAO;
import com.gruppotre.entity.Immagine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImmagineService {
    
    @Autowired
	ImmagineDAO db;

    public List<Immagine> getAllImmagini() {
		return db.findAll();
	}
}
