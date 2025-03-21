package com.example.api.controller;

import com.example.api.domain.Menu;
import com.example.api.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bi/menu")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @GetMapping("/table")
    public ResponseEntity<List<Menu>> getMenus(){
        return ResponseEntity.ok(menuService.getAllMenus());
    }

    @PostMapping("/regi")
    public ResponseEntity<Menu> postMenu(@RequestBody Menu menu){
        System.out.println(menu.getUpperMenuId());
        Menu createdMenu = menuService.createMenu(menu);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdMenu);
    }

    @PostMapping("/delete")
    public ResponseEntity<Void> deleteMenu(@RequestParam int menuId){
        menuService.deleteMenu(menuId);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
