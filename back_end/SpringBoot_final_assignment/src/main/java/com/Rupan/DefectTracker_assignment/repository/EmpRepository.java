package com.Rupan.DefectTracker_assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Rupan.DefectTracker_assignment.model.Emp;

public interface EmpRepository extends JpaRepository<Emp, String> {
	public Emp findByEmpId(String empId);
}
