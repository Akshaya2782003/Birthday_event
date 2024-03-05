package com.birthday.event.service.implementation;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.CakeDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.CakeMapper;
import com.birthday.event.repository.CakeRepo;
import com.birthday.event.service.CakeService;

import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CakeImpl implements CakeService {

    private CakeRepo cakeRepo;

    @Override
    public CakeDto createCake(CakeDto cakeDto) {
        Cake cake = CakeMapper.mapToCake(cakeDto);
        Cake savedCake = cakeRepo.save(cake);
        return CakeMapper.mapToCakeDto(savedCake);
    }

    @Override
    public CakeDto getCakeById(Long userId) {
        Cake cake = cakeRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return CakeMapper.mapToCakeDto(cake);
    }

    @Override
    public List<CakeDto> getAllCakes() {
        List<Cake> cakes = cakeRepo.findAll();
        return cakes.stream().map(CakeMapper::mapToCakeDto).collect(Collectors.toList());
    }

    @Override
    public CakeDto updateCake(Long userId, CakeDto cakeDto) {
        Cake existingCake = cakeRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Cake updatedCake = CakeMapper.mapToCake(cakeDto);
        updatedCake.setId(existingCake.getId());
        Cake savedCake = cakeRepo.save(updatedCake);
        return CakeMapper.mapToCakeDto(savedCake);
    }

    @Override
    public void deleteCake(Long userId) {
        cakeRepo.deleteById(userId);
    }
}