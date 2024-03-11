package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.ReturnGiftDto;
import com.birthday.event.entity.Returngift;
import com.birthday.event.service.ReturnGiftService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/gifts")
public class ReturnGiftController {

    private ReturnGiftService returnGiftService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<ReturnGiftDto> createReturnGift(@RequestBody ReturnGiftDto returnGiftDto) {
        ReturnGiftDto savedReturnGift = returnGiftService.createReturnGift(returnGiftDto);
        return new ResponseEntity<>(savedReturnGift, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ReturnGiftDto> getReturnGiftById(@PathVariable("id") Long returnGiftId) {
        ReturnGiftDto returnGiftDto = returnGiftService.getReturnGiftById(returnGiftId);
        return ResponseEntity.ok(returnGiftDto);
    }

    @GetMapping
    public ResponseEntity<List<ReturnGiftDto>> getAllReturnGifts() {
        List<ReturnGiftDto> returnGifts = returnGiftService.getAllReturnGifts();
        return ResponseEntity.ok(returnGifts);
    }

    @PutMapping("{id}")
    public ResponseEntity<ReturnGiftDto> updateReturnGift(@PathVariable("id") Long returnGiftId, @RequestBody ReturnGiftDto returnGiftDto) {
        ReturnGiftDto updatedReturnGift = returnGiftService.updateReturnGift(returnGiftId, returnGiftDto);
        return ResponseEntity.ok(updatedReturnGift);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteReturnGift(@PathVariable("id") Long returnGiftId) {
        returnGiftService.deleteReturnGift(returnGiftId);
        return ResponseEntity.noContent().build();
    }
    
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ReturnGiftDto>> getReturnGiftsByUserId(@PathVariable("userId") Long userId) {
        List<ReturnGiftDto> returnGifts = returnGiftService.getReturnGiftsByUserId(userId);
        return ResponseEntity.ok(returnGifts);
    }

    @GetMapping("/wishlisted")
    public ResponseEntity<List<Returngift>> getWishlistedRtuenGifts() {
        List<Returngift> wishlistedCakes = returnGiftService.getWishlistedReturngifts();
        return ResponseEntity.ok().body(wishlistedCakes);
    }

}
