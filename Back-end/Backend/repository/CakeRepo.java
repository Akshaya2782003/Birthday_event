package com.birthday.event.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Cake;

@Repository
public interface CakeRepo extends JpaRepository<Cake, Long> {

    List<Cake> findUserById(Long id);



    List<Cake> findByWishlistedTrue();
}
