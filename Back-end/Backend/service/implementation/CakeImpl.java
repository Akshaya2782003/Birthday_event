package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.CakeDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.CakeMapper;
import com.birthday.event.repository.CakeRepo;
import com.birthday.event.service.CakeService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CakeImpl implements CakeService {

    private final CakeRepo cakeRepository;

    @Override
    public CakeDto createCake(CakeDto cakeDto) {
        Cake cake = CakeMapper.mapToCake(cakeDto);
        Cake savedCake = cakeRepository.save(cake);
        return CakeMapper.mapToCakeDto(savedCake);
    }

    @Override
    public CakeDto getCakeById(Long cakeId) {
        Cake cake = cakeRepository.findById(cakeId)
                .orElseThrow(() -> new ResourceNotFoundException("Cake not found with id: " + cakeId));
        return CakeMapper.mapToCakeDto(cake);
    }

    @Override
    public List<CakeDto> getAllCakes() {
        List<Cake> cakes = cakeRepository.findAll();
        return cakes.stream().map(CakeMapper::mapToCakeDto).collect(Collectors.toList());
    }

    @Override
    public CakeDto updateCake(Long cakeId, CakeDto cakeDto) {
        Cake existingCake = cakeRepository.findById(cakeId)
                .orElseThrow(() -> new ResourceNotFoundException("Cake not found with id: " + cakeId));
        Cake updatedCake = CakeMapper.mapToCake(cakeDto);
        updatedCake.setId(existingCake.getId());
        Cake savedCake = cakeRepository.save(updatedCake);
        return CakeMapper.mapToCakeDto(savedCake);
    }

    @Override
    public void deleteCake(Long cakeId) {
        cakeRepository.deleteById(cakeId);
    }

    @Override
    public List<CakeDto> getCakesByUserId(Long userId) {
        List<Cake> cakes = cakeRepository.findUserById(userId);
        return cakes.stream().map(CakeMapper::mapToCakeDto).collect(Collectors.toList());
    }

    public List<Cake> getWishlistedCakes() {
        return cakeRepository.findByWishlistedTrue();
    }


}
