package com.example.backend.service.impl;

import org.springframework.stereotype.Service;

import com.example.backend.service.CustomService;

@Service
public class CustomServiceImpl implements CustomService {

    @Override
    public String greeting() {
        return "Welcome to our real world";
    }
}
