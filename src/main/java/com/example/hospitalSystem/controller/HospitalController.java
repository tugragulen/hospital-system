package com.example.hospitalSystem.controller;

import com.example.hospitalSystem.models.HospitalModel;
import com.example.hospitalSystem.service.HospitalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/hospitals")
@RequiredArgsConstructor
public class HospitalController {
    private final HospitalService hospitalService;

    @PostMapping
    public ResponseEntity<?> saveHospital(@RequestBody HospitalModel model) {
        return new ResponseEntity<>(hospitalService.save(model), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(hospitalService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable String id) {
        return new ResponseEntity<>(hospitalService.findById(id), HttpStatus.OK);
    }

}
