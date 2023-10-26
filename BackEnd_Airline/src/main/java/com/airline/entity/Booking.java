package com.airline.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long bookingId;
	

	private String passengerName;
	
	
	private int passengerAge;
	

	private String passengerGender;
	
	
	private String passengerEmail;
	

	private long passengerPhone;
	
	
	private int noOfPassengers;

//	@ManyToOne(cascade = CascadeType.MERGE)
//	@JoinColumn(name = "users_Id")
//	private Users users;

	@ManyToMany(cascade = CascadeType.MERGE)
	@JoinColumn(name = "flightNo")
	private List<Flight> flight;



	public List<Flight> getFlight() {
		return flight;
	}

	public void setFlight(List<Flight> flight) {
		this.flight = flight;
	}

	public long getBookingId() {
		return bookingId;
	}

	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public int getPassengerAge() {
		return passengerAge;
	}

	public void setPassengerAge(int passengerAge) {
		this.passengerAge = passengerAge;
	}

	public String getPassengerGender() {
		return passengerGender;
	}

	public void setPassengerGender(String passengerGender) {
		this.passengerGender = passengerGender;
	}

	public String getPassengerEmail() {
		return passengerEmail;
	}

	public void setPassengerEmail(String passengerEmail) {
		this.passengerEmail = passengerEmail;
	}

	public long getPassengerPhone() {
		return passengerPhone;
	}

	public void setPassengerPhone(long passengerPhone) {
		this.passengerPhone = passengerPhone;
	}

	public int getNoOfPassengers() {
		return noOfPassengers;
	}

	public void setNoOfPassengers(int noOfPassengers) {
		this.noOfPassengers = noOfPassengers;
	}

	

	

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", passengerName=" + passengerName + ", passengerAge=" + passengerAge
				+ ", passengerGender=" + passengerGender + ", passengerEmail=" + passengerEmail + ", passengerPhone="
				+ passengerPhone + ", noOfPassengers=" + noOfPassengers + ", flight=" + flight + "]";
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

}