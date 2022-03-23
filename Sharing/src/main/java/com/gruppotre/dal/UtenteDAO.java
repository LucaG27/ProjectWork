package com.gruppotre.dal;

import com.gruppotre.entity.Utente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteDAO extends JpaRepository<Utente, Integer> {
    
}
