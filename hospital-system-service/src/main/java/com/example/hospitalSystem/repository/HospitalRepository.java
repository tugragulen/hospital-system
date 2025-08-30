package com.example.hospitalSystem.repository;

import com.example.hospitalSystem.models.HospitalModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalRepository extends JpaRepository<HospitalModel, Long> {
}
