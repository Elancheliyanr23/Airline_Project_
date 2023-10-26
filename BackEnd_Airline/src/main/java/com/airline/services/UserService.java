package com.airline.services;


import org.springframework.http.ResponseEntity;

import com.airline.entity.Users;

public interface UserService {

	public ResponseEntity<Users> createUser(Users newUser);

	public Users updateUser(Users newUser);

	public String deleteUser(long UserId);

	public Iterable<Users> displayAllUser();

	public Users findUserById(long userId);
	
	public Users authenticate(Users newUser);
}