package com.example.hospitalSystem.models;

import com.example.hospitalSystem.enums.HospitalTypeEnum;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class HospitalModel extends CrudObject {
    @Enumerated(EnumType.STRING)
    private HospitalTypeEnum hospitalType;
}
