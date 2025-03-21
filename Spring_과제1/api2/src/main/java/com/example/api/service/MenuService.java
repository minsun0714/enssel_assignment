package com.example.api.service;

import com.example.api.domain.Menu;
import com.example.api.repository.MenuRepository;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MenuService {
    @Autowired
    EntityManager em;

    private final MenuRepository menuRepository;

    @Autowired
    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<Menu> getAllMenus(){
        return menuRepository.findAll();
    }

    @Transactional
    public Menu createMenu(Menu menu){
        Menu newMenu = new Menu();
        newMenu.setMenuname(menu.getMenuname());
        newMenu.setSort(menu.getSort());
        newMenu.setUpperMenuId(menu.getUpperMenuId());
        newMenu.setRegisteredUser(menu.getRegisteredUser());
        newMenu.setUrl(menu.getUrl());
        newMenu.setUseYN("Y");
        return menuRepository.save(newMenu);
    }

    @Transactional
    public void deleteMenu(int menuId){
        Menu deletedMenu = menuRepository.findById(menuId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 메뉴입니다."));

        deletedMenu.setUpdatedUser(deletedMenu.getRegisteredUser());
        deletedMenu.setUpdatedDate(LocalDateTime.now());
        deletedMenu.setUseYN("N");
        menuRepository.save(deletedMenu);
    }
}
