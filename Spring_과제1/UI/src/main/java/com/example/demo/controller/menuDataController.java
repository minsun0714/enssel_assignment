package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.dto.MenuDTO;
import com.example.demo.service.MenuService;

@Controller
@RequestMapping("/page2")
public class menuDataController {
    @Autowired
    private MenuService menuService;

    @GetMapping
    public String page2(Model model){
        List<MenuDTO> menuList = menuService.getAllMenus();
        model.addAttribute("menuList", menuList);
        model.addAttribute("content", "page2");
        return "layout";
    }

    @GetMapping("/table")
    public String table(){
        return "table";
    }
}
