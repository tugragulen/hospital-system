package com.example.hospitalSystem.repository;

import com.example.hospitalSystem.models.CrudObject;

import java.util.HashMap;
import java.util.List;

public abstract class CrudRepository<T extends CrudObject> {
    protected HashMap<String, T> repository = new HashMap<>();

    public T save(T obj) {
        repository.put(obj.getId(), obj);
        return obj;
    }

    public List<T> findAll() {
        return repository.values().stream().toList();
    }

    public T findById(String id) {
        return repository.get(id);
    }

    public void delete(String id) {
        repository.remove(id);
    }
}
