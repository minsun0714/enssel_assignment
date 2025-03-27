package com.example.api.repository;

import java.util.List;

import com.example.api.domain.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {

	List<Menu> findByUpperMenuId(int menuId);
}
