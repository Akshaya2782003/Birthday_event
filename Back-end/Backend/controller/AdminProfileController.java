package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.AdminProfileDto;
import com.birthday.event.service.AdminProfileService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "localhost://5173")
@RequestMapping("/api/l")

public class AdminProfileController {

    private AdminProfileService adminProfileService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<AdminProfileDto> createAdminProfileItem(@RequestBody AdminProfileDto adminProfileDto) {
        AdminProfileDto savedAdminProfileItem = adminProfileService.createAdminProfileItem(adminProfileDto);
        return new ResponseEntity<>(savedAdminProfileItem, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<AdminProfileDto> getAdminProfileItemById(@PathVariable("id") Long adminProfileItemId) {
        AdminProfileDto adminProfileDto = adminProfileService.getAdminProfileById(adminProfileItemId);
        return ResponseEntity.ok(adminProfileDto);
    }

    @GetMapping
    public ResponseEntity<List<AdminProfileDto>> getAllAdminProfileItems() {
        List<AdminProfileDto> adminProfileItems = adminProfileService.getAllAdminProfiles();
        return ResponseEntity.ok(adminProfileItems);
    }

    
    @PutMapping("{id}")
    public ResponseEntity<AdminProfileDto> updateAdminProfileItem(@PathVariable("id") Long adminProfileItemId, @RequestBody AdminProfileDto AdminProfileDto) {
        AdminProfileDto updatedAdminProfileItem = adminProfileService.updateAdminProfile(adminProfileItemId, AdminProfileDto);
        return ResponseEntity.ok(updatedAdminProfileItem);
    }

    
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteAdminProfileItem(@PathVariable("id") Long adminProfileItemId) {
        adminProfileService.deleteAdminProfile(adminProfileItemId);
        return ResponseEntity.noContent().build();
    }
}
