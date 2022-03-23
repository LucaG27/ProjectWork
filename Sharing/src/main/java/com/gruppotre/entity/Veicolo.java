package com.gruppotre.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="veicolo")
public class Veicolo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="veicolo_id")
	private int id;
	
	@Column(name="categoria")
	private String categoria;	
	@Column(name="descrizione")
	private String descrizione;
	@Column(name="alimentazione")
	private String alimentazione;
	@Column(name="ruote")
	private String ruote;
	@Column(name="disponibilita")
	private String disponibilita;
	@Column(name="indirizzo")
	private String indirizzo;
	@Column(name="citta")
	private String citta;
	@Column(name="coordinate")
	private String coordinate;
	@Column(name="immagine")
	private String immagine;
	
	@OneToOne(mappedBy = "veicoloId")
	private Prenotazione prenotazione;
	
	public Veicolo() {
	}
	
	public Veicolo(int id, String categoria, String descrizione, String alimentazione, String ruote,
			String disponibilita, String indirizzo, String citta, String coordinateGps, String immagine) {
		super();
		this.categoria = categoria;
		this.descrizione = descrizione;
		this.alimentazione = alimentazione;
		this.ruote = ruote;
		this.disponibilita = disponibilita;
		this.indirizzo = indirizzo;
		this.citta = citta;
		this.coordinate = coordinateGps;
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
	public String getDisponibilita() {
		return disponibilita;
	}
	public void setDisponibilità(String disponibilita) {
		this.disponibilita = disponibilita;
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
		return coordinate;
	}
	public void setCoordinateGps(String coordinateGps) {
		this.coordinate = coordinateGps;
	}
	public String getImmagine() {
		return immagine;
	}
	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}
	
	
	
	
	
}
