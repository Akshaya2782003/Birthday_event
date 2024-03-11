package com.birthday.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.event.entity.Venue;

import java.util.List;
@Repository
public interface VenueRepo extends JpaRepository<Venue, Long> {
    List<Venue> findByWishlistedTrue();
}
