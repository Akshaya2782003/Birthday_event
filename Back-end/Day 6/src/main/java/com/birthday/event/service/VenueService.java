
package com.birthday.event.service;
import java.util.List;

import com.birthday.event.dto.VenueDto;


public interface VenueService
{
    VenueDto createVenue(VenueDto venueDto);

    VenueDto getVenueById(Long userId);

    List<VenueDto> getAllVenues();

    VenueDto updateVenue(Long userId, VenueDto venueDto);

    void deleteVenue(Long userId);
}