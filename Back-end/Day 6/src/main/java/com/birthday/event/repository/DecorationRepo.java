package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.Decoration;

public interface DecorationRepo extends JpaRepository<Decoration, Long> {

}