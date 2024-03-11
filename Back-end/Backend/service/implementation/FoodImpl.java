package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.FoodDto;
import com.birthday.event.entity.Food;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.FoodMapper;
import com.birthday.event.repository.FoodRepo;
import com.birthday.event.service.FoodService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FoodImpl implements FoodService {

    private final FoodRepo foodRepository;

    @Override
    public FoodDto createFood(FoodDto foodDto) {
        Food food = FoodMapper.mapToFood(foodDto);
        Food savedFood = foodRepository.save(food);
        return FoodMapper.mapToFoodDto(savedFood);
    }

    @Override
    public FoodDto getFoodById(Long foodId) {
        Food food = foodRepository.findById(foodId)
                .orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + foodId));
        return FoodMapper.mapToFoodDto(food);
    }

    @Override
    public List<FoodDto> getAllFoods() {
        List<Food> foods = foodRepository.findAll();
        return foods.stream().map(FoodMapper::mapToFoodDto).collect(Collectors.toList());
    }

    @Override
    public FoodDto updateFood(Long foodId, FoodDto foodDto) {
        Food existingFood = foodRepository.findById(foodId)
                .orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + foodId));
        Food updatedFood = FoodMapper.mapToFood(foodDto);
        updatedFood.setId(existingFood.getId());
        Food savedFood = foodRepository.save(updatedFood);
        return FoodMapper.mapToFoodDto(savedFood);
    }

    @Override
    public void deleteFood(Long foodId) {
        foodRepository.deleteById(foodId);
    }

    @Override
    public List<FoodDto> getFoodsByUserId(Long userId) {
        List<Food> foods = foodRepository.findUserById(userId);
        return foods.stream().map(FoodMapper::mapToFoodDto).collect(Collectors.toList());
    }

     public List<Food> getWishlistedFoods() {
        return foodRepository.findByWishlistedTrue();
    }

}
