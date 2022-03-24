package com.gruppotre.entity;

public class VeicoloPrenotazioniDTO {
	
	private int idVeicolo;
	private String descrizione;
	private String dataInizio;
	private String dataFine;
	private String stato;
	
	public VeicoloPrenotazioniDTO() {
	}
	
	public VeicoloPrenotazioniDTO(int idVeicolo, String descrizione, String dataInizio, String dataFine, String stato) {
		super();
		this.idVeicolo = idVeicolo;
		this.descrizione = descrizione;
		this.dataInizio = dataInizio;
		this.dataFine = dataFine;
		this.stato = stato;
	}

	public int getIdVeicolo() {
		return idVeicolo;
	}

	public void setIdVeicolo(int idVeicolo) {
		this.idVeicolo = idVeicolo;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
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

	public String getStato() {
		return stato;
	}

	public void setStato(String stato) {
		this.stato = stato;
	}
	
	
	
	

}
