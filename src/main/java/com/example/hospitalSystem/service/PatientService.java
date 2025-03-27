package com.example.hospitalSystem.service;

import com.example.hospitalSystem.models.PatientModel;
import com.example.hospitalSystem.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientService implements CrudService<PatientModel> {
    private final PatientRepository patientRepository;

    @Override
    public PatientModel save(PatientModel obj) {
        patientRepository.save(obj);
        return obj;
    }

    @Override
    public List<PatientModel> findAll() {
        return patientRepository.findAll();
    }

    @Override
    public PatientModel findById(String id) {
        return patientRepository.findById(id);
    }


}
