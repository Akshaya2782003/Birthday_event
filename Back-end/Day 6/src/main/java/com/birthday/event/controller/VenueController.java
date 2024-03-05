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

import com.birthday.event.dto.VenueDto;
import com.birthday.event.service.VenueService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/venues")
public class VenueController {

    private VenueService venueService;

    // Add User REST API
    @PostMapping
    public ResponseEntity<VenueDto> createVenue(@RequestBody VenueDto venueDto) {
        VenueDto savedVenue = venueService.createVenue(venueDto);
        return new ResponseEntity<>(savedVenue, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<VenueDto> getVenueById(@PathVariable("id") Long userId) {
        VenueDto venueDto = venueService.getVenueById(userId);
        return ResponseEntity.ok(venueDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<VenueDto>> getAllVenues() {
        List<VenueDto> venues = venueService.getAllVenues();
        return ResponseEntity.ok(venues);
    }

    // Update User REST API
    @PutMapping("{id}")
    public ResponseEntity<VenueDto> updateVenue(@PathVariable("id") Long userId, @RequestBody VenueDto venueDto) {
        VenueDto updatedVenue = venueService.updateVenue(userId, venueDto);
        return ResponseEntity.ok(updatedVenue);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteVenue(@PathVariable("id") Long userId) {
        venueService.deleteVenue(userId);
        return ResponseEntity.noContent().build();
    }
}