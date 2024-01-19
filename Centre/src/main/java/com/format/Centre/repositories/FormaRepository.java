package com.format.Centre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.format.Centre.entities.Formations;

public interface FormaRepository extends JpaRepository<Formations,Integer> {
	
}
