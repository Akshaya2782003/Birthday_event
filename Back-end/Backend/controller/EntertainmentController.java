package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.EntertainmentDto;
import com.birthday.event.entity.Entertainment;
import com.birthday.event.service.EntertainmentService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/entertainment")
public class EntertainmentController {

    private EntertainmentService entertainmentService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<EntertainmentDto> createEntertainment(@RequestBody EntertainmentDto entertainmentDto) {
        EntertainmentDto savedEntertainment = entertainmentService.createEntertainment(entertainmentDto);
        return new ResponseEntity<>(savedEntertainment, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<EntertainmentDto> getEntertainmentById(@PathVariable("id") Long entertainmentId) {
        EntertainmentDto entertainmentDto = entertainmentService.getEntertainmentById(entertainmentId);
        return ResponseEntity.ok(entertainmentDto);
    }

    @GetMapping
    public ResponseEntity<List<EntertainmentDto>> getAllEntertainmentServices() {
        List<EntertainmentDto> entertainmentServices = entertainmentService.getAllEntertainmentServices();
        return ResponseEntity.ok(entertainmentServices);
    }

    @PutMapping("{id}")
    public ResponseEntity<EntertainmentDto> updateEntertainment(@PathVariable("id") Long entertainmentId, @RequestBody EntertainmentDto entertainmentDto) {
        EntertainmentDto updatedEntertainment = entertainmentService.updateEntertainment(entertainmentId, entertainmentDto);
        return ResponseEntity.ok(updatedEntertainment);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteEntertainment(@PathVariable("id") Long entertainmentId) {
        entertainmentService.deleteEntertainment(entertainmentId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<EntertainmentDto>> getEntertainmentServicesByUserId(@PathVariable("userId") Long userId) {
        List<EntertainmentDto> entertainmentServices = entertainmentService.getEntertainmentServicesByUserId(userId);
        return ResponseEntity.ok(entertainmentServices);
    }

    @GetMapping("/wishlisted")
    public ResponseEntity<List<Entertainment>> getWishlistedCakes() {
        List<Entertainment> wishlistedCakes = entertainmentService.getWishlistedEntertainments();
        return ResponseEntity.ok().body(wishlistedCakes);
    }

}
