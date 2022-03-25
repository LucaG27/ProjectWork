package com.gruppotre.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	
	@OneToOne
	@JoinColumn(name="immagine_id_fk")
	private Immagine immagine;

	@OneToOne
	@JoinColumn(name="specifiche_id_fk")
	private Specifiche specifiche;
	
	@OneToMany(mappedBy = "veicoloId")
	@JsonIgnore
	private List<Prenotazione> prenotazione;
	
	public Veicolo() {
	}

	public Veicolo(int id, String categoria, String descrizione, String alimentazione, String ruote,
			String disponibilita, String indirizzo, String citta, String coordinate, Immagine immagine,
			List<Prenotazione> prenotazione) {
		super();
		this.id = id;
		this.categoria = categoria;
		this.descrizione = descrizione;
		this.alimentazione = alimentazione;
		this.ruote = ruote;
		this.disponibilita = disponibilita;
		this.indirizzo = indirizzo;
		this.citta = citta;
		this.coordinate = coordinate;
		this.immagine = immagine;
		this.prenotazione = prenotazione;
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

	public void setDisponibilita(String disponibilita) {
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

	public String getCoordinate() {
		return coordinate;
	}

	public void setCoordinate(String coordinate) {
		this.coordinate = coordinate;
	}

	public Immagine getImmagine() {
		return immagine;
	}

	public void setImmagine(Immagine immagine) {
		this.immagine = immagine;
	}

	public List<Prenotazione> getPrenotazione() {
		return prenotazione;
	}

	public void setPrenotazione(List<Prenotazione> prenotazione) {
		this.prenotazione = prenotazione;
	}

	@Override
	public String toString() {
		return "Veicolo [id=" + id + ", categoria=" + categoria + ", descrizione=" + descrizione + ", alimentazione="
				+ alimentazione + ", ruote=" + ruote + ", disponibilita=" + disponibilita + ", indirizzo=" + indirizzo
				+ ", citta=" + citta + ", coordinate=" + coordinate + ", immagine=" + immagine + ", prenotazione="
				+ prenotazione + "]";
	}
}
