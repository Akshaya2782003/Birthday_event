package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.event.dto.PhotographDto;
import com.birthday.event.service.PhotographService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/photo")
public class PhotographController {

    private PhotographService photographService;

    // Add User REST API
    @PostMapping
    public ResponseEntity<PhotographDto> createPhotograph(@RequestBody PhotographDto photographDto) {
        PhotographDto savedPhotograph = photographService.createPhotograph(photographDto);
        return new ResponseEntity<>(savedPhotograph, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<PhotographDto> getPhotographById(@PathVariable("id") Long userId) {
        PhotographDto photographDto = photographService.getPhotographById(userId);
        return ResponseEntity.ok(photographDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<PhotographDto>> getAllPhotographs() {
        List<PhotographDto> photographs = photographService.getAllPhotographs();
        return ResponseEntity.ok(photographs);
    }

    // Update User REST API
    @PutMapping("{id}")
    public ResponseEntity<PhotographDto> updatePhotograph(@PathVariable("id") Long userId, @RequestBody PhotographDto photographDto) {
        PhotographDto updatedPhotograph = photographService.updatePhotograph(userId, photographDto);
        return ResponseEntity.ok(updatedPhotograph);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deletePhotograph(@PathVariable("id") Long userId) {
        photographService.deletePhotograph(userId);
        return ResponseEntity.noContent().build();
    }
}