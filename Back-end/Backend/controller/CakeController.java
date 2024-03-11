package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.CakeDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.service.CakeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/cakes")
public class CakeController {

    private CakeService cakeService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<CakeDto> createCake(@RequestBody CakeDto cakeDto) {
        CakeDto savedCake = cakeService.createCake(cakeDto);
        return new ResponseEntity<>(savedCake, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CakeDto> getCakeById(@PathVariable("id") Long cakeId) {
        CakeDto cakeDto = cakeService.getCakeById(cakeId);
        return ResponseEntity.ok(cakeDto);
    }

    @GetMapping
    public ResponseEntity<List<CakeDto>> getAllCakes() {
        List<CakeDto> cakes = cakeService.getAllCakes();
        return ResponseEntity.ok(cakes);
    }

    @PutMapping("{id}")
    public ResponseEntity<CakeDto> updateCake(@PathVariable("id") Long cakeId, @RequestBody CakeDto cakeDto) {
        CakeDto updatedCake = cakeService.updateCake(cakeId, cakeDto);
        return ResponseEntity.ok(updatedCake);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCake(@PathVariable("id") Long cakeId) {
        cakeService.deleteCake(cakeId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CakeDto>> getCakesByUserId(@PathVariable("userId") Long userId) {
        List<CakeDto> cakes = cakeService.getCakesByUserId(userId);
        return ResponseEntity.ok(cakes);
    }



    @GetMapping("/wishlisted")
    public ResponseEntity<List<Cake>> getWishlistedCakes() {
        List<Cake> wishlistedCakes = cakeService.getWishlistedCakes();
        return ResponseEntity.ok().body(wishlistedCakes);
    }

}
