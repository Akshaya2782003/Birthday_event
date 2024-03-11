package com.birthday.event.mapper;

import com.birthday.event.dto.VenueDto;
import com.birthday.event.entity.Venue;

public class VenueMapper {

    public static VenueDto mapToVenueDto(Venue venue) {
        return new VenueDto(
                venue.getId(),
                venue.getName(),
                venue.getLocation(),
                venue.getMembers(),
                venue.getCost(),
                venue.getImage(),
                venue.isWishlisted());
    }

    public static Venue mapToVenue(VenueDto venueDto) {
        return new Venue(
                venueDto.getId(),
                venueDto.getName(),
                venueDto.getLocation(),
                venueDto.getMembers(),
                venueDto.getCost(),
                venueDto.getImage(),
                venueDto.isWishlisted());
    }
}
