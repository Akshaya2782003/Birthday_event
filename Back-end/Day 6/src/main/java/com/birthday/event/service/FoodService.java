
package com.birthday.event.service;
import java.util.List;

import com.birthday.event.dto.FoodDto;


public interface FoodService
{
    FoodDto createFood(FoodDto foodDto);

    FoodDto getFoodById(Long userId);

    List<FoodDto> getAllFoods();

    FoodDto updateFood(Long userId, FoodDto foodDto);

    void deleteFood(Long userId);
}