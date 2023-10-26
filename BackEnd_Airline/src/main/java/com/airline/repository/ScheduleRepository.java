package com.airline.repository;



import java.math.BigInteger;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airline.entity.Schedule;
import com.airline.entity.ScheduledFlight;



public interface ScheduleRepository extends JpaRepository<Schedule, BigInteger> {


}
