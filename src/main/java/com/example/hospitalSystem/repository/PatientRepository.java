package com.example.hospitalSystem.repository;

import com.example.hospitalSystem.models.PatientModel;
import org.springframework.stereotype.Repository;

@Repository
public class PatientRepository extends CrudRepository<PatientModel> {
}
