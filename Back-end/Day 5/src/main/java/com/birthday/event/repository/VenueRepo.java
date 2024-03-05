package com.birthday.event.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.event.entity.Venue;

public interface VenueRepo extends JpaRepository<Venue, Long> {

}
