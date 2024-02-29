package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
