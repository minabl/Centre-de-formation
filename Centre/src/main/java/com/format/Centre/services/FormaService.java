package com.format.Centre.services;
import java.util.List;
import org.springframework.stereotype.Service;
import com.format.Centre.entities.Formations;
import com.format.Centre.repositories.FormaRepository;

import lombok.AllArgsConstructor;
@AllArgsConstructor
@Service

public class FormaService implements IServiceformations{
	 FormaRepository fr;
	@Override
	public List<Formations> getAllFormations() {
		// TODO Auto-generated method stub
		return fr.findAll();
	}

	@Override
	public Formations getFormations(Integer id) {
		// TODO Auto-generated method stub
		return fr.findById(id).get();
	}

	@Override
	public void add(Formations f) {
		// TODO Auto-generated method stub
		fr.save(f);
	}

}
