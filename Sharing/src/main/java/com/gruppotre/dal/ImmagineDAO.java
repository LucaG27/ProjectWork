package com.gruppotre.dal;

import com.gruppotre.entity.Immagine;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ImmagineDAO extends JpaRepository<Immagine, Integer>{
    
}
