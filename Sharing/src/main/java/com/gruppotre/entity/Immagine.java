package com.gruppotre.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "immagine")
public class Immagine {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "immagine_id")
	private int id;

	
	private String immagine1;
	private String immagine2;
	private String immagine3;
	private String immagine4;
	private String immagine5;


	public Immagine() {
	}


	public Immagine(String immagine1, String immagine2, String immagine3, String immagine4, String immagine5) {
		this.immagine1 = immagine1;
		this.immagine2 = immagine2;
		this.immagine3 = immagine3;
		this.immagine4 = immagine4;
		this.immagine5 = immagine5;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getImmagine1() {
		return immagine1;
	}


	public void setImmagine1(String immagine1) {
		this.immagine1 = immagine1;
	}


	public String getImmagine2() {
		return immagine2;
	}


	public void setImmagine2(String immagine2) {
		this.immagine2 = immagine2;
	}


	public String getImmagine3() {
		return immagine3;
	}


	public void setImmagine3(String immagine3) {
		this.immagine3 = immagine3;
	}


	public String getImmagine4() {
		return immagine4;
	}


	public void setImmagine4(String immagine4) {
		this.immagine4 = immagine4;
	}


	public String getImmagine5() {
		return immagine5;
	}


	public void setImmagine5(String immagine5) {
		this.immagine5 = immagine5;
	}


	@Override
	public String toString() {
		return "Immagine [id=" + id + ", immagine1=" + immagine1 + ", immagine2=" + immagine2 + ", immagine3="
				+ immagine3 + ", immagine4=" + immagine4 + ", immagine5=" + immagine5 + "]";
	}

}
