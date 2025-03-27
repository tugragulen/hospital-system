package com.example.hospitalSystem.models;

import com.example.hospitalSystem.enums.HospitalTypeEnum;

import java.util.UUID;

public class HospitalModel {
    private final String id = UUID.randomUUID().toString();
    private String name;
    private String addressee;
    private HospitalTypeEnum hospitalType;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddressee() {
        return addressee;
    }

    public void setAddressee(String addressee) {
        this.addressee = addressee;
    }

    public HospitalTypeEnum getHospitalType() {
        return hospitalType;
    }

    public void setHospitalType(HospitalTypeEnum hospitalType) {
        this.hospitalType = hospitalType;
    }
}
