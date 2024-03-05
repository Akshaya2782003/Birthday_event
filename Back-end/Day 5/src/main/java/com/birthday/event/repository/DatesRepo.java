package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.Dates;

public interface DatesRepo extends JpaRepository<Dates, Long> {

}
