package com.gruppotre.entity;

public class PrenotazioniDTO {

	private String stato;
	private String nome;
	private String cognome;
	private String email;
	private String dataInizio;
	private String dataFine;


	public PrenotazioniDTO(String stato, String nome, String cognome, String email, String dataInizio, String dataFine) {
		this.stato = stato;
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.dataInizio = dataInizio;
		this.dataFine = dataFine;
	}

}
