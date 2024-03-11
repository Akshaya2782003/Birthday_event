package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.EntertainmentDto;
import com.birthday.event.entity.Entertainment;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.EntertainmentMapper;
import com.birthday.event.repository.EntertainmentRepo;
import com.birthday.event.service.EntertainmentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EntertainmentImpl implements EntertainmentService {

    private final EntertainmentRepo entertainmentRepository;

    @Override
    public EntertainmentDto createEntertainment(EntertainmentDto entertainmentDto) {
        Entertainment entertainment = EntertainmentMapper.mapToEntertainment(entertainmentDto);
        Entertainment savedEntertainment = entertainmentRepository.save(entertainment);
        return EntertainmentMapper.mapToEntertainmentDto(savedEntertainment);
    }

    @Override
    public EntertainmentDto getEntertainmentById(Long entertainmentId) {
        Entertainment entertainment = entertainmentRepository.findById(entertainmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Entertainment service not found with id: " + entertainmentId));
        return EntertainmentMapper.mapToEntertainmentDto(entertainment);
    }

    @Override
    public List<EntertainmentDto> getAllEntertainmentServices() {
        List<Entertainment> entertainmentServices = entertainmentRepository.findAll();
        return entertainmentServices.stream().map(EntertainmentMapper::mapToEntertainmentDto).collect(Collectors.toList());
    }

    @Override
    public EntertainmentDto updateEntertainment(Long entertainmentId, EntertainmentDto entertainmentDto) {
        Entertainment existingEntertainment = entertainmentRepository.findById(entertainmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Entertainment service not found with id: " + entertainmentId));
        Entertainment updatedEntertainment = EntertainmentMapper.mapToEntertainment(entertainmentDto);
        updatedEntertainment.setId(existingEntertainment.getId());
        Entertainment savedEntertainment = entertainmentRepository.save(updatedEntertainment);
        return EntertainmentMapper.mapToEntertainmentDto(savedEntertainment);
    }

    @Override
    public void deleteEntertainment(Long entertainmentId) {
        entertainmentRepository.deleteById(entertainmentId);
    }

    @Override
    public List<EntertainmentDto> getEntertainmentServicesByUserId(Long userId) {
        List<Entertainment> entertainmentServices = entertainmentRepository.findUserById(userId);
        return entertainmentServices.stream().map(EntertainmentMapper::mapToEntertainmentDto).collect(Collectors.toList());
    }


     public List<Entertainment> getWishlistedCakes() {
        return entertainmentRepository.findByWishlistedTrue();
    }

    @Override
    public List<Entertainment> getWishlistedEntertainments() {
        return entertainmentRepository.findByWishlistedTrue();
    }
}
