package com.format.Centre.services;

import java.util.List;

import com.format.Centre.entities.Formations;




public interface IServiceformations {
	public void add(Formations f);
	public List<Formations> getAllFormations();
	public Formations getFormations(Integer id);
	
}
