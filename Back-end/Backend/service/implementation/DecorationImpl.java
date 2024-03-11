package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.DecorationDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.entity.Decoration;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.DecorationMapper;
import com.birthday.event.repository.DecorationRepo;
import com.birthday.event.service.DecorationService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DecorationImpl implements DecorationService {

    private final DecorationRepo decorationRepository;

    @Override
    public DecorationDto createDecoration(DecorationDto decorationDto) {
        Decoration decoration = DecorationMapper.mapToDecoration(decorationDto);
        Decoration savedDecoration = decorationRepository.save(decoration);
        return DecorationMapper.mapToDecorationDto(savedDecoration);
    }

    @Override
    public DecorationDto getDecorationById(Long decorationId) {
        Decoration decoration = decorationRepository.findById(decorationId)
                .orElseThrow(() -> new ResourceNotFoundException("Decoration not found with id: " + decorationId));
        return DecorationMapper.mapToDecorationDto(decoration);
    }

    @Override
    public List<DecorationDto> getAllDecorations() {
        List<Decoration> decorations = decorationRepository.findAll();
        return decorations.stream().map(DecorationMapper::mapToDecorationDto).collect(Collectors.toList());
    }

    @Override
    public DecorationDto updateDecoration(Long decorationId, DecorationDto decorationDto) {
        Decoration existingDecoration = decorationRepository.findById(decorationId)
                .orElseThrow(() -> new ResourceNotFoundException("Decoration not found with id: " + decorationId));
        Decoration updatedDecoration = DecorationMapper.mapToDecoration(decorationDto);
        updatedDecoration.setId(existingDecoration.getId());
        Decoration savedDecoration = decorationRepository.save(updatedDecoration);
        return DecorationMapper.mapToDecorationDto(savedDecoration);
    }

    @Override
    public void deleteDecoration(Long decorationId) {
        decorationRepository.deleteById(decorationId);
    }

    @Override
    public List<DecorationDto> getDecorationsByUserId(Long userId) {
        List<Decoration> decorations = decorationRepository.findUserById(userId);
        return decorations.stream().map(DecorationMapper::mapToDecorationDto).collect(Collectors.toList());
    }


      public List<Decoration> getWishlistedDecorations() {
        return decorationRepository.findByWishlistedTrue();
    }
}
