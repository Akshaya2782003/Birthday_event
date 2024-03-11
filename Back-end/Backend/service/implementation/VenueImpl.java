package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.VenueDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.entity.Venue;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.VenueMapper;
import com.birthday.event.repository.VenueRepo;
import com.birthday.event.service.VenueService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class VenueImpl implements VenueService {

    private final VenueRepo venueRepository;

    @Override
    public VenueDto createVenue(VenueDto venueDto) {
        Venue venue = VenueMapper.mapToVenue(venueDto);
        Venue savedVenue = venueRepository.save(venue);
        return VenueMapper.mapToVenueDto(savedVenue);
    }

    @Override
    public VenueDto getVenueById(Long venueId) {
        Venue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new ResourceNotFoundException("Venue not found with id: " + venueId));
        return VenueMapper.mapToVenueDto(venue);
    }

    @Override
    public List<VenueDto> getAllVenues() {
        List<Venue> venues = venueRepository.findAll();
        return venues.stream().map(VenueMapper::mapToVenueDto).collect(Collectors.toList());
    }

    @Override
    public VenueDto updateVenue(Long venueId, VenueDto venueDto) {
        Venue existingVenue = venueRepository.findById(venueId)
                .orElseThrow(() -> new ResourceNotFoundException("Venue not found with id: " + venueId));
        Venue updatedVenue = VenueMapper.mapToVenue(venueDto);
        updatedVenue.setId(existingVenue.getId());
        Venue savedVenue = venueRepository.save(updatedVenue);
        return VenueMapper.mapToVenueDto(savedVenue);
    }

    @Override
    public void deleteVenue(Long venueId) {
        venueRepository.deleteById(venueId);
    }


     public List<Venue> getWishlistedCakes() {
        return venueRepository.findByWishlistedTrue();
    }

    @Override
    public List<Venue> getWishlistedVenues() {
        return venueRepository.findByWishlistedTrue();
    }
}
