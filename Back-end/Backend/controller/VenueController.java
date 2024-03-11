package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.VenueDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.entity.Venue;
import com.birthday.event.service.VenueService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/venues")
public class VenueController {

    private VenueService venueService;

    @PostMapping
    public ResponseEntity<VenueDto> createVenue(@RequestBody VenueDto venueDto) {
        VenueDto savedVenue = venueService.createVenue(venueDto);
        return new ResponseEntity<>(savedVenue, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<VenueDto> getVenueById(@PathVariable("id") Long venueId) {
        VenueDto venueDto = venueService.getVenueById(venueId);
        return ResponseEntity.ok(venueDto);
    }

    @GetMapping
    public ResponseEntity<List<VenueDto>> getAllVenues() {
        List<VenueDto> venues = venueService.getAllVenues();
        return ResponseEntity.ok(venues);
    }

    @PutMapping("{id}")
    public ResponseEntity<VenueDto> updateVenue(@PathVariable("id") Long venueId, @RequestBody VenueDto venueDto) {
        VenueDto updatedVenue = venueService.updateVenue(venueId, venueDto);
        return ResponseEntity.ok(updatedVenue);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteVenue(@PathVariable("id") Long venueId) {
        venueService.deleteVenue(venueId);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/wishlisted")
    public ResponseEntity<List<Venue>> getWishlistedCakes() {
        List<Venue> wishlistedCakes = venueService.getWishlistedVenues();
        return ResponseEntity.ok().body(wishlistedCakes);
    }

}
