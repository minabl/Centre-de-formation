package com.format.Centre.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;

import com.format.Centre.entities.Admin;
import com.format.Centre.entities.Formations;
import com.format.Centre.entities.User;
import com.format.Centre.repositories.AdminRepository;
import com.format.Centre.repositories.FormaRepository;
import com.format.Centre.repositories.UserRepository;
import com.format.Centre.services.FormaService;

@RequestMapping("")
@CrossOrigin("*")
@RestController
public class FormaController {
     // ----------------------------------------Formtions -------------------- //
	@Autowired
	private FormaRepository repo;

	@PostMapping("add-forma")
	public ResponseEntity<Formations> addFormations(@RequestBody Formations forma) {
		return ResponseEntity.ok(repo.save(forma));
	}

	@GetMapping("details")

	public List<Formations> getAllFormations() {
		return repo.findAll();
	}

	@GetMapping("details/{id}")
	public Formations getFormationsById(@PathVariable("id") Integer id) {
		return repo.findById(id).get();
	}

	@DeleteMapping("details/{id}")
	public void deletFormationsById(@PathVariable("id") Integer id) {
		repo.deleteById(id);
	}

	@PutMapping("edit/{id}")
	public ResponseEntity<Formations> updateEmployee(@PathVariable Integer id, @RequestBody Formations FormD) {
		Formations formation = repo.findById(id).orElseThrow();
		
		formation.setNom(FormD.getNom());
		formation.setImage(FormD.getImage());
		formation.setDescription(FormD.getDescription());
		formation.setPrix(FormD.getPrix());
		formation.setDuree(FormD.getDuree());
		Formations updatedFormation = repo.save(formation);
		return ResponseEntity.ok(updatedFormation);
	}

	// ---------------------------------ADMIN------------------------//
	@Autowired
	private AdminRepository adrop;

	@PostMapping("regist")
	public ResponseEntity<Admin> RegisterAdmin(@RequestBody Admin formad) {
		return ResponseEntity.ok(adrop.save(formad));
	}

	@PostMapping("login")
	public ResponseEntity<Admin> LoginAdmin(@RequestBody Admin admindata) {
		Admin admin = adrop.findByEmail(admindata.getEmail());
		if (admin.getPassword().equals(admindata.getPassword()))
			return ResponseEntity.ok(admin);
		return (ResponseEntity<Admin>) ResponseEntity.internalServerError();

	}

	// -------------------------USER-------------------------//
	@Autowired
	private UserRepository urop;

	@PostMapping("registuser")
	public ResponseEntity<User> RegisterUser(@RequestBody User formaU) {
		return ResponseEntity.ok(urop.save(formaU));
	}

	@PostMapping("loginuser")
	public ResponseEntity<User> LoginUser(@RequestBody User userdata) {
		User user = urop.findByEmail(userdata.getEmail());
		if (user.getPassword().equals(userdata.getPassword()))
			return ResponseEntity.ok(user);
		return (ResponseEntity<User>) ResponseEntity.internalServerError();
	}

	@GetMapping("user")

	public List<User> getAllUsers() {
		return urop.findAll();
	}

	@DeleteMapping("user/{id}")
	public void deletUserById(@PathVariable("id") Integer id) {
		urop.deleteById(id);
	}

}
