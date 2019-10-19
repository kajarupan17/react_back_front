package com.Rupan.DefectTracker_assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Rupan.DefectTracker_assignment.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String>{
	public Project findByProjectId(String projectId);
}
