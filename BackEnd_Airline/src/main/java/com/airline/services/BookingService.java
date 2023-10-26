package com.airline.services;


import org.springframework.http.ResponseEntity;

import com.airline.entity.Booking;

public interface BookingService {

	public ResponseEntity<?> createBooking(Booking newBooking);

	public Booking updateBooking(Booking newBooking);

	public String deleteBooking(long bookingId);

	public Iterable<Booking> displayAllBooking();

	public ResponseEntity<?> findBookingById(long bookingId);
}