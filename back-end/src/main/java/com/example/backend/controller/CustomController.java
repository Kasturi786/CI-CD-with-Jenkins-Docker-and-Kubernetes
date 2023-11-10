package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.service.CustomService;

@RestController
public class CustomController {

    @Autowired
    private CustomService customService;

    @GetMapping("/greeting")
    public String greeting() {
        return customService.greeting();
    }
}
