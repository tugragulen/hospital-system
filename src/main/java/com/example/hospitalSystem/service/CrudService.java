package com.example.hospitalSystem.service;

import com.example.hospitalSystem.models.CrudObject;

import java.util.List;

public interface CrudService<T extends CrudObject> {

    T save(T obj);

    List<T> findAll();

    T findById(String id);
}
