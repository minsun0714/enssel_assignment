package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page1")
public class tableDataController {

    @GetMapping
    public String page1(){
        return "page1";
    }

    @GetMapping("/table")
    public String table(){
        return "table";
    }
}
