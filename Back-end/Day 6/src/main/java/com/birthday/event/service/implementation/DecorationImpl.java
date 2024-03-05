package com.birthday.event.service.implementation;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.DecorationDto;
import com.birthday.event.entity.Decoration;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.DecorationMapper;
import com.birthday.event.repository.DecorationRepo;
import com.birthday.event.service.DecorationService;

import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DecorationImpl implements DecorationService {

    private DecorationRepo decorationRepo;

    @Override
    public DecorationDto createDecoration(DecorationDto decorationDto) {
        Decoration cake = DecorationMapper.mapToDecoration(decorationDto);
        Decoration savedDecoration = decorationRepo.save(cake);
        return DecorationMapper.mapToDecorationDto(savedDecoration);
    }

    @Override
    public DecorationDto getDecorationById(Long userId) {
        Decoration decoration = decorationRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return DecorationMapper.mapToDecorationDto(decoration);
    }

    @Override
    public List<DecorationDto> getAllDecorations() {
        List<Decoration> cakes = decorationRepo.findAll();
        return cakes.stream().map(DecorationMapper::mapToDecorationDto).collect(Collectors.toList());
    }

    @Override
    public DecorationDto updateDecoration(Long userId, DecorationDto decorationDto) {
        Decoration existingDecoration = decorationRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
                Decoration updatedDecoration = DecorationMapper.mapToDecoration(decorationDto);
        updatedDecoration.setId(existingDecoration.getId());
        Decoration savedDecoration = decorationRepo.save(updatedDecoration);
        return DecorationMapper.mapToDecorationDto(savedDecoration);
    }

    @Override
    public void deleteDecoration(Long userId) {
        decorationRepo.deleteById(userId);
    }
}