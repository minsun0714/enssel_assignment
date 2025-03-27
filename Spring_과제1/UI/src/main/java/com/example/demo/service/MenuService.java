package com.example.demo.service;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.dto.MenuDTO;

@Service
public class MenuService {
	private final RestTemplate restTemplate;

	public MenuService(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	public List<MenuDTO> getAllMenus() {
		ResponseEntity<MenuDTO[]> response = restTemplate.getForEntity(
			"http://localhost:12400/menu/bi/menu/table", MenuDTO[].class
		);
		return Arrays.asList(Objects.requireNonNull(response.getBody()));
	}
}
