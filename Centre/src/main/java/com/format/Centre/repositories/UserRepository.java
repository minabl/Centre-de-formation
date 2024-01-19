package com.format.Centre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.format.Centre.entities.Admin;
import com.format.Centre.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	User findByEmail(String email);

}
