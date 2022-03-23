package com.gruppotre.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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

	@OneToOne
	@JoinColumn(name = "utente_id_fk")
	private int utenteId;

	@OneToOne
	@JoinColumn(name = "veicolo_id_fk")
	private int veicoloId;


	public Prenotazione() {
		super();
	}

	public Prenotazione(int id, String dataInizio, String dataFine, String stato, int utenteId, int veicoloId) {
		super();
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

	public int getUtenteId() {
		return utenteId;
	}

	public void setUtenteId(int utenteId) {
		this.utenteId = utenteId;
	}

	public int getVeicoloId() {
		return veicoloId;
	}

	public void setVeicoloId(int veicoloId) {
		this.veicoloId = veicoloId;
	}

	@Override
	public String toString() {
		return "Prenotazione [id=" + id + ", dataInizio=" + dataInizio + ", dataFine=" + dataFine + ", stato=" + stato
				+ ", utenteId=" + utenteId + ", veicoloId=" + veicoloId + "]";
	}
}
