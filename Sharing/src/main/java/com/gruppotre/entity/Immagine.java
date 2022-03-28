package com.gruppotre.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "immagine")
public class Immagine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "immagine_id")
	private int id;
	
	private String immagine;

	@ManyToOne
	@JoinColumn(name="veicolo_fk_id")
	@JsonIgnore
	private Veicolo veicolo;

	public Immagine() {
	}

	public Immagine(int id, String immagine, Veicolo veicolo) {
		this.id = id;
		this.immagine = immagine;
		this.veicolo = veicolo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImmagine() {
		return immagine;
	}

	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}

	public Veicolo getVeicolo() {
		return veicolo;
	}

	public void setVeicolo(Veicolo veicolo) {
		this.veicolo = veicolo;
	}

	@Override
	public String toString() {
		return "Immagine [id=" + id + ", immagine=" + immagine + ", veicolo=" + veicolo + "]";
	}
		
}
