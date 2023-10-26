package com.airline.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.airline.entity.Airport;


public interface AirportRepository extends JpaRepository<Airport, String>{
	

}
