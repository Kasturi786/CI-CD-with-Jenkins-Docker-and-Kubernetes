package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import com.example.backend.model.Student;

public interface StudentService {

    public Student save(Student student);
    public Student update(Student student);
    public Optional<Student> findById(long id);
    public void deleteById(Long id);

    public List<Student> findAll();
    
    

    
}
