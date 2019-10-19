package com.Rupan.DefectTracker_assignment.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="emp",schema = "spring_boot")
public class Emp {
	
	@Id
	private String empId;
	private String empName;
	private String empType;
	private String projectId;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emp")
	@JsonIgnore
	private List<Defect> defect;
	
	@ManyToOne()
	@JoinColumn(name="pid")
	private Project project;
	
	public Emp() {
		
	}

	public Emp(String empId, String empName, String empType) {
		super();
		this.empId = empId;
		this.empName = empName;
		this.empType = empType;
	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public String getempName() {
		return empName;
	}

	public void setempName(String empName) {
		this.empName = empName;
	}
	
	public String getEmpType() {
		return empType;
	}

	public void setEmpType(String empType) {
		this.empType = empType;
	}

	public List<Defect> getDefect() {
		return defect;
	}

	public void setDefect(List<Defect> defect) {
		this.defect = defect;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	
}
