package com.example.hospitalSystem.models;

import com.example.hospitalSystem.enums.HospitalTypeEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "hospitals")
@Getter
@Setter
public class HospitalModel extends CrudObject {
    @Enumerated(EnumType.STRING)
    private HospitalTypeEnum hospitalType;

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL)
    private List<PatientModel> patients;
}
