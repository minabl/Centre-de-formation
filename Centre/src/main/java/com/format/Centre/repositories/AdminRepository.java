package com.format.Centre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.format.Centre.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

	Admin findByEmail(String email);

}
