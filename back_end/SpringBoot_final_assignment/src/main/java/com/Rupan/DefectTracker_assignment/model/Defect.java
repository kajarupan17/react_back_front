package com.Rupan.DefectTracker_assignment.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="defects",schema = "spring_boot")
public class Defect {
	
	@Id
	private String defectId;
	private String defectName;
	private String defectDescription;
	private String severityChoices;
	private String priorityChoices;
	private String projectId;
	private String status;
	private String empId;
	
	@ManyToOne()
	@JoinColumn(name="pid")
	private Project project;
	
	@ManyToOne()
	@JoinColumn(name="eid")
	private Emp emp;

	public String getDefectId() {
		return defectId;
	}

	public void setDefectId(String defectId) {
		this.defectId = defectId;
	}

	public String getDefectName() {
		return defectName;
	}

	public void setDefectName(String defectName) {
		this.defectName = defectName;
	}

	public String getDefectDescription() {
		return defectDescription;
	}

	public void setDefectDescription(String defectDescription) {
		this.defectDescription = defectDescription;
	}

	public String getSeverityChoices() {
		return severityChoices;
	}

	public void setSeverityChoices(String severityChoices) {
		this.severityChoices = severityChoices;
	}

	public String getPriorityChoices() {
		return priorityChoices;
	}

	public void setPriorityChoices(String priorityChoices) {
		this.priorityChoices = priorityChoices;
	}
	
	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public String getEmpId() {
		return empId;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Emp getEmp() {
		return emp;
	}

	public void setEmp(Emp emp) {
		this.emp = emp;
	}

	@Override
	public String toString() {
		return "Defect [defectId=" + defectId + ", defectName=" + defectName + ", defectDescription="
				+ defectDescription + ", severityChoices=" + severityChoices + ", priorityChoices=" + priorityChoices
				+ ", projectId=" + projectId + ", userId=" + empId + "]";
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
