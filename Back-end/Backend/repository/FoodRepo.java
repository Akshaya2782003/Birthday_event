package com.birthday.event.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Food;

@Repository
public interface FoodRepo extends JpaRepository<Food, Long> {

    List<Food> findUserById(Long id);
    List<Food> findByWishlistedTrue();
}
