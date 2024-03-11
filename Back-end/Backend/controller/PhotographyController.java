package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.PhotographyDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.entity.Photography;
import com.birthday.event.service.PhotographyService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/photography")
public class PhotographyController {

    private PhotographyService photographyService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<PhotographyDto> createPhotography(@RequestBody PhotographyDto photographyDto) {
        PhotographyDto savedPhotography = photographyService.createPhotography(photographyDto);
        return new ResponseEntity<>(savedPhotography, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<PhotographyDto> getPhotographyById(@PathVariable("id") Long photographyId) {
        PhotographyDto photographyDto = photographyService.getPhotographyById(photographyId);
        return ResponseEntity.ok(photographyDto);
    }

    @GetMapping
    public ResponseEntity<List<PhotographyDto>> getAllPhotographyServices() {
        List<PhotographyDto> photographyServices = photographyService.getAllPhotographyServices();
        return ResponseEntity.ok(photographyServices);
    }

    @PutMapping("{id}")
    public ResponseEntity<PhotographyDto> updatePhotography(@PathVariable("id") Long photographyId, @RequestBody PhotographyDto photographyDto) {
        PhotographyDto updatedPhotography = photographyService.updatePhotography(photographyId, photographyDto);
        return ResponseEntity.ok(updatedPhotography);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deletePhotography(@PathVariable("id") Long photographyId) {
        photographyService.deletePhotography(photographyId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PhotographyDto>> getPhotographyServicesByUserId(@PathVariable("userId") Long userId) {
        List<PhotographyDto> photographyServices = photographyService.getPhotographyServicesByUserId(userId);
        return ResponseEntity.ok(photographyServices);
    }

    @GetMapping("/wishlisted")
    public ResponseEntity<List<Photography>> getWishlistedCakes() {
        List<Photography> wishlistedCakes = photographyService.getWishlistedPhotography();
        return ResponseEntity.ok().body(wishlistedCakes);
    }

}
