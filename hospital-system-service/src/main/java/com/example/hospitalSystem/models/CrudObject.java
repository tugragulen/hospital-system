package com.example.hospitalSystem.models;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public abstract class CrudObject {
    protected String id = UUID.randomUUID().toString();
    protected String name;
    protected String address;
}
