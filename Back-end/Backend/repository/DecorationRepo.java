package com.birthday.event.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Decoration;

@Repository
public interface DecorationRepo extends JpaRepository<Decoration, Long> {

    List<Decoration> findUserById(Long id);
    List<Decoration> findByWishlistedTrue();
    
}
