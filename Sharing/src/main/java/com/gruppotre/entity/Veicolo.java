package com.gruppotre.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="veicolo")
public class Veicolo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="veicolo_id")
	private int id;
	
	private String categoria;
	private String descrizione;
	private String alimentazione;
	private String ruote;
	private String disponibilità;
	private String indirizzo;
	private String citta;
	private String coordinateGps;
	private String immagine;
	
	public Veicolo() {
	}
	
	public Veicolo(int id, String categoria, String descrizione, String alimentazione, String ruote,
			String disponibilità, String indirizzo, String citta, String coordinateGps, String immagine) {
		super();
		this.id = id;
		this.categoria = categoria;
		this.descrizione = descrizione;
		this.alimentazione = alimentazione;
		this.ruote = ruote;
		this.disponibilità = disponibilità;
		this.indirizzo = indirizzo;
		this.citta = citta;
		this.coordinateGps = coordinateGps;
		this.immagine = immagine;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public String getAlimentazione() {
		return alimentazione;
	}
	public void setAlimentazione(String alimentazione) {
		this.alimentazione = alimentazione;
	}
	public String getRuote() {
		return ruote;
	}
	public void setRuote(String ruote) {
		this.ruote = ruote;
	}
	public String getDisponibilità() {
		return disponibilità;
	}
	public void setDisponibilità(String disponibilità) {
		this.disponibilità = disponibilità;
	}
	public String getIndirizzo() {
		return indirizzo;
	}
	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}
	public String getCitta() {
		return citta;
	}
	public void setCitta(String citta) {
		this.citta = citta;
	}
	public String getCoordinateGps() {
		return coordinateGps;
	}
	public void setCoordinateGps(String coordinateGps) {
		this.coordinateGps = coordinateGps;
	}
	public String getImmagine() {
		return immagine;
	}
	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}
	
	
	
	
	
}
