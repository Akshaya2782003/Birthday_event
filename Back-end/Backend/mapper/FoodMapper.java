package com.birthday.event.mapper;

import com.birthday.event.dto.FoodDto;
import com.birthday.event.entity.Food;

public class FoodMapper {

    public static FoodDto mapToFoodDto(Food food) {
        return new FoodDto(
                food.getId(),
                food.getName(),
                food.getPrice(),
                food.getMinimumQuantity(),
                food.getMenu(),
                food.getImage(),
                food.isWishlisted());
    }


    public static Food mapToFood(FoodDto foodDto) {
        Food food = new Food();
        food.setId(foodDto.getId());
        food.setName(foodDto.getName());
        food.setPrice(foodDto.getPrice());
        food.setMinimumQuantity(foodDto.getMinimumQuantity());
        food.setMenu(foodDto.getMenu());
        food.setImage(foodDto.getImage());
        food.setWishlisted(foodDto.isWishlisted());
        return food;
    }
}
