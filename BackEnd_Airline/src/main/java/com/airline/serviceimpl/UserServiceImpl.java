package com.airline.serviceimpl;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.airline.entity.Users;
import com.airline.exception.ResourceNotFoundException;
import com.airline.repository.UserRepository;
import com.airline.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userDao;
	
	@Override
	public ResponseEntity<Users> createUser(Users newUser) {
		// TODO Auto-generated method stub
		Optional<Users> findUserById = userDao.findById(newUser.getUserId());
		try {
			if (!findUserById.isPresent()) {
				userDao.save(newUser);
				return new ResponseEntity<Users>(newUser, HttpStatus.OK);
			} else
				throw new ResourceNotFoundException("User already existw", "User already exists", null);
		} catch (Exception e) {

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@Override
	public Users updateUser(Users updateUser) {
		// TODO Auto-generated method stub
		Optional<Users> findUserById = userDao.findById(updateUser.getUserId());
		if (findUserById.isPresent()) {
			userDao.save(updateUser);
		} else
			throw new ResourceNotFoundException("User already existw", "User already exists", null);
		return updateUser;
	}

	@Override
	public String deleteUser(long UserId) {
		// TODO Auto-generated method stub
		Optional<Users> findBookingById = userDao.findById(UserId);
		if (findBookingById.isPresent()) {
			userDao.deleteById(UserId);
			return "User Deleted!!";
		} else
			throw new ResourceNotFoundException("User not found on this id", "User not found in this id", null);
	}

	@Override
	public Iterable<Users> displayAllUser() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public Users findUserById(long userId) {
		return userDao.findById(userId).orElseThrow(()->new ResourceNotFoundException("user","Id",userId));
	
	}
	
	
	
	@Override
	public Users authenticate(Users user) {
		// TODO Auto-generated method stub
		Users userItem = new Users(); //userDao.findByUserNameAndUserPassword(user.getUserName(), user.getUserPassword());
		
		List<Users>u = userDao.findAll();
		for (Users us: u) {
			System.out.println(us.getUserPassword().equals(user.getUserPassword().trim())+ "^^^^^^^^^^^^^^^^^" + us.getUserName().equals(user.getUserName()));
			if (us.getUserName().equals(user.getUserName()) && us.getUserPassword().equals(user.getUserPassword())) {
				userItem = us;
				
			}
		}
		System.out.println("######" + userItem);
		return userItem;
		
	}

}