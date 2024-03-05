package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.Food;

public interface FoodRepo extends JpaRepository<Food, Long> {

}
