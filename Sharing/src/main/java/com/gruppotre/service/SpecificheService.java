package com.gruppotre.service;

import java.util.List;

import com.gruppotre.dal.SpecificheDAO;
import com.gruppotre.entity.Specifiche;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class SpecificheService {

    @Autowired
	SpecificheDAO db;

    public List<Specifiche> getAllSpecifiche() {
		return db.findAll();
	}
    
    public Specifiche getById(int id) {
		return db.findById(id).get();
}
}

