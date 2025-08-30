package com.example.hospitalSystem.models;

import com.example.hospitalSystem.enums.GenderTypeEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "patients")
@Getter
@Setter
public class PatientModel extends CrudObject {
    private String surname;
    @Enumerated(EnumType.STRING)
    private GenderTypeEnum gender;
    private int age;
    private String tcNumber;
    private String complaint;
    @ManyToOne
    @JoinColumn(name = "hospital_id", nullable = false)
    private HospitalModel hospital;
}
