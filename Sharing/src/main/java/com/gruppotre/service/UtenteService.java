package com.gruppotre.service;

import java.util.List;

import com.gruppotre.dal.UtenteDAO;
import com.gruppotre.entity.Utente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtenteService {

     @Autowired
     UtenteDAO udb;

     public Utente findById(int id) {
		return udb.findById(id).get();
	}

    public List<Utente> getAllUtenti() {
		return udb.findAll();
	}

    public Utente getByid(int id) {
		return udb.findById(id).orElse(new Utente());
	}

    public Utente findByEmailAndPassword(String email, String password) {
		return udb.findByEmailAndPassword(email, password);
	}
}
