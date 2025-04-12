package com.example.hospitalSystem.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class CrudObject {
    protected String id;
    protected String name;
    protected String address;
}
