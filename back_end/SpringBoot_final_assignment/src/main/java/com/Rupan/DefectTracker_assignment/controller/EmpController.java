package com.Rupan.DefectTracker_assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Rupan.DefectTracker_assignment.model.Emp;
import com.Rupan.DefectTracker_assignment.model.Project;

import com.Rupan.DefectTracker_assignment.repository.DefectRepository;
import com.Rupan.DefectTracker_assignment.repository.EmpRepository;
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class EmpController {
	
	@Autowired
	EmpRepository empRepository;
	
	@Autowired
	DefectRepository defectRepository;
	
	
	//Add User
	@PostMapping(value="/emp")
	public void addEmp(@RequestBody Emp emp){
		empRepository.save(emp);
	}
	
	
	//Get All Users
	@GetMapping(value="/emp")
	public List<Emp> getAllEmp(){
		return empRepository.findAll();
	}
	
	
	//Get User By User Id
	@GetMapping(value="/emp/{id}")
	public Emp getEmpByEmpId(@PathVariable String id){
		return empRepository.findByEmpId(id);
	}
	
	
	//Add Project to Emp
	@PostMapping(value="/emp/{eid}/add-project/{pid}")
	public void addProject(@PathVariable String eid, @PathVariable String pid) {
		Emp emp = getEmpByEmpId(eid);
		emp.setProjectId(pid);
		emp.setProject(new Project(pid,"",""));
		empRepository.save(emp);
	}
	
//	//Remove Project From Emp
//	@PostMapping(value="/emp/{eid}/remove-project")
//	public void removeProject(@PathVariable String eid) {
//		Emp emp = getEmpByEmpId(eid);
//		emp.setProjectId(null);
//		emp.setProject(null);
//		empRepository.save(emp);
//	}
	
	// Remove a Project
		@DeleteMapping(value = "/emp/{id}")
		public void deleteProject(@PathVariable String id) {
			empRepository.deleteById(id);
		}


}
