package com.birthday.event.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Returngift;


@Repository
public interface ReturnGiftRepo extends JpaRepository<Returngift, Long> {

    List<Returngift> findUserById(Long id);
    List<Returngift> findByWishlistedTrue();
}
