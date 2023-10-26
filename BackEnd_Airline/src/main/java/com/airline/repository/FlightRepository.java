package com.airline.repository;

import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airline.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, BigInteger> {

}
