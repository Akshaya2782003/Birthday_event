package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.Photograph;

public interface PhotographRepo extends JpaRepository<Photograph, Long> {

}
