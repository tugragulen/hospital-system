package com.example.hospitalSystem.controller;

import com.example.hospitalSystem.models.HospitalModel;
import com.example.hospitalSystem.service.HospitalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/hospitals")
public class HospitalController {
    private final HospitalService hospitalService;

    public HospitalController(HospitalService hospitalService) {
        this.hospitalService = hospitalService;
    }

    @PostMapping
    public ResponseEntity<?> saveHospital(@RequestBody HospitalModel model) {
        return new ResponseEntity<>(hospitalService.saveHospital(model), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(hospitalService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findAll(@PathVariable String id) {
        return new ResponseEntity<>(hospitalService.findById(id), HttpStatus.OK);
    }

}
