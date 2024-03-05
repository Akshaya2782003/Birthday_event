package com.birthday.event.service.implementation;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.VenueDto;
import com.birthday.event.entity.Venue;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.VenueMapper;
import com.birthday.event.repository.VenueRepo;
import com.birthday.event.service.VenueService;

import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class VenueImpl implements VenueService {

    private VenueRepo venueRepo;

    @Override
    public VenueDto createVenue(VenueDto venueDto) {
        Venue venue = VenueMapper.mapToVenue(venueDto);
        Venue savedVenue = venueRepo.save(venue);
        return VenueMapper.mapToVenueDto(savedVenue);
    }

    @Override
    public VenueDto getVenueById(Long userId) {
        Venue venue = venueRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return VenueMapper.mapToVenueDto(venue);
    }

    @Override
    public List<VenueDto> getAllVenues() {
        List<Venue> venues = venueRepo.findAll();
        return venues.stream().map(VenueMapper::mapToVenueDto).collect(Collectors.toList());
    }

    @Override
    public VenueDto updateVenue(Long userId, VenueDto VenueDto) {
        Venue existingVenue = venueRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Venue updatedVenue = VenueMapper.mapToVenue(VenueDto);
        updatedVenue.setId(existingVenue.getId());
        Venue savedVenue = venueRepo.save(updatedVenue);
        return VenueMapper.mapToVenueDto(savedVenue);
    }

    @Override
    public void deleteVenue(Long userId) {
        venueRepo.deleteById(userId);
    }
}