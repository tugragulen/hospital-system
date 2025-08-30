package com.example.hospitalSystem.models;

import com.example.hospitalSystem.enums.GenderTypeEnum;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PatientModel extends CrudObject {
    private String surname;
    @Enumerated(EnumType.STRING)
    private GenderTypeEnum gender;
    private int age;
    private String tcNumber;
    private String complaint;
//    private HospitalModel hospital;
}
