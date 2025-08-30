package com.example.hospitalSystem.controller;

import com.example.hospitalSystem.models.PatientModel;
import com.example.hospitalSystem.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/patients")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class PatientController {
    private final PatientService patientService;

    @PostMapping
    public ResponseEntity<?> savePatient(@RequestBody PatientModel model) {
        return new ResponseEntity<>(patientService.save(model), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(patientService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return new ResponseEntity<>(patientService.findById(id), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody PatientModel model) {
        return new ResponseEntity<>(patientService.update(model), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        patientService.deleteById(id);
        return ResponseEntity.ok(ResponseEntity.noContent().build());
    }

}
