package com.birthday.event.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.AdminProfile;

@Repository
public interface AdminProfileRepo extends JpaRepository<AdminProfile, Long> {

    List<AdminProfile> findUserById(Long id);
}
