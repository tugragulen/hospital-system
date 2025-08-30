package com.example.hospitalSystem.service;

import com.example.hospitalSystem.models.HospitalModel;
import com.example.hospitalSystem.repository.HospitalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HospitalService implements CrudService<HospitalModel> {
    private final HospitalRepository hospitalRepository;

    @Override
    public HospitalModel save(HospitalModel obj) {
        return hospitalRepository.save(obj);
    }

    @Override
    public List<HospitalModel> findAll() {
        return hospitalRepository.findAll();
    }

    @Override
    public HospitalModel findById(Long id) {
        Optional<HospitalModel> optHospital = hospitalRepository.findById(id);
        if (optHospital.isPresent()) {
            return optHospital.get();
        }
        throw new UnsupportedOperationException("Hospital not found with id: " + id);
    }
}
