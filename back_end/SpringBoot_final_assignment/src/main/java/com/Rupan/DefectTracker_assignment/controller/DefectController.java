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

import com.Rupan.DefectTracker_assignment.model.Defect;
import com.Rupan.DefectTracker_assignment.model.Emp;
import com.Rupan.DefectTracker_assignment.model.Project;
import com.Rupan.DefectTracker_assignment.repository.DefectRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class DefectController {
	
	@Autowired
	DefectRepository defectRepository;
	
	
	//Add Defect
	@PostMapping(value="/defect")
	public void addDefect(@RequestBody Defect defect){
		defect.setProject(new Project(defect.getProjectId(),"",""));
		defectRepository.save(defect);
	}
	
	
	//Get All Defects
	@GetMapping(value="/defect")
	public List<Defect> getAllDefects(){
		return defectRepository.findAll();
	}
	
	
	//Get Defect By Id
	@GetMapping(value="/defect/{id}")
	public Defect getDefectById(@PathVariable String id){
		return defectRepository.findByDefectId(id);
	}
	
	
	//Get Defects By Project Id
	@GetMapping(value="/defect/p/{pid}")
	public List<Defect> getDefectsByProjectId(@PathVariable String pid){
		return defectRepository.findByProjectId(pid);
	}
	
	
	//Get Defects By Emp Id
	@GetMapping(value="/defect/e/{eid}")
	public List<Defect> getDefectsByEmpId(@PathVariable String eid){
		return defectRepository.findByEmpId(eid);
	}
	
	
	//Modify Defect
	@PostMapping(value="/defect/update")
	public void updateDefect(@RequestBody Defect defect) {
		defect.setProject(new Project(defect.getProjectId(),"",""));
		defectRepository.save(defect);
	}
	
	
	//Assign Emp
	@PostMapping(value="/defect/{id}/assign-emp/{eid}")
	public void assignEmp(@PathVariable String id, @PathVariable String eid) {
		Defect defect = getDefectById(id);
		defect.setEmpId(eid);
		defect.setEmp(new Emp(eid,"",""));
		defectRepository.save(defect);
	}
	
	
	//Change Emp
	@PostMapping(value="/defect/{id}/change-Emp/{uid}")
	public void changeEmp(@PathVariable String id, @PathVariable String eid) {
		Defect defect = getDefectById(id);
		defect.setEmpId(eid);
		defect.setEmp(new Emp(eid,"",""));
		defectRepository.save(defect);
	}	
	
	
	//Remove Emp
	@PostMapping(value="/defect/{id}/remove-emp")
	public void removeEmp(@PathVariable String id) {
		Defect defect = getDefectById(id);
		defect.setEmpId(null);
		defect.setEmp(null);
		defectRepository.save(defect);
	}
	
	
	//Get Defects By Status
	@GetMapping(value="/defect/status/{status}")
	public List<Defect> getDefectsByStatus(@PathVariable String status){
		return defectRepository.findByStatus(status);
	}
	
	
	//Change the Status of the Defect
	@PostMapping(value="/defect/{id}/change-status/{status}")
	public void changeStatus(@PathVariable String id, @PathVariable String status) {
		Defect defect = getDefectById(id);
		defect.setStatus(status);
		defectRepository.save(defect);
	}
	
	
	//Get Defects By Severity
	@GetMapping(value="/defect/severity/{sev}")
	public List<Defect> getDefectsBySeverity(@PathVariable String sev){
		return defectRepository.findBySeverityChoices(sev);
	}
	
	
	//Get Defects By Priority
	@GetMapping(value="/defect/priority/{pri}")
	public List<Defect> getDefectsByPriority(@PathVariable String pri){
		return defectRepository.findByPriorityChoices(pri);
	}
	
	// Remove a Project
	@DeleteMapping(value = "/defect/{id}")
	public void deleteProject(@PathVariable String id) {
		defectRepository.deleteById(id);
	}

}
