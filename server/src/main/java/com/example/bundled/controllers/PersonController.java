package com.example.bundled.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
    @GetMapping("api/person")
    public Person get() {
        return new Person("Huck", "Finn");
    }
}