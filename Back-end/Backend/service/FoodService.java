package com.birthday.event.service;

import java.util.List;

import com.birthday.event.dto.FoodDto;
import com.birthday.event.entity.Food;


public interface FoodService {
    FoodDto createFood(FoodDto foodDto);

    FoodDto getFoodById(Long foodId);

    List<FoodDto> getAllFoods();

    FoodDto updateFood(Long foodId, FoodDto foodDto);

    void deleteFood(Long foodId);
    
    List<FoodDto> getFoodsByUserId(Long userId);

     public List<Food> getWishlistedFoods() ;
}
