package com.birthday.event.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Photography;


@Repository
public interface PhotographyRepo extends JpaRepository<Photography, Long> {

    List<Photography> findUserById(Long id);
    List<Photography> findByWishlistedTrue();
}
