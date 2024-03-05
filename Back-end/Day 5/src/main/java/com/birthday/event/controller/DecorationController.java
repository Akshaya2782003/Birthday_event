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

import com.birthday.event.dto.DecorationDto;
import com.birthday.event.service.DecorationService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/decorations")
public class DecorationController {

    private DecorationService decorationService;

    // Add User REST API
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<DecorationDto> createDecoration(@RequestBody DecorationDto decorationDto) {
        DecorationDto savedDecoration = decorationService.createDecoration(decorationDto);
        return new ResponseEntity<>(savedDecoration, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<DecorationDto> getDecorationById(@PathVariable("id") Long userId) {
        DecorationDto decorationDto = decorationService.getDecorationById(userId);
        return ResponseEntity.ok(decorationDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<DecorationDto>> getAllDecorations() {
        List<DecorationDto> decorations = decorationService.getAllDecorations();
        return ResponseEntity.ok(decorations);
    }

    // Update User REST API
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<DecorationDto> updateDecoration(@PathVariable("id") Long userId, @RequestBody DecorationDto datesDto) {
        DecorationDto updatedDecoration = decorationService.updateDecoration(userId, datesDto);
        return ResponseEntity.ok(updatedDecoration);
    }

    // Delete User REST API
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteDecoration(@PathVariable("id") Long userId) {
        decorationService.deleteDecoration(userId);
        return ResponseEntity.noContent().build();
    }
}