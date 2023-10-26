package com.airline.repository;


import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airline.entity.ScheduledFlight;


public interface ScheduledFlightRepository extends JpaRepository<ScheduledFlight, BigInteger> {

}
