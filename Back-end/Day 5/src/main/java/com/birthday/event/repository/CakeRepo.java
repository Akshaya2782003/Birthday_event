package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.Cake;

public interface CakeRepo extends JpaRepository<Cake, Long> {

}
