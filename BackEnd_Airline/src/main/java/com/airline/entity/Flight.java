package com.airline.entity;

import java.math.BigInteger;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Entity
public class Flight {

	@Id
	@NotNull
	private BigInteger flightNo;
	
	@NotEmpty(message = "Flight name is required.")
    @Column(name = "flightName", nullable = false, length = 20)
	private String flightName;
	
	@NotEmpty
	private String flightLogo;
	
	@NotEmpty(message = "Flight model is required")
	private String flightModel;
	
	@Column(name = "rate", nullable = false)
	private double rate;
	
	@NotNull
	private int seatCapacity;

	public BigInteger getFlightNo() {
		return flightNo;
	}

	public void setFlightNo(BigInteger flightNo) {
		this.flightNo = flightNo;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public String getFlightLogo() {
		return flightLogo;
	}

	public void setFlightLogo(String flightLogo) {
		this.flightLogo = flightLogo;
	}

	public String getFlightModel() {
		return flightModel;
	}

	public void setFlightModel(String flightModel) {
		this.flightModel = flightModel;
	}

	public int getSeatCapacity() {
		return seatCapacity;
	}

	public void setSeatCapacity(int seatCapacity) {
		this.seatCapacity = seatCapacity;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

	@Override
	public String toString() {
		return "Flight [flightNo=" + flightNo + ", flightName=" + flightName + ", flightLogo=" + flightLogo
				+ ", flightModel=" + flightModel + ", rate=" + rate + ", seatCapacity=" + seatCapacity + "]";
	}

	public Flight() {
		super();
		// TODO Auto-generated constructor stub
	}

}