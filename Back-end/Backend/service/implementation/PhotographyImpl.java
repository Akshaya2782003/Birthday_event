package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.PhotographyDto;
import com.birthday.event.entity.Photography;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.PhotographyMapper;
import com.birthday.event.repository.PhotographyRepo;
import com.birthday.event.service.PhotographyService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PhotographyImpl implements PhotographyService {

    private final PhotographyRepo photographyRepository;

    @Override
    public PhotographyDto createPhotography(PhotographyDto photographyDto) {
        Photography photography = PhotographyMapper.mapToPhotography(photographyDto);
        Photography savedPhotography = photographyRepository.save(photography);
        return PhotographyMapper.mapToPhotographyDto(savedPhotography);
    }

    @Override
    public PhotographyDto getPhotographyById(Long photographyId) {
        Photography photography = photographyRepository.findById(photographyId)
                .orElseThrow(() -> new ResourceNotFoundException("Photography service not found with id: " + photographyId));
        return PhotographyMapper.mapToPhotographyDto(photography);
    }

    @Override
    public List<PhotographyDto> getAllPhotographyServices() {
        List<Photography> photographyServices = photographyRepository.findAll();
        return photographyServices.stream().map(PhotographyMapper::mapToPhotographyDto).collect(Collectors.toList());
    }

    @Override
    public PhotographyDto updatePhotography(Long photographyId, PhotographyDto photographyDto) {
        Photography existingPhotography = photographyRepository.findById(photographyId)
                .orElseThrow(() -> new ResourceNotFoundException("Photography service not found with id: " + photographyId));
        Photography updatedPhotography = PhotographyMapper.mapToPhotography(photographyDto);
        updatedPhotography.setId(existingPhotography.getId());
        Photography savedPhotography = photographyRepository.save(updatedPhotography);
        return PhotographyMapper.mapToPhotographyDto(savedPhotography);
    }

    @Override
    public void deletePhotography(Long photographyId) {
        photographyRepository.deleteById(photographyId);
    }

    @Override
    public List<PhotographyDto> getPhotographyServicesByUserId(Long userId) {
        List<Photography> photographyServices = photographyRepository.findUserById(userId);
        return photographyServices.stream().map(PhotographyMapper::mapToPhotographyDto).collect(Collectors.toList());
    }


     public List<Photography> getWishlistedCakes() {
        return photographyRepository.findByWishlistedTrue();
    }

    @Override
    public List<Photography> getWishlistedPhotography() {
        return photographyRepository.findByWishlistedTrue();
    }
}
