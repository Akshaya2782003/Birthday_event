package com.birthday.event.mapper;

import com.birthday.event.dto.VenueDto;
import com.birthday.event.entity.Venue;

public class  VenueMapper {

    public static VenueDto mapToVenueDto(Venue venue) {
        return new VenueDto(
                venue.getId(),
                venue.getName(),
                venue.getLocation(),
                venue.getCost(),
                venue.getImage()
                );
    }

    public static Venue mapToVenue(VenueDto venueDto) {
        return new Venue(
                venueDto.getId(),
                venueDto.getName(),
                venueDto.getLocation(),
                venueDto.getCost(),
                venueDto.getImage()
        );
    }

}