package com.example.helloworld.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping({"/","/lecture/index"})
    public String index() {
        return "index";
    }
}
