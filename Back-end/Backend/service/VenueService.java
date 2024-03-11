package com.birthday.event.service;

import java.util.List;

import com.birthday.event.dto.VenueDto;
import com.birthday.event.entity.Venue;



public interface VenueService {
    VenueDto createVenue(VenueDto venueDto);

    VenueDto getVenueById(Long venueId);

    List<VenueDto> getAllVenues();

    VenueDto updateVenue(Long venueId, VenueDto venueDto);

    void deleteVenue(Long venueId);

    public List<Venue> getWishlistedVenues() ;
}
