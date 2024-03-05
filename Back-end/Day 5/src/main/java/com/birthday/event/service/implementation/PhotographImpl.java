package com.birthday.event.service.implementation;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.PhotographDto;
import com.birthday.event.entity.Photograph;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.PhotographMapper;
import com.birthday.event.repository.PhotographRepo;
import com.birthday.event.service.PhotographService;

import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PhotographImpl implements PhotographService {

    private PhotographRepo photographRepo;

    @Override
    public PhotographDto createPhotograph(PhotographDto photographDto) {
        Photograph photograph = PhotographMapper.mapToPhotograph(photographDto);
        Photograph savedPhotograph = photographRepo.save(photograph);
        return PhotographMapper.mapToPhotographDto(savedPhotograph);
    }

    @Override
    public PhotographDto getPhotographById(Long userId) {
        Photograph photograph = photographRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return PhotographMapper.mapToPhotographDto(photograph);
    }

    @Override
    public List<PhotographDto> getAllPhotographs() {
        List<Photograph> photographs = photographRepo.findAll();
        return photographs.stream().map(PhotographMapper::mapToPhotographDto).collect(Collectors.toList());
    }

    @Override
    public PhotographDto updatePhotograph(Long userId, PhotographDto photographDto) {
        Photograph existingPhotograph = photographRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Photograph updatedPhotograph = PhotographMapper.mapToPhotograph(photographDto);
        updatedPhotograph.setId(existingPhotograph.getId());
        Photograph savedPhotograph = photographRepo.save(updatedPhotograph);
        return PhotographMapper.mapToPhotographDto(savedPhotograph);
    }

    @Override
    public void deletePhotograph(Long userId) {
        photographRepo.deleteById(userId);
    }
}