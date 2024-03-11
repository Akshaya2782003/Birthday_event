package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.event.dto.DatesDto;
import com.birthday.event.service.DatesService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/dates")
@CrossOrigin(origins ="*")
public class DatesController {

    private DatesService datesService;

    // Add User REST API
    @PostMapping
    public ResponseEntity<DatesDto> createUser(@RequestBody DatesDto datesDto) {
        DatesDto savedDates = datesService.createDate(datesDto);
        return new ResponseEntity<>(savedDates, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<DatesDto> getDateById(@PathVariable("id") Long userId) {
        DatesDto datesDto = datesService.getDateById(userId);
        return ResponseEntity.ok(datesDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<DatesDto>> getAllDates() {
        List<DatesDto> dates = datesService.getAllDates();
        return ResponseEntity.ok(dates);
    }

    // Update User REST API
    @PutMapping("{id}")
    public ResponseEntity<DatesDto> updateDate(@PathVariable("id") Long userId, @RequestBody DatesDto datesDto) {
        DatesDto updatedDate = datesService.updateDate(userId, datesDto);
        return ResponseEntity.ok(updatedDate);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteDate(@PathVariable("id") Long userId) {
        datesService.deleteDate(userId);
        return ResponseEntity.noContent().build();
    }
}