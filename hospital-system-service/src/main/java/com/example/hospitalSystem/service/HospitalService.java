package com.example.hospitalSystem.service;

import com.example.hospitalSystem.models.HospitalModel;
import com.example.hospitalSystem.repository.HospitalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class HospitalService implements CrudService<HospitalModel> {
    private final HospitalRepository hospitalRepository;

    @Override
    public HospitalModel save(HospitalModel obj) {
        obj.setId(UUID.randomUUID().toString());
        return hospitalRepository.save(obj);
    }

    @Override
    public List<HospitalModel> findAll() {
        return hospitalRepository.findAll();
    }

    @Override
    public HospitalModel findById(String id) {
        return hospitalRepository.findById(id);
    }
}
