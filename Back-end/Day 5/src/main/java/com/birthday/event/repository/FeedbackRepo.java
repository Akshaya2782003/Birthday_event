package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback, Long> {

}
