package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.event.dto.CakeDto;
import com.birthday.event.service.CakeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/cakes")
public class CakeController {

    private CakeService cakeService;

    // Add User REST API
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<CakeDto> createCake(@RequestBody CakeDto cakeDto) {
        CakeDto savedCake = cakeService.createCake(cakeDto);
        return new ResponseEntity<>(savedCake, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<CakeDto> getCakeById(@PathVariable("id") Long userId) {
        CakeDto cakeDto = cakeService.getCakeById(userId);
        return ResponseEntity.ok(cakeDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<CakeDto>> getAllCakes() {
        List<CakeDto> cakes = cakeService.getAllCakes();
        return ResponseEntity.ok(cakes);
    }

    // Update User REST API
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<CakeDto> updateCake(@PathVariable("id") Long userId, @RequestBody CakeDto cakeDto) {
        CakeDto updatedCake = cakeService.updateCake(userId, cakeDto);
        return ResponseEntity.ok(updatedCake);
    }

    // Delete User REST API
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCake(@PathVariable("id") Long userId) {
        cakeService.deleteCake(userId);
        return ResponseEntity.noContent().build();
    }
}