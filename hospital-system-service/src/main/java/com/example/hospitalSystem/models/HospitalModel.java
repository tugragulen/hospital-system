package com.example.hospitalSystem.models;

import com.example.hospitalSystem.enums.HospitalTypeEnum;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HospitalModel extends CrudObject {
    private HospitalTypeEnum hospitalType;
}
