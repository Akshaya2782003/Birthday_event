package com.birthday.event.service.implementation;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.FoodDto;
import com.birthday.event.entity.Food;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.FoodMapper;
import com.birthday.event.repository.FoodRepo;
import com.birthday.event.service.FoodService;

import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FoodImpl implements FoodService {

    private FoodRepo foodRepo;

    @Override
    public FoodDto createFood(FoodDto foodDto) {
        Food food = FoodMapper.mapToFood(foodDto);
        Food savedFood = foodRepo.save(food);
        return FoodMapper.mapToFoodDto(savedFood);
    }

    @Override
    public FoodDto getFoodById(Long userId) {
        Food food = foodRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return FoodMapper.mapToFoodDto(food);
    }

    @Override
    public List<FoodDto> getAllFoods() {
        List<Food> foods = foodRepo.findAll();
        return foods.stream().map(FoodMapper::mapToFoodDto).collect(Collectors.toList());
    }

    @Override
    public FoodDto updateFood(Long userId, FoodDto FoodDto) {
        Food existingFood = foodRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Food updatedFood = FoodMapper.mapToFood(FoodDto);
        updatedFood.setId(existingFood.getId());
        Food savedFood = foodRepo.save(updatedFood);
        return FoodMapper.mapToFoodDto(savedFood);
    }

    @Override
    public void deleteFood(Long userId) {
        foodRepo.deleteById(userId);
    }
}