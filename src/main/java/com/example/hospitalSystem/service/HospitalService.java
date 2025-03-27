package com.example.hospitalSystem.service;

import com.example.hospitalSystem.models.HospitalModel;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class HospitalService {
    private HashMap<String, HospitalModel> hospitalRepository = new HashMap<>();

    public HospitalModel saveHospital(HospitalModel model) {
        hospitalRepository.put(model.getId(), model);
        return model;
    }

    public HospitalModel findById(String id) {
        return hospitalRepository.get(id);
    }

    public List<HospitalModel> findAll() {
        return hospitalRepository.values().stream().toList();
    }
}
