package com.gruppotre.entity;

public class PrenotazioneDTO {

	private String stato;
	private String nome;
	private String cognome;
	private String email;
	private String dataInizio;
	private String dataFine;


	public PrenotazioneDTO(String stato, String nome, String cognome, String email, String dataInizio, String dataFine) {
		this.stato = stato;
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.dataInizio = dataInizio;
		this.dataFine = dataFine;
	}

	public String getStato() {
		return stato;
	}

	public void setStato(String stato) {
		this.stato = stato;
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


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDataInizio() {
		return dataInizio;
	}

	public void setDataInizio(String dataInizio) {
		this.dataInizio = dataInizio;
	}

	public String getDataFine() {
		return dataFine;
	}

	public void setDataFine(String dataFine) {
		this.dataFine = dataFine;
	}
}
