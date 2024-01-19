package com.format.Centre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.format.Centre.entities.Carts;

public interface CartRepository extends JpaRepository<Carts, Integer>{

}
