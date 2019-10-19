package com.Rupan.DefectTracker_assignment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Rupan.DefectTracker_assignment.model.Defect;

public interface DefectRepository extends JpaRepository<Defect, String> {
	public List<Defect> findByProjectId(String pid);
	
	public List<Defect> findByEmpId(String eid);
	
	public List<Defect> findByStatus(String status);
	
	public List<Defect> findBySeverityChoices(String severityChoices);
	
	public List<Defect> findByPriorityChoices(String priorityChoices);
	
	public Defect findByDefectId(String defectId);

}
