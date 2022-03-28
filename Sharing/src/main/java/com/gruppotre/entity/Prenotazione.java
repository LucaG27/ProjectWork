package com.gruppotre.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name = "prenotazione")
public class Prenotazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "prenotazione_id")
	private int id;

	@Column(name = "data_inizio")
	private String dataInizio;

	@Column(name = "data_fine")
	private String dataFine;

	@Column(name = "stato")
	private String stato;

	@ManyToOne
	@JoinColumn(name = "utente_id_fk")
	private Utente utenteId;

	@ManyToOne
	@JoinColumn(name = "veicolo_id_fk")
	private Veicolo veicoloId;

	
	public Prenotazione() {
	}

	public Prenotazione(String dataInizio, String dataFine, String stato, Utente utenteId, Veicolo veicoloId) {
		this.dataInizio = dataInizio;
		this.dataFine = dataFine;
		this.stato = stato;
		this.utenteId = utenteId;
		this.veicoloId = veicoloId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public Utente getUtenteId() {
		return utenteId;
	}

	public void setUtenteId(Utente utenteId) {
		this.utenteId = utenteId;
	}

	public Veicolo getVeicoloId() {
		return veicoloId;
	}

	public void setVeicoloId(Veicolo veicoloId) {
		this.veicoloId = veicoloId;
	}

	@Override
	public String toString() {
		return "Prenotazione [id=" + id + ", dataInizio=" + dataInizio + ", dataFine=" + dataFine + ", stato=" + stato
				+ ", utenteId=" + utenteId + ", veicoloId=" + veicoloId + "]";
	}
}
