package com.gruppotre.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "specifiche")
public class Specifiche {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "specifiche_id")
	private int id;
	
	private String velocita;
	
	private String potenza;
	
	private String alimentazione;
	
	@Column(name = "tempo_ricarica")
	private String tempoDiRicarica;
	
	@Column(name = "tipo_ruota")
	private String tipoDiRuota;
	
	@Column(name = "limitatore_velocita")
	private String limitatoreVelocita;
	
	private String autonomia;
	
	@Column(name = "emissioni_co2")
	private String emissioniCo2;
	
	private String cambio;
	
	private String cavalli;
	
	@Column(name = "cilindrata_motore")
	private String cilindrata;
	
	@Column(name = "consumo_medio")
	private String consumoMedio;

	@OneToOne(mappedBy = "specifiche")
	@JsonIgnore
	private Veicolo veicolo;

	public Specifiche() {
	}

	public Specifiche(String velocita, String potenza, String alimentazione, String tempoDiRicarica,
			String tipoDiRuota, String limitatoreVelocita, String autonomia, String emissioniCo2, String cambio,
			String cavalli, String cilindrata, String consumoMedio, Veicolo veicolo) {
		this.velocita = velocita;
		this.potenza = potenza;
		this.alimentazione = alimentazione;
		this.tempoDiRicarica = tempoDiRicarica;
		this.tipoDiRuota = tipoDiRuota;
		this.limitatoreVelocita = limitatoreVelocita;
		this.autonomia = autonomia;
		this.emissioniCo2 = emissioniCo2;
		this.cambio = cambio;
		this.cavalli = cavalli;
		this.cilindrata = cilindrata;
		this.consumoMedio = consumoMedio;
		this.veicolo = veicolo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVelocita() {
		return velocita;
	}

	public void setVelocita(String velocita) {
		this.velocita = velocita;
	}

	public String getPotenza() {
		return potenza;
	}

	public void setPotenza(String potenza) {
		this.potenza = potenza;
	}

	public String getAlimentazione() {
		return alimentazione;
	}

	public void setAlimentazione(String alimentazione) {
		this.alimentazione = alimentazione;
	}

	public String getTempoDiRicarica() {
		return tempoDiRicarica;
	}

	public void setTempoDiRicarica(String tempoDiRicarica) {
		this.tempoDiRicarica = tempoDiRicarica;
	}

	public String getTipoDiRuota() {
		return tipoDiRuota;
	}

	public void setTipoDiRuota(String tipoDiRuota) {
		this.tipoDiRuota = tipoDiRuota;
	}

	public String getLimitatoreVelocita() {
		return limitatoreVelocita;
	}

	public void setLimitatoreVelocita(String limitatoreVelocita) {
		this.limitatoreVelocita = limitatoreVelocita;
	}

	public String getAutonomia() {
		return autonomia;
	}

	public void setAutonomia(String autonomia) {
		this.autonomia = autonomia;
	}

	public String getEmissioniCo2() {
		return emissioniCo2;
	}

	public void setEmissioniCo2(String emissioniCo2) {
		this.emissioniCo2 = emissioniCo2;
	}

	public String getCambio() {
		return cambio;
	}

	public void setCambio(String cambio) {
		this.cambio = cambio;
	}

	public String getCavalli() {
		return cavalli;
	}

	public void setCavalli(String cavalli) {
		this.cavalli = cavalli;
	}

	public String getCilindrata() {
		return cilindrata;
	}

	public void setCilindrata(String cilindrata) {
		this.cilindrata = cilindrata;
	}

	public String getConsumoMedio() {
		return consumoMedio;
	}

	public void setConsumoMedio(String consumoMedio) {
		this.consumoMedio = consumoMedio;
	}

	public Veicolo getVeicolo() {
		return veicolo;
	}

	public void setVeicolo(Veicolo veicolo) {
		this.veicolo = veicolo;
	}

	@Override
	public String toString() {
		return "Specifiche [id=" + id + ", velocita=" + velocita + ", potenza=" + potenza + ", alimentazione="
				+ alimentazione + ", tempoDiRicarica=" + tempoDiRicarica + ", tipoDiRuota=" + tipoDiRuota
				+ ", limitatoreVelocita=" + limitatoreVelocita + ", autonomia=" + autonomia + ", emissioniCo2="
				+ emissioniCo2 + ", cambio=" + cambio + ", cavalli=" + cavalli + ", cilindrata=" + cilindrata
				+ ", consumoMedio=" + consumoMedio + ", veicolo=" + veicolo + "]";
	}
}
