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

import com.birthday.event.dto.FoodDto;
import com.birthday.event.service.FoodService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/foods")
public class FoodController {

    private FoodService foodService;

    // Add User REST API
    @PostMapping
    public ResponseEntity<FoodDto> createFood(@RequestBody FoodDto FoodDto) {
        FoodDto savedFood = foodService.createFood(FoodDto);
        return new ResponseEntity<>(savedFood, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<FoodDto> getFoodById(@PathVariable("id") Long userId) {
        FoodDto foodDto = foodService.getFoodById(userId);
        return ResponseEntity.ok(foodDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<FoodDto>> getAllFoods() {
        List<FoodDto> foods = foodService.getAllFoods();
        return ResponseEntity.ok(foods);
    }

    // Update User REST API
    @PutMapping("{id}")
    public ResponseEntity<FoodDto> updateFood(@PathVariable("id") Long userId, @RequestBody FoodDto FoodDto) {
        FoodDto updatedFood = foodService.updateFood(userId, FoodDto);
        return ResponseEntity.ok(updatedFood);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable("id") Long userId) {
        foodService.deleteFood(userId);
        return ResponseEntity.noContent().build();
    }
}