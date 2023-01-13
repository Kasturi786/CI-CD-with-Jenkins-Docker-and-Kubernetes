package com.example.dockerk8s.controller;

import com.example.dockerk8s.service.CustomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomController {

    @Autowired
    private CustomService customService;

    @GetMapping("/greeting")
    public String greeting(){
        return customService.greeting();
    }
}
