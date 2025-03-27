package com.example.hospitalSystem.models;

import com.example.hospitalSystem.enums.GenderTypeEnum;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PatientModel extends CrudObject {
    private String surname;
    private GenderTypeEnum gender;
    private int age;
    private String tcNumber;
    private String complaint;
    private HospitalModel hospital;
}
