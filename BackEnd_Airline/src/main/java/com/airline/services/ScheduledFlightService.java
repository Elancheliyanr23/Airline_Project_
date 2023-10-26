package com.airline.services;


import java.math.BigInteger;

import com.airline.entity.ScheduledFlight;
import com.airline.exception.ResourceNotFoundException;

public interface ScheduledFlightService {
	public ScheduledFlight addScheduledFlight(ScheduledFlight scheduledFlight);

	public ScheduledFlight modifyScheduledFlight(ScheduledFlight scheduledFlight);

	public String removeScheduledFlight(BigInteger id) throws ResourceNotFoundException;

	public Iterable<ScheduledFlight> viewAllScheduledFlights();

	public ScheduledFlight viewScheduledFlight(BigInteger id) throws ResourceNotFoundException;
	// boolean cancelBookings(long flightId) throws RecordNotFoundException;

}
