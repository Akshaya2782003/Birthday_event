package com.birthday.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Cart;


@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {
}
