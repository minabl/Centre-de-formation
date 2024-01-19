package com.format.Centre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.format.Centre.entities.Categories;

public interface CatReposirory extends JpaRepository<Categories,Integer> {

}
