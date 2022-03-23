package com.gruppotre.dal;

import com.gruppotre.entity.Utente;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UtenteDAO extends JpaRepository<Utente, Integer> {

    @Query(value= "select * from utente where email = ?1 and password = ?2",nativeQuery=true)
	Utente findByEmailAndPassword(String email, String password);

    
}
