package com.example.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import com.example.backend.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository repository;

    @Override
    public Student save(Student student) {
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'create'");
        Student createdStudent = repository.save(student);
        return createdStudent;
    }

    @Override
    public Student update(Student student) {
        // TODO Auto-generated method stub

        return repository.save(student);
    }

    @Override
    public Optional<Student> findById(long id) {
        // TODO Auto-generated method stub

        return repository.findById(id);
    
    }

    @Override
    public void deleteById(Long id) {
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'delete'");
        repository.deleteById(id);
    }

    @Override
    public List<Student> findAll() {
        // TODO Auto-generated method stub
        return repository.findAll();
    }
    
}
