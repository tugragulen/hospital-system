package com.example.hospitalSystem.service;

import com.example.hospitalSystem.models.PatientModel;
import com.example.hospitalSystem.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PatientService implements CrudService<PatientModel> {
    private final PatientRepository patientRepository;

    @Override
    public PatientModel save(PatientModel obj) {
        obj.setId(UUID.randomUUID().toString());
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


    public PatientModel update(PatientModel model) {
        PatientModel savedPatient = findById(model.getId());
        savedPatient.setName(model.getName());
        savedPatient.setSurname(model.getSurname());
        savedPatient.setGender(model.getGender());
        savedPatient.setAddress(model.getAddress());
        savedPatient.setAge(model.getAge());
        savedPatient.setComplaint(model.getComplaint());
        savedPatient.setTcNumber(model.getTcNumber());
        return savedPatient;
    }

    public void delete(String id) {
        patientRepository.delete(id);
    }
}
