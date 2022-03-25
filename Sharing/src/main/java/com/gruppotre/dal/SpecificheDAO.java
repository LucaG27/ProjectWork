package com.gruppotre.dal;

import com.gruppotre.entity.Specifiche;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecificheDAO extends JpaRepository<Specifiche, Integer> {
    
}
