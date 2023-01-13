package com.example.dockerk8s.service.impl;

import com.example.dockerk8s.service.CustomService;
import org.springframework.stereotype.Service;

@Service
public class CustomServiceImpl implements CustomService {

    @Override
    public String greeting() {
        return "Welcome to our real world";
    }
}
