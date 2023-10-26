package com.airline.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.airline.entity.Users;



public interface UserRepository extends JpaRepository<Users, Long> {
	Users findByUserNameAndUserPassword(String userName, String userPassword);
}
