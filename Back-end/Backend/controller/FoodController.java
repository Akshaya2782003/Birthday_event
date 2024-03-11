package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.FoodDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.entity.Food;
import com.birthday.event.service.FoodService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/foods")
public class FoodController {

    private FoodService foodService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<FoodDto> createFood(@RequestBody FoodDto foodDto) {
        FoodDto savedFood = foodService.createFood(foodDto);
        return new ResponseEntity<>(savedFood, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<FoodDto> getFoodById(@PathVariable("id") Long foodId) {
        FoodDto foodDto = foodService.getFoodById(foodId);
        return ResponseEntity.ok(foodDto);
    }

    @GetMapping
    public ResponseEntity<List<FoodDto>> getAllFoods() {
        List<FoodDto> foods = foodService.getAllFoods();
        return ResponseEntity.ok(foods);
    }

    @PutMapping("{id}")
    public ResponseEntity<FoodDto> updateFood(@PathVariable("id") Long foodId, @RequestBody FoodDto foodDto) {
        FoodDto updatedFood = foodService.updateFood(foodId, foodDto);
        return ResponseEntity.ok(updatedFood);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable("id") Long foodId) {
        foodService.deleteFood(foodId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<FoodDto>> getFoodsByUserId(@PathVariable("userId") Long userId) {
        List<FoodDto> foods = foodService.getFoodsByUserId(userId);
        return ResponseEntity.ok(foods);
    }

    @GetMapping("/wishlisted")
    public ResponseEntity<List<Food>> getWishlistedCakes() {
        List<Food> wishlistedCakes = foodService.getWishlistedFoods();
        return ResponseEntity.ok().body(wishlistedCakes);
    }

}
