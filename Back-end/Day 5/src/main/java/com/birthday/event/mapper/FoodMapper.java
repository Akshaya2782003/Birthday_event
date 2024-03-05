package com.birthday.event.mapper;

import com.birthday.event.dto.FoodDto;
import com.birthday.event.entity.Food;

public class  FoodMapper {

    public static FoodDto mapToFoodDto(Food food) {
        return new FoodDto(
                food.getId(),
                food.getType(),
                food.getQuantity(),
                food.getCost(),
                food.getImage()
                );
    }

    public static Food mapToFood(FoodDto foodDto) {
        return new Food(
                foodDto.getId(),
                foodDto.getType(),
                foodDto.getQuantity(),
                foodDto.getCost(),
                foodDto.getImage()
        );
    }

}