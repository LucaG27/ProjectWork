package com.gruppotre.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="utente")
public class Utente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="utente_id")
    private int id;
    private String nome;
    private String cognome;
    @Column(name="data_nascita")
    private String dataNascita;
    private String email;
    private String password;
    private String ruolo;

    @OneToMany(mappedBy ="utenteId")
    @JsonIgnore
    private List<Prenotazione> prenotazione;

    public Utente() {
    }

    public Utente(int id, String nome, String cognome, String dataNascita, String email, String password,
            String ruolo) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.email = email;
        this.password = password;
        this.ruolo = ruolo;
    }

    public int getId() {
        return id;
    }

    public void setUtente_id(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public String getDataNascita() {
        return dataNascita;
    }

    public void setDataNascita(String dataNascita) {
        this.dataNascita = dataNascita;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRuolo() {
        return ruolo;
    }

    public void setRuolo(String ruolo) {
        this.ruolo = ruolo;
    }

    @Override
    public String toString() {
        return "utente [cognome=" + cognome + ", data_nascita=" + dataNascita + ", email=" + email + ", nome=" + nome
                + ", password=" + password + ", ruolo=" + ruolo + ", id=" + id + "]";
    }  
    
    
}
