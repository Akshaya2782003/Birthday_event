package com.birthday.event.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Entertainment;


@Repository
public interface EntertainmentRepo extends JpaRepository<Entertainment, Long> {

    List<Entertainment> findUserById(Long id);
    
    List<Entertainment> findByWishlistedTrue();
}
