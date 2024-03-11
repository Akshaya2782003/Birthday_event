package com.birthday.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Wishlist;

import java.util.List;

@Repository
public interface WishlistRepo extends JpaRepository<Wishlist, Long> {
    List<Wishlist> findUserById(Long id);
}
